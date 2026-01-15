import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChampionService, Champion } from '../../services/champion.service';
import { BuildDetailService, BuildDetail } from '../../services/build-detail.service';
import { RiotApiService } from '../../services/riot-api.service';

@Component({
  selector: 'app-champion-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent implements OnInit {
  champion: Champion | null = null;
  buildDetail: BuildDetail | null = null;
  riotChampionData: any = null;
  runes: any[] = [];
  items: any = {};
  spells: any = {};
  loading = false;
  error: string | null = null;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private championService = inject(ChampionService);
  private buildDetailService = inject(BuildDetailService);
  private riotApiService = inject(RiotApiService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const champName = params['name'];
      if (champName) {
        this.loadChampionDetail(champName);
      }
    });
  }

  loadChampionDetail(name: string): void {
    this.loading = true;
    this.error = null;

    this.championService.getChampions().subscribe({
      next: (champions) => {
        this.champion = champions.find(c => c.name.toLowerCase() === name.toLowerCase()) || null;
        if (this.champion) {
          this.buildDetail = this.buildDetailService.generateBuildDetail(
            this.champion.name,
            this.champion.role
          );
          
          // Charger données Riot pour ce champion
          this.riotApiService.getChampionDetails(name).subscribe({
            next: (data) => {
              this.riotChampionData = data;
            }
          });

          // Charger runes Riot
          this.riotApiService.getRunes().subscribe({
            next: (runes) => {
              this.runes = this.riotApiService.formatRuneTree(runes);
              this.loading = false;
            }
          });

          // Charger items
          this.riotApiService.getItems().subscribe({
            next: (items) => {
              this.items = items;
            }
          });

          // Charger summoner spells
          this.riotApiService.getSummonerSpells().subscribe({
            next: (spells) => {
              this.spells = spells;
            }
          });
        } else {
          this.error = 'Champion non trouvé';
          this.loading = false;
        }
      },
      error: (err) => {
        console.error('Erreur lors du chargement du champion:', err);
        this.error = 'Erreur lors du chargement du champion';
        this.loading = false;
      }
    });
  }

  getRuneIcon(name: string): string {
    return this.buildDetailService.getRuneIcon(name);
  }

  getRoleBadgeColor(): string {
    const roleColors: { [key: string]: string } = {
      'Top': '#ff6b6b',
      'Mid': '#4ecdc4',
      'ADC': '#ffe66d',
      'Support': '#95e1d3',
      'Jungle': '#a29bfe'
    };
    return roleColors[this.champion?.role || ''] || '#888';
  }

  getRuneImageUrl(runePath: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/img/${runePath}`;
  }

  getItemImageUrl(itemId: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/${itemId}.png`;
  }

  getSpellImageUrl(spellImage: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/${spellImage}`;
  }

  getSpellMaxOrder(): string {
    if (!this.riotChampionData?.spells) return 'N/A';
    // Pour AP: priorité aux sorts scalant avec AP (généralement Q, E, W)
    return 'Q > E > W > Q';
  }

  getRecommendedSummonerSpells(): string[] {
    // Adapter selon le rôle
    if (this.champion?.role === 'Top' || this.champion?.role === 'Mid') {
      return ['Flash', 'Teleport'];
    } else if (this.champion?.role === 'ADC') {
      return ['Flash', 'Heal'];
    } else if (this.champion?.role === 'Support') {
      return ['Flash', 'Exhaust'];
    } else if (this.champion?.role === 'Jungle') {
      return ['Flash', 'Smite'];
    }
    return ['Flash', 'Teleport'];
  }

  goBack(): void {
    this.router.navigate(['/champions']);
  }
}
