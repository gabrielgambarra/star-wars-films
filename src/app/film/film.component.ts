import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../providers/services/film.service';
import { FeedbackService } from '../providers/services/feedback.service';
import { Film } from '../providers/models/Film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  filmID: string;
  film: Film = new Film();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private filmsService: FilmService,
    private feedService: FeedbackService
  ) { }

  ngOnInit(): void {
    this.setRouterEvents();
    this.checkFilmID();
  }

  private checkFilmID(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id') !== null) {
      this.filmID = this.activatedRoute.snapshot.paramMap.get('id');
      this.getFilm();
    } else {
      this.goToHomePage();
    }
  }

  private setRouterEvents(): void {
    this.router.events.subscribe((val) => {
      if (val.toString().toLowerCase().includes('error: cannot match any routes')) {
        this.feedService.goToHomePage();
      } else {
        window.location.reload();
      }

    });
  }

  private getFilm(): void {
    this.filmsService.getFilmByID(this.filmID).subscribe(
      success => {
        this.film = success;
      }
    );
  }

  public goToHomePage(): void {
    this.router.navigate(['/']);
  }

}
