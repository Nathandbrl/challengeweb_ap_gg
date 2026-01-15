import { Component, OnInit, OnDestroy, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable, Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { Champion } from '../../services/champion.service';
import { ChampionSearchService } from '../../services/champion-search.service';

@Component({
  selector: 'app-champion-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './champion-search.component.html',
  styleUrls: ['./champion-search.component.css']
})
export class ChampionSearchComponent implements OnInit, OnDestroy {
  @Output() searchResults = new EventEmitter<Champion[]>();
  @Output() championSelected = new EventEmitter<Champion>();

  searchControl = new FormControl('');
  filteredSuggestions$: Observable<Champion[]>;
  private destroy$ = new Subject<void>();
  private searchService = inject(ChampionSearchService);

  ngOnInit(): void {
    // Setup autocomplete with debounce
    this.filteredSuggestions$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged((prev, current) => {
        if (typeof prev === 'string' && typeof current === 'string') {
          return prev === current;
        }
        return false;
      }),
      switchMap(value => {
        const query = typeof value === 'string' ? value : value?.name || '';
        
        if (!query || query.length === 0) {
          return this.searchService.getTopChampions(5);
        }
        if (query.length < 2) {
          return new Observable(observer => {
            observer.next([]);
            observer.complete();
          });
        }
        return this.searchService.getAutocompleteSuggestions(query);
      }),
      takeUntil(this.destroy$)
    );
  }

  displayFn(champion: Champion | string): string {
    if (typeof champion === 'string') {
      return champion;
    }
    return champion?.name || '';
  }

  clearSearch(): void {
    this.searchControl.setValue('');
    this.searchService.clearSearch();
  }

  performSearch(): void {
    const value = this.searchControl.value;
    const query = typeof value === 'string' ? value : value?.name || '';
    
    if (query && query.trim()) {
      this.searchService.updateSearchQuery(query);
      this.searchService.getSearchResults()
        .pipe(takeUntil(this.destroy$))
        .subscribe(results => {
          this.searchResults.emit(results);
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
