export interface EnvironmentVariables {
  BACKEND_PORT: number;
  FRONTEND_PORT: number;

  // Postgres
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DOMAIN: string;
  POSTGRES_PORT: number;
  POSTGRES_DB: string;
  POSTGRES_SCHEMA: string;

  // Prisma
  DATABASE_URL: string;

  // Keycloak
  AUTH_SERVER_URL?: string;
  REALM?: string;
  BACKEND_CLIENT_ID?: string;
  FRONTEND_CLIENT_ID?: string;
  SECRET?: string;
}
