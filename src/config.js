import dotenv from 'dotenv';

dotenv.config();

const config = {
  test: {
    jwtsecret: 'node-api-jwt-sample',
  },
  development: {
    jwtsecret: 'node-api-jwt-sample',
  },
  staging: {
    jwtsecret: 'node-api-jwt-sample',
  },
  production: {
    jwtsecret: 'node-api-jwt-sample',
  },
};

const ENVIRONMENT = process.env.NODE_ENV || 'local';
export default config[ENVIRONMENT];
