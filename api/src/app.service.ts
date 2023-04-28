import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Universe!';
  }
  getUsers() {
    return [
      {
        email: 'tusharsharma2440160@gmail.com',
        password: 'password'
      },
      {
        email: 'tusharsharma160@gmail.com',
        password: 'password'
      },
      {
        email: 'tusharsharma2460@gmail.com',
        password: 'password'
      },
    ]
  }
}
