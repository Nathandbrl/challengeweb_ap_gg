import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlayerService, Player } from '../../services/player.service';

@Component({
  selector: 'app-search-player',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent {
  searchQuery = '';
  player: Player | null = null;
  loading = false;
  error: string | null = null;

  private playerService = inject(PlayerService);

  searchPlayer(): void {
    if (!this.searchQuery.trim()) {
      this.error = 'Veuillez entrer un pseudo';
      return;
    }

    this.loading = true;
    this.error = null;

    this.playerService.searchPlayer(this.searchQuery).subscribe({
      next: (player) => {
        this.player = player;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Joueur non trouvé';
        this.player = null;
        this.loading = false;
      }
    });
  }

  getWinRate(): number {
    if (!this.player || !this.player.wins || !this.player.losses) {
      return 0;
    }
    const total = this.player.wins + this.player.losses;
    return total > 0 ? (this.player.wins / total) * 100 : 0;
  }
}
