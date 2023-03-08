import * as yup from 'yup';
import { BadRequestError } from '../errors/bad-request-error.js';

export const validate = (schema) => async (req, res, next) => {
  try {
    const validated = await yup.object(schema).validate({
      body: req.body,
      query: req.query,
      params: req.params
    });

    req.validated = validated;

    return next();
  } catch (err) {
    next(new BadRequestError(err.message));
  }
}