import { asyncWrapper } from '../../lib/middleware/async-wrapper.js';
import * as searchService from './search-service.js';

export const searchControllerFn = asyncWrapper(async (req, res, next) => {
    const params = req.validated.query;
    
    const response = await searchService.searchServiceFn(params);

    res.send(response);
})

export const postControllerFn = asyncWrapper(async (req, res, next) => {
    const bodys = req.validated.body;

    const response = await searchService.postServiceFn(bodys);
    
    res.send(response);
})


