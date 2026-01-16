import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChampionService, Champion } from '../../services/champion.service';
import { map, switchMap, timeout, tap, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-champion-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent implements OnInit {
  champion: Champion | null = null;
  riotData: any = null;
  randomBuild: string[] = [];
  loading = true;
  error: string | null = null;

  private apItemIds = [
    '3089', '3157', '3135', '3116', '3152', '3165', '4645', '3003', '6653', '6655',
    '3100', '3115', '4628', '4629', '4633', '4636', '4637', '3151', '3102', '3198'
  ];
  private bootItemIds = ['3020', '3158', '3006', '3009', '3047', '3111', '3117'];

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private championService = inject(ChampionService);
  private http = inject(HttpClient);

  ngOnInit(): void {
    console.log('ChampionDetail: Component initialized');
    this.route.params.subscribe(params => {
      const name = params['name'];
      console.log('ChampionDetail: Route param "name" changed to:', name);
      if (name) {
        this.loadData(name);
      } else {
        console.warn('ChampionDetail: No "name" param in route');
      }
    });
  }

  loadData(name: string): void {
    console.log('ChampionDetail: Starting loadData for:', name);
    this.loading = true;
    this.error = null;

    // 1. Get our DB champion
    this.championService.getChampions().pipe(
      timeout(8000), // Safety timeout for DB call
      tap(champs => console.log('ChampionDetail: Received DB champions count:', champs.length)),
      map(champions => {
        const found = champions.find(c => c.name.toLowerCase() === name.toLowerCase());
        if (!found) {
          console.error('ChampionDetail: Champion not found in DB list. Target was:', name);
          throw new Error(`Champion "${name}" not found in our database.`);
        }
        return found;
      }),
      switchMap(champion => {
        this.champion = champion;
        console.log('ChampionDetail: Matched champion:', champion);

        // 2. Fetch Riot Data directly from DDragon
        const normalized = this.getNormalizedName(champion.name);
        // Use full URL to avoid any relative path issues
        const ddragonUrl = `https://ddragon.leagueoflegends.com/cdn/14.1.1/data/en_US/champion/${normalized}.json`;
        console.log('ChampionDetail: Fetching Riot Data from:', ddragonUrl);

        return this.http.get(ddragonUrl).pipe(
          timeout(10000), // Safety timeout for Riot call
          tap(() => console.log('ChampionDetail: Raw Riot response received'))
        );
      }),
      catchError(err => {
        console.error('ChampionDetail: Error in data pipeline:', err);
        return throwError(() => err);
      })
    ).subscribe({
      next: (data: any) => {
        console.log('ChampionDetail: Final data received by subscriber:', data);
        if (data && data.data) {
          // Data dragon returns { data: { "ChampionName": { ... } } }
          const champKey = Object.keys(data.data)[0];
          this.riotData = data.data[champKey];
          this.generateRandomBuild();
          console.log('ChampionDetail: Success! Parsed riotData for:', champKey);
        } else {
          console.error('ChampionDetail: DDragon returned unexpected format:', data);
          this.error = "Invalid data format from Riot API.";
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('ChampionDetail: Final subscribe error:', err);
        this.error = err.message || "Failed to load champion. Please check your connection.";
        this.loading = false;
      }
    });
  }

  generateRandomBuild(): void {
    // Pick 1 boots
    const bootId = this.bootItemIds[Math.floor(Math.random() * this.bootItemIds.length)];

    // Pick 5 random unique AP items
    const shuffledAp = [...this.apItemIds].sort(() => 0.5 - Math.random());
    const selectedAp = shuffledAp.slice(0, 5);

    this.randomBuild = [bootId, ...selectedAp];
  }

  getNormalizedName(name: string): string {
    if (!name) return '';
    let normalized = name.replace(/[' .]/g, '');
    normalized = name.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }).replace(/[' .]/g, '');

    if (normalized === 'Wukong') normalized = 'MonkeyKing';
    if (normalized === 'LeBlanc') normalized = 'Leblanc';
    if (normalized === 'KhaZix') normalized = 'Khazix';
    if (normalized === 'ChoGath') normalized = 'Chogath';
    if (normalized === 'KaiSa') normalized = 'Kaisa';
    if (normalized === 'VelKoz') normalized = 'Velkoz';
    return normalized;
  }

  getSplashUrl(): string {
    if (!this.champion) return '';
    const normalized = this.getNormalizedName(this.champion.name);
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${normalized}_0.jpg`;
  }

  getChampionIcon(): string {
    if (!this.champion) return '';
    const normalized = this.getNormalizedName(this.champion.name);
    return `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${normalized}.png`;
  }

  getSpellIcon(filename: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/${filename}`;
  }

  getItemUrl(itemId: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/${itemId}.png`;
  }

  goBack(): void {
    this.router.navigate(['/champions']);
  }
}
