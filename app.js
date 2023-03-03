import express from 'express';
import dotenv from 'dotenv';

import { search_controller } from './controller/search.controller.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`)
});

app.use('/search', search_controller);