import { CustomError } from "./custom-error.js";

export class BadRequestError extends CustomError {
  constructor(data){
    super();
    this.status = 400;
    this.message = 'Bad Request Error';
    this.data = data
  }
}