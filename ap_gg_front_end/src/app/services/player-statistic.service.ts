import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PlayerStatistic {
  id: number;
  playerId: number;
  championId: number;
  championName: string;
  gamesPlayed?: number;
  wins?: number;
  winRate?: number;
  avgKills?: number;
  avgDeaths?: number;
  avgAssists?: number;
  avgCsPerMin?: number;
  avgGoldPerMin?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerStatisticService {
  private apiUrl = 'http://localhost:8000/api/statistics';

  constructor(private http: HttpClient) { }

  getPlayerStatistics(playerId: number): Observable<PlayerStatistic[]> {
    return this.http.get<PlayerStatistic[]>(`${this.apiUrl}/player/${playerId}`);
  }
}
