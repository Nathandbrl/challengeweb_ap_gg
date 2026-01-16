import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApBuild {
  id: number;
  name: string;
  description?: string;
  difficulty?: string;
  winRate?: number;
  pickCount?: number;
  tips?: string;
  priority: number;
  isActive: boolean;
  champion: {
    id: number;
    name: string;
  };
  items: Array<{
    id: number;
    name: string;
    apBonus?: number;
    gold?: number;
    riotId?: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApBuildService {
  private apiUrl = 'http://localhost:8000/api/builds';

  constructor(private http: HttpClient) { }

  getBuilds(): Observable<ApBuild[]> {
    return this.http.get<ApBuild[]>(this.apiUrl);
  }

  getBuild(id: number): Observable<ApBuild> {
    return this.http.get<ApBuild>(`${this.apiUrl}/${id}`);
  }

  getBuildsByChampion(championName: string): Observable<ApBuild[]> {
    return this.http.get<ApBuild[]>(`${this.apiUrl}/champion/${championName}`);
  }
}
