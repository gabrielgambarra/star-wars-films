import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { FeedbackService } from './feedback.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class FilmService extends RestService {

  private filmURL = environment.apiUrl + 'films/';

  constructor(
    http: HttpClient,
    feedService: FeedbackService
  ) {
    super(http, feedService)
  }

  public getAllFilms(): Observable<any> {
    return this.get(`${this.filmURL}`);
  }

  public getFilmByID(filmID): Observable<any> {
    return this.get(`${this.filmURL}${filmID}`);
  }
}
