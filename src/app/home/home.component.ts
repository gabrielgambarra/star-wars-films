import { Component, OnInit } from '@angular/core';
import { FilmService } from '../providers/services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films = [];

  constructor(
    private filmsService: FilmService
  ) { }

  ngOnInit(): void {
    this.getFilms();
  }

  private getFilms(): void {
    this.filmsService.getAllFilms().subscribe(
      success => {
        // Here I'm destructuring the API response.
        // With this process, I get only the data that I'll need.
        success.results.forEach(({ title, episode_id, director }) => {
          this.films.push(Object.assign({ title, episode_id, director }));
        });
      }
    );
  }

}
