import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Champion {
  id: number;
  name: string;
  title: string;
  description?: string;
  role: string;
  imageUrl?: string;
  pickRate?: number;
  winRate?: number;
  riotId?: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private apiUrl = 'http://localhost:8000/api/champions';

  constructor(private http: HttpClient) { }

  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(this.apiUrl);
  }

  getChampion(id: number): Observable<Champion> {
    return this.http.get<Champion>(`${this.apiUrl}/${id}`);
  }

  getChampionsByRole(role: string): Observable<Champion[]> {
    return this.http.get<Champion[]>(`${this.apiUrl}/role/${role}`);
  }
}
