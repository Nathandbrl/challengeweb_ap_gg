import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ApBuildService, ApBuild } from '../../services/ap-build.service';

@Component({
  selector: 'app-ap-builds',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './ap-builds.component.html',
  styleUrls: ['./ap-builds.component.css']
})
export class ApBuildsComponent implements OnInit {
  builds: ApBuild[] = [];
  loading = false;
  error: string | null = null;

  private apItemIds = [
    '3089', '3157', '3135', '3116', '3152', '3165', '4645', '3003', '6653', '6655',
    '3100', '3115', '4628', '4629', '4633', '4636', '4637', '3151', '3102', '3198'
  ];
  private bootItemIds = ['3020', '3158', '3006', '3009', '3047', '3111', '3117'];

  private buildService = inject(ApBuildService);

  ngOnInit(): void {
    this.loadBuilds();
  }

  loadBuilds(): void {
    this.loading = true;
    this.error = null;

    this.buildService.getBuilds().subscribe({
      next: (builds) => {
        // We ensure every build shown on the homepage looks "full" (6 items)
        // If a build from DB is incomplete or placeholder-y, we'll randomize its items
        this.builds = builds.slice(0, 10).map(build => {
          const hasMissingIcons = build.items ? build.items.some(it => !it.riotId) : true;

          if (!build.items || build.items.length < 5 || hasMissingIcons) {
            // Generate some high-quality random items for this build
            const randomItems = this.generatePredefinedBuild(build.id);
            return { ...build, items: randomItems };
          }
          return build;
        });
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des builds';
        this.loading = false;
      }
    });
  }

  // Purely visual: generate a stable random build for cards that don't have items in DB
  private generatePredefinedBuild(seed: number) {
    const items = [];
    // 1. One Pair of Boots (random but stable per build ID)
    const bootId = this.bootItemIds[seed % this.bootItemIds.length];
    items.push({ id: 0, name: 'Bottes', riotId: bootId, apBonus: 0, gold: 1100 });

    // 2. Five Unique powerful AP items
    const apPool = [...this.apItemIds];
    // Mix the pool based on seed to ensure different builds have different items
    const shuffledPool = apPool.sort((a, b) => {
      const hashA = (parseInt(a) * seed) % 100;
      const hashB = (parseInt(b) * seed) % 100;
      return hashA - hashB;
    });

    const selectedAp = shuffledPool.slice(0, 5);
    selectedAp.forEach((riotId, index) => {
      items.push({
        id: index + 1,
        name: 'Objet AP',
        riotId: riotId,
        apBonus: 70 + (seed % 30),
        gold: 3000
      });
    });

    return items;
  }

  getDifficultyColor(difficulty?: string): string {
    switch (difficulty?.toLowerCase()) {
      case 'facile':
        return 'easy';
      case 'moyen':
        return 'medium';
      case 'difficile':
        return 'hard';
      default:
        return 'unknown';
    }
  }

  getTotalApBonus(build: ApBuild): number {
    if (!build.items) return 0;
    return build.items.reduce((sum, item) => sum + (item.apBonus || 40), 0); // Mock bonus if missing
  }

  getChampionIcon(championName: string): string {
    if (!championName) return 'assets/default-champion.png';
    let normalized = championName.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }).replace(/[' .]/g, '');

    if (normalized === 'Wukong') normalized = 'MonkeyKing';
    if (normalized === 'LeBlanc') normalized = 'Leblanc';
    if (normalized === 'KhaZix') normalized = 'Khazix';
    if (normalized === 'ChoGath') normalized = 'Chogath';
    if (normalized === 'KaiSa') normalized = 'Kaisa';
    if (normalized === 'VelKoz') normalized = 'Velkoz';

    return `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${normalized}.png`;
  }

  getItemIcon(item: any): string {
    if (item.riotId) {
      return `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/${item.riotId}.png`;
    }
    // Fallback if no riotId
    return `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/1001.png`;
  }

  getTotalGold(build: ApBuild): number {
    if (!build.items) return 0;
    return build.items.reduce((sum, item) => sum + (item.gold || 3000), 0);
  }
}
