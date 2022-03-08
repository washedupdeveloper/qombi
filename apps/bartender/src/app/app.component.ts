import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { User } from '@qombi/angular/core';
import { KeycloakService as AuthService } from 'keycloak-angular';
import { map, Observable, shareReplay } from 'rxjs';
import { routes } from './router/routes';

@Component({
  selector: 'qombi-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .mat-list-base {
        padding-top: 0px;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = 'bartender';
  isLoggedIn: boolean;
  user?: User;
  routes = routes;
  isSidebarExpanded = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, private readonly auth: AuthService) {}

  public async ngOnInit() {
    this.isLoggedIn = await this.auth.isLoggedIn();

    if (this.isLoggedIn) {
      this.user = await this.auth.loadUserProfile();
    }
  }

  public toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    console.log(this.user);
  }

  public async login() {
    return await this.auth.login();
  }
  public async logout() {
    return await this.auth.logout();
  }
}
