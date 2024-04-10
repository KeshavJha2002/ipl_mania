import pg from 'pg';
require('dotenv').config();

const pool = new pg.Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: `${process.env.PG_PASSWORD}`,
    port: Number(process.env.PG_PORT)!
});

// test the connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
      console.error('Error connecting to the database:', err);
  } else {
      console.log('Connected to PostgreSQL database:', res.rows[0].now);
  }
});

export const pgQueryPool = (sql: string, params?: any) => {
  return pool.query(sql, params);
};

export default pool;