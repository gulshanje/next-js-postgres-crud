import "dotenv/config";

import knex from "knex";

const {
    DB_HOST, 
    DB_PORT, 
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE, 
} = process.env;

const knexConfig = knex({
  client: "postgresql",
  connection: {
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    // ssl: {
    //   rejectUnauthorized: false,
    // },
    pool: {
        min: 2,
        max: 10,
      },
    },
    migrations: {
        tableName: 'knex_migrations',
      },
   
  
});

export const onDatabaseConnected = async () => knexConfig.raw("SELECT 1")

export default  knexConfig;