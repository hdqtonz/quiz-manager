import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiTokenPayment extends HttpException {
  constructor() {
    super('Token suggest payment is required', HttpStatus.PAYMENT_REQUIRED);
  }
}
