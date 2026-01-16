import { Routes } from '@angular/router';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { ChampionsListComponent } from './components/champions-list/champions-list.component';
import { ApBuildsComponent } from './components/ap-builds/ap-builds.component';

export const routes: Routes = [
  { path: '', redirectTo: '/builds', pathMatch: 'full' },
  { path: 'search', component: SearchPlayerComponent },
  { path: 'champions', component: ChampionsListComponent },
  { path: 'builds', component: ApBuildsComponent },
  { path: 'champion/:name', loadComponent: () => import('./components/champion-detail/champion-detail.component').then(m => m.ChampionDetailComponent) },
];
