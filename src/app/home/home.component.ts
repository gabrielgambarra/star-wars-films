import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../providers/services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films = [];
  teste;

  constructor(
    private filmsService: FilmService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFilms();
  }

  private getFilms(): void {
    this.filmsService.getAllFilms().subscribe(
      success => {
        // Here I'm destructuring the API response.
        // With this process, I get only the data that I'll need.
        success.results.forEach(({ title }) => {
          let imgURL = '../../assets/films/' + title.toLowerCase().split(' ').join('-') + '.jpg';
          this.films.push(Object.assign({ title, imgURL }));
        });
      }
    );
  }

  public openFilmDetail(filmID): void {
    this.router.navigate([`/film/${filmID}`]);
  }

}
