import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { NotificationService } from '../../notifications/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService,
    private readonly notification: NotificationService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    if (!this.authenticated) {
      // await this.keycloak.login({
      //   redirectUri: window.location.origin + state.url,
      // });
      this.notification.display('Unauthorized');
      return false;
    }

    const requiredRoles: unknown[] = route.data['roles'];
    console.log('roles', requiredRoles);

    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) return true;

    return requiredRoles.every((role) => this.roles.includes(role));
  }
}
