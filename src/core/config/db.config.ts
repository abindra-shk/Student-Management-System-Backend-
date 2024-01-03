const DB_VARS = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export const DB_CONFIG = `mongodb+srv://${DB_VARS.username}:${DB_VARS.password}@${DB_VARS.host}/?retryWrites=true&w=majority`;
