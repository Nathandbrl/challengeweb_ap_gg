import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ChampionService, Champion } from '../../services/champion.service';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-champions-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FilterPipe
  ],
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.css']
})
export class ChampionsListComponent implements OnInit {
  champions: Champion[] = [];
  filteredChampions: Champion[] = [];
  loading = false;
  error: string | null = null;
  selectedRole: string = 'all';
  searchQuery: string = '';

  private championService = inject(ChampionService);

  ngOnInit(): void {
    this.loadChampions();
  }

  loadChampions(): void {
    this.loading = true;
    this.error = null;

    this.championService.getChampions().subscribe({
      next: (champions) => {
        this.champions = champions;
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des champions';
        this.loading = false;
      }
    });
  }

  filterByRole(role: string): void {
    this.selectedRole = role;
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = this.champions;

    // Filtre par rôle
    if (this.selectedRole !== 'all') {
      filtered = filtered.filter(c => c.role === this.selectedRole);
    }

    // Filtre par recherche
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(query) ||
        c.title.toLowerCase().includes(query)
      );
    }

    this.filteredChampions = filtered;
  }

  getRoles(): string[] {
    const roles = new Set(this.champions.map(c => c.role));
    return Array.from(roles).sort();
  }

  getChampionLink(name: string): string {
    return `/champion/${name}`;
  }
}
