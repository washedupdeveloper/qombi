import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';

const materialDesign: (unknown[] | Type<unknown> | ModuleWithProviders<unknown>)[] = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatTooltipModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, LayoutModule, materialDesign],
  declarations: [DashboardComponent],
  exports: [CommonModule, BrowserModule, BrowserAnimationsModule, LayoutModule, materialDesign, DashboardComponent],
})
export class AngularUiModule {}
