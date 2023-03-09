import express from 'express';
import { validate } from '../../lib/middleware/validate.js' 
import * as controller from './search-controller.js';
import * as schema from './config/request-schema.js';

export const router = express.Router();

router.get('/search', validate(schema.searchSchema), controller.searchControllerFn);
router.post('/write', validate(schema.postSchema), controller.postControllerFn);