import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, startWith } from 'rxjs/operators';
import { Champion } from './champion.service';

export interface SearchResult {
  champions: Champion[];
  query: string;
  totalResults: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChampionSearchService {
  private apiUrl = 'http://localhost:8000/api/champions';
  private searchQuery$ = new BehaviorSubject<string>('');
  private searchResults$ = new BehaviorSubject<Champion[]>([]);

  /**
   * Observable for search results with debounce
   */
  public results$: Observable<Champion[]>;

  constructor(private http: HttpClient) {
    // Setup search with debounce and distinctUntilChanged
    this.results$ = this.searchQuery$.pipe(
      debounceTime(300), // Wait 300ms after user stops typing
      distinctUntilChanged(), // Only search if query changed
      switchMap(query => {
        if (!query.trim()) {
          return new Observable(observer => {
            observer.next([]);
            observer.complete();
          });
        }
        return this.searchChampions(query);
      }),
      startWith([])
    );

    // Subscribe to results and update behavior subject
    this.results$.subscribe(results => {
      this.searchResults$.next(results);
    });
  }

  /**
   * Update the search query
   */
  updateSearchQuery(query: string): void {
    this.searchQuery$.next(query);
  }

  /**
   * Get current search results
   */
  getSearchResults(): Observable<Champion[]> {
    return this.searchResults$.asObservable();
  }

  /**
   * Search champions via API
   */
  private searchChampions(query: string): Observable<Champion[]> {
    return this.http.get<Champion[]>(`${this.apiUrl}/search`, {
      params: { q: query }
    });
  }

  /**
   * Get champion autocomplete suggestions
   */
  getAutocompleteSuggestions(query: string): Observable<Champion[]> {
    if (!query.trim()) {
      return new Observable(observer => {
        observer.next([]);
        observer.complete();
      });
    }
    return this.http.get<Champion[]>(`${this.apiUrl}/autocomplete`, {
      params: { q: query }
    });
  }

  /**
   * Get top champions for suggestions (when search is empty)
   */
  getTopChampions(limit: number = 5): Observable<Champion[]> {
    return this.http.get<Champion[]>(`${this.apiUrl}/top`, {
      params: { limit: limit.toString() }
    });
  }

  /**
   * Clear search
   */
  clearSearch(): void {
    this.searchQuery$.next('');
  }

  /**
   * Get current query
   */
  getCurrentQuery(): string {
    return this.searchQuery$.value;
  }
}
