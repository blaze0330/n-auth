import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user/entities/user.entity';


@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}
  getHello(): string {
    return 'Hello Universe!';
  }
  getUsers() {
    return [
    ]
  }
  async findUserByEmailOrPhone(phoneOrEmail: string) {
    console.log("Yes this place was reached!! ", phoneOrEmail);
    const user = await this.userRepository.findOne({
      where: [
        { phone_number: phoneOrEmail },
        { email: phoneOrEmail.toLowerCase() }
      ]
    });
    return user;
  }
}
