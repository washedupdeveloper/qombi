import { Injectable } from '@nestjs/common';
import { KeycloakConnectOptions, KeycloakConnectOptionsFactory } from 'nest-keycloak-connect';
import { EnvConfigService } from '../env/env-config.service';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
  constructor(private readonly config: EnvConfigService) {}

  createKeycloakConnectOptions(): KeycloakConnectOptions {
    return {
      authServerUrl: this.config.get('AUTH_SERVER_URL'),
      realm: this.config.get('REALM'),
      clientId: this.config.get('BACKEND_CLIENT_ID'),
      secret: this.config.get('SECRET'),
    };
  }
}
