import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EnvConfigService } from './app/config/env/env-config.service';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const env = app.get(EnvConfigService);

  try {
    await app.listen(env.get('BACKEND_PORT'));
    Logger.log(`🚀 Application is running on ${await app.getUrl()}/graphql`);
  } catch (error) {
    Logger.error('Unable to run application', error);
  }
}

bootstrap();
