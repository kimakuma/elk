import express from 'express';
import * as dotenv from 'dotenv';
import { errorHandler } from '../lib/middleware/error-handler.js';
import { NotFoundError } from '../lib/errors/not-found-error.js';
import { router as articleRouter } from './search/index.js';

dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false})); // object parsing

app.use('/article', articleRouter);

app.use((req, res, next) => {
    next(new NotFoundError(`Cannot ${req.method} ${req.path}`)); 
});
  
app.use(errorHandler)
  
process.on('uncaughtException', (err) => {
    process.exit(1);
});
  
process.on('unhandledRejection', (reason) => {
    process.exit(1);
});
  