import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
  host: process.env.SQL_URL,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE_NAME,
});
