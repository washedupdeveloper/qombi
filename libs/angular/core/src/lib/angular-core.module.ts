import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakAngularModule, KeycloakService as AuthService } from 'keycloak-angular';
import { keycloakFactory } from './auth/factory';
import { AuthGuard } from './auth/guards/auth.guard';

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, KeycloakAngularModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: keycloakFactory,
      multi: true,
      deps: [AuthService],
    },
    AuthGuard,
  ],
  exports: [CommonModule, BrowserModule, BrowserAnimationsModule],
})
export class AngularCoreModule {}
