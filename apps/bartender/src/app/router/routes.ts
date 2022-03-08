import { AuthGuard } from '@qombi/angular/core';
import { DashboardComponent } from '@qombi/angular/ui';
import { NavRoute } from './models';

export const routes: NavRoute[] = [
  { path: '', pathMatch: 'full', redirectTo: '/', name: 'home', icon: 'home' },
  { path: 'dashboard', name: 'dashboard', icon: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'drinks', component: DashboardComponent, icon: 'liquor' },
  // { path: 'ingredients', component: DashboardComponent, icon: 'wine_bar' },
  // { path: 'pumps', component: DashboardComponent, icon: '' },
];
