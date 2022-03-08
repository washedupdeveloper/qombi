import { Route } from '@angular/router';

export interface NavRoute extends Route {
  name: string;
  icon?: string;
}
