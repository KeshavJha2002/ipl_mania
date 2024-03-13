import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {config} from 'dotenv';
config({
  path: '.env'
});

const app = express();
const port = process.env.PORT!;
app.use(cors());

app.get('/api', (_req:Request, res:Response, _next:NextFunction) => {
  res.send('Hello from server');
});

app.listen(port,()=>{
  console.log(`Server started on ${port}`);
});