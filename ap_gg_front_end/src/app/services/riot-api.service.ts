import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RiotApiService {
  private apiUrl = 'http://localhost:8000/api/riot';
  private championsCache$: Observable<any> | null = null;
  private runesCache$: Observable<any> | null = null;
  private itemsCache$: Observable<any> | null = null;
  private spellsCache$: Observable<any> | null = null;

  constructor(private http: HttpClient) {}

  /**
   * Get all champions from Riot Data Dragon
   */
  getAllChampions(): Observable<any> {
    if (!this.championsCache$) {
      this.championsCache$ = this.http.get(`${this.apiUrl}/champions`).pipe(
        catchError(() => of({})),
        shareReplay(1)
      );
    }
    return this.championsCache$;
  }

  /**
   * Get specific champion details
   */
  getChampionDetails(championKey: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/champion/${championKey}`).pipe(
      catchError(() => of(null))
    );
  }

  /**
   * Get all runes
   */
  getRunes(): Observable<any> {
    if (!this.runesCache$) {
      this.runesCache$ = this.http.get(`${this.apiUrl}/runes`).pipe(
        catchError(() => of([])),
        shareReplay(1)
      );
    }
    return this.runesCache$;
  }

  /**
   * Get all items
   */
  getItems(): Observable<any> {
    if (!this.itemsCache$) {
      this.itemsCache$ = this.http.get(`${this.apiUrl}/items`).pipe(
        catchError(() => of({})),
        shareReplay(1)
      );
    }
    return this.itemsCache$;
  }

  /**
   * Get summoner spells
   */
  getSummonerSpells(): Observable<any> {
    if (!this.spellsCache$) {
      this.spellsCache$ = this.http.get(`${this.apiUrl}/summoner-spells`).pipe(
        catchError(() => of({})),
        shareReplay(1)
      );
    }
    return this.spellsCache$;
  }

  /**
   * Get champion image URL
   */
  getChampionImageUrl(championKey: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/champion-image/${championKey}`).pipe(
      catchError(() => of({ imageUrl: '' }))
    );
  }

  /**
   * Format rune tree for display
   */
  formatRuneTree(runeTree: any[]): any[] {
    return runeTree.map(tree => ({
      id: tree.id,
      key: tree.key,
      icon: tree.icon,
      name: tree.name,
      slots: tree.slots.map((slot: any) => ({
        runes: slot.runes.map((rune: any) => ({
          id: rune.id,
          key: rune.key,
          icon: rune.icon,
          name: rune.name,
          description: rune.description,
          longDescription: rune.longDesc
        }))
      }))
    }));
  }
}
