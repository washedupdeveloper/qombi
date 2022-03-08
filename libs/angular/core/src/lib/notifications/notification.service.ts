import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationType } from '.';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(readonly snackbar: MatSnackBar) {}

  display(message: string, type: NotificationType = 'INFO') {
    const duration: number = type === 'INFO' || 'SUCCESS' ? 2500 : 5000;

    this.snackbar.open(message, 'close', { duration, horizontalPosition: 'right', verticalPosition: 'top' });
  }
}
