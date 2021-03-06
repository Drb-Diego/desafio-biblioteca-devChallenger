import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = createPool({
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true,
});

export default connection;
