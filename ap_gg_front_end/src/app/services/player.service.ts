import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Player {
  id: number;
  riotId: string;
  summonerName: string;
  tagLine?: string;
  profileIconUrl?: string;
  summonerLevel: number;
  rank?: string;
  tier?: string;
  leaguePoints?: number;
  wins: number;
  losses: number;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:8000/api/players';

  constructor(private http: HttpClient) { }

  searchPlayer(summonerName: string): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/search?q=${summonerName}`);
  }

  getPlayerByRiotId(riotId: string): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/${riotId}`);
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/${id}`);
  }

  createPlayer(player: Partial<Player>): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player);
  }

  updatePlayer(id: number, player: Partial<Player>): Observable<Player> {
    return this.http.put<Player>(`${this.apiUrl}/${id}`, player);
  }
}
