import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SignInDto } from './sign-in.dto';

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
    console.log(body);
    console.log(phoneOrEmail);

    const user = await this.appService.findUserByEmailOrPhone(phoneOrEmail);
    console.log("This place was reached!!! ");
    if (!user) {
      console.log("failed to find user")
      return {success: false};
    }
    const validPwd = await user.validatePassword(password).then((op) => op);
    console.log(user);
    console.log(validPwd);
    if (user && validPwd) {
      return {success: true};
    } else {
      console.log("failed to find user")
      return {success: false};
    }
  }

}
