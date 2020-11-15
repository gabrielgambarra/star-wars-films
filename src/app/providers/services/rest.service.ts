import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FeedbackService } from './feedback.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    public http: HttpClient,
    private feedService: FeedbackService
  ) { }

  get(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable.bind(this))
    );
  }

  public handleErrorObservable(error: HttpErrorResponse): Observable<never> {
    if (error.status === 404) {
      this.feedService.filmNotFound();
      setInterval(() => this.feedService.goToHomePage(), 2000);
    }

    return throwError(error);
  }

  public extractData(res: any) {
    try {
      const body = res.json();
      return body;
    } catch (error) {
      return res;
    }
  }
}
