import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './models/environment';

@Injectable()
export class EnvConfigService extends ConfigService<EnvironmentVariables, true> {}
