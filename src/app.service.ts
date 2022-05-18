import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSomething(): string {
    return 'Someting can be sent back';
  }
}
