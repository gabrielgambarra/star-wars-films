import { Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'film/:id',
    component: FilmComponent
  }
];
