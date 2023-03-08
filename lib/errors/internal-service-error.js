import { CustomError } from "./custom-error.js";

export class InternalServiceError extends CustomError {
  constructor(data){
    super();
    this.status = 500;
    this.message = 'Internal Service Error';
    this.data = data;
  }
}