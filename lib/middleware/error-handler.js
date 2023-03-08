import { CustomError} from '../errors/custom-error.js'
import { InternalServiceError } from '../errors/internal-service-error.js';

export const errorHandler = async (err, req, res, next) => {
  if(err instanceof CustomError){
    const status = err.status ? err.status : 500;
    return res.status(status).json(err);
  }

  const internalServiceError = new InternalServiceError('Internal Service Error');
  
  return res.status(500).json(internalServiceError);
}