import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config({
    path: '.env'
});
const app = express();
// const port = process.env.PORT;
const port =8000;
app.use(cors());
app.get('/api', (_req, res, _next) => {
    res.send('Hello from server');
});
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
