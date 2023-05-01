import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SignInDto } from './dto/sign-in.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './user/entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('signIn')
  async signIn(@Body() body: SignInDto) {
    const {phoneOrEmail, password} = body;
    const user = await this.appService.findUserByEmailOrPhone(phoneOrEmail);
    if (!user) {
      console.log("User with the credentials doesn't exist")
      return {success: false};
    }
    const validPwd = await user.validatePassword(password).then((op) => op);
    if (user && validPwd) {
      return {success: true};
    } else {
      return {success: false};
    }
  }

  @Post('register')
  async register(@Body() body: RegisterUserDto) {
    const {first_name, last_name, email, dialing_code, phone_number, password} = Object.values(body)[0];
    // console.log("body => ", body);
    // console.log("password => ", password);
    const user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.dialing_code = dialing_code;
    user.phone_number = phone_number;
    user.password = password;
    try {
      const savedUser = await user.save();
      // console.log(savedUser);
      return {succes: true}
    } catch (error) {
      console.log(error);
      return {success: false};
    }
    // console.log("UserCreate");
  }

}
