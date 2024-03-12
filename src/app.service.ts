import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getIndex(): string {
    return 'Hello World?';
  }

  responseNew(): string {
    return 'Hello World...';
  }
}
