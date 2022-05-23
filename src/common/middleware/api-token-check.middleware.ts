import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['api-token'] !== 'my-token') {
      throw new BadRequestException('Token does not match');
    }
    next();
  }
}

// client

// first middleware

// seconde middleware

// third middleware
