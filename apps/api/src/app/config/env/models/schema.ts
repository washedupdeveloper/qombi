import Joi from 'joi';
import { EnvironmentVariables } from './environment';

export const validationSchema = Joi.object<EnvironmentVariables & { NODE_ENV: string }>({
  NODE_ENV: Joi.string().valid('development', 'production', 'staging', 'testing').default('development'),

  BACKEND_PORT: Joi.number().port().required().default(4000),
  FRONTEND_PORT: Joi.number().port().required().default(4200),

  // Postgres
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DOMAIN: Joi.string().required(),
  POSTGRES_PORT: Joi.number().port().required(),
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_SCHEMA: Joi.string().required(),

  // Prisma
  DATABASE_URL: Joi.string().required(),

  // Keycloak
  AUTH_SERVER_URL: Joi.string().optional(),
  REALM: Joi.string().optional(),
  BACKEND_CLIENT_ID: Joi.string().optional(),
  FRONTEND_CLIENT_ID: Joi.string().optional(),
  SECRET: Joi.string().optional(),
});
