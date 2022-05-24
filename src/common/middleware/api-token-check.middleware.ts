import {
  BadRequestException,
  HttpException,
  HttpStatus,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction } from 'express';
import { ApiTokenPayment } from './exceptions/api-token-payment.exception';

export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['api-token'] !== 'my-token') {
      // throw new BadRequestException('Token does not match');
      // throw new HttpException('My response', HttpStatus.PAYMENT_REQUIRED);
      throw new ApiTokenPayment();
    }
    next();
  }
}

// client

// first middleware

// seconde middleware

// third middleware
