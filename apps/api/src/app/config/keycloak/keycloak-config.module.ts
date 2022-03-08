import { Module } from '@nestjs/common';
import { EnvConfigModule } from '../env/env-config.module';
import { KeycloakConfigService } from './keycloak-config.service';

@Module({
  imports: [EnvConfigModule],
  providers: [KeycloakConfigService],
  exports: [KeycloakConfigService],
})
export class KeycloakConfigModule {}
