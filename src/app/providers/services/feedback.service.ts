import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  public filmNotFound() {
    this.snackBar.open('Film not found!', '', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  public goToHomePage(): void {
    this.router.navigate(['/']);
  }
}
