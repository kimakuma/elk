import { CustomError } from "./custom-error.js";

export class NotFoundError extends CustomError {
  constructor(data){
    super();
    this.status = 404;
    this.message = 'Not Found Error';
    this.data = data;
  }
}