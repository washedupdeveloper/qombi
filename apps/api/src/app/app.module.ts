import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EnvConfigModule } from './config/env/env-config.module';
import { KeycloakModule } from './keycloak/keycloak.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    EnvConfigModule,
    KeycloakModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
    TestModule,
  ],
})
export class AppModule {}
