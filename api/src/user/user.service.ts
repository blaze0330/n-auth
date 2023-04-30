import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  // inject user repository

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}
  
  // this will be used for registering a new user.

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.first_name = createUserDto.first_name;
    user.last_name = createUserDto.last_name;
    user.email = createUserDto.email;
    user.dialing_code = createUserDto.dialing_code;
    user.phone_number = createUserDto.phone_number;
    user.password = createUserDto.password;
    // user.password_salt = createUserDto.password_salt;

    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // this will be used in signing in

  findOne(id: number) {
    return this.userRepository.findOne({where: {id: id}});
  }

  // won't use this in current app but can be used in things like forgot password etc. ig.

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   let user: User = new User();
  //   user.id = id;
  //   user.first_name = updateUserDto.first_name;
  //   user.last_name = updateUserDto.last_name;
  //   user.email = updateUserDto.email;
  //   user.dialing_code = updateUserDto.dialing_code;
  //   user.phone_number = updateUserDto.phone_number;
  //   user.password_hash = updateUserDto.password_hash;
  //   user.password_salt = updateUserDto.password_salt;
  //   return `This action updates a #${id} user`;
  // }

  // things like delete account etc.

  // remove(id: number) {
  //   return this.userRepository.delete(id);
  // }
}
