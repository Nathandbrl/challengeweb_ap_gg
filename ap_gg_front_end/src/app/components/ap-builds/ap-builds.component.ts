import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { ApBuildService, ApBuild } from '../../services/ap-build.service';

@Component({
  selector: 'app-ap-builds',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  templateUrl: './ap-builds.component.html',
  styleUrls: ['./ap-builds.component.css']
})
export class ApBuildsComponent implements OnInit {
  builds: ApBuild[] = [];
  loading = false;
  error: string | null = null;

  private buildService = inject(ApBuildService);

  ngOnInit(): void {
    this.loadBuilds();
  }

  loadBuilds(): void {
    this.loading = true;
    this.error = null;

    this.buildService.getBuilds().subscribe({
      next: (builds) => {
        this.builds = builds;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des builds';
        this.loading = false;
      }
    });
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
    return build.items.reduce((sum, item) => sum + (item.apBonus || 0), 0);
  }

  getTotalGold(build: ApBuild): number {
    return build.items.reduce((sum, item) => sum + (item.gold || 0), 0);
  }
}
