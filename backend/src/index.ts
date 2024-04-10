import express, {Request, Response, NextFunction} from 'express'
import {config} from 'dotenv';
import cors from 'cors';
import pool, { pgQueryPool } from './database/pg_pool';

config({
  path: './.env',
})
const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async (_req:Request, res:Response, _next:NextFunction) => {
  const db_client = await pool.connect();
  res.send("IPL Mania");
})

const port = process.env.SERVER_PORT!;
app.listen(port,()=>{
  console.log(`Server is listening on ${port}`);
})