import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SignInDto } from './dto/sign-in.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './user/entities/user.entity';
import { VerifyUserDto } from './dto/verify-user.dto';
import { ResendMailDto } from './dto/resend-mail.dto';

@Controller()
export class AppController {
  constructor
  (private readonly appService: AppService,
    ) {}

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
    try { // first save then generate a token as it may fail in rare ocassions
      const token = await this.appService.generateToken(user); // generate token and save user
      const email = user.email;
      await this.appService.sendVerificationMail(email, token);
      
      return {succes: "Mail was sent!"}
    } catch (error) {
      console.log(error);
      return {success: "Unable to send the verification mail"};
    }
    // console.log("UserCreate");
  }

  @Post('verify-email') 
  async verify(@Body() body: VerifyUserDto) {
    const {token, email} = body;
    console.log("token: ", token);
    console.log("email: ", email);
    const verificationCode = await this.appService.findVerificationCodeByEmail(email);
    if (verificationCode === token) {
      await this.appService.verifyUser(email);
      return {success: true}
    } else {
      console.log("Unable to verify user. Wrong verification code!!");
      return {success: false}
    }
  }

  @Post('resend-verification-code')
  async resendMail(@Body() body: ResendMailDto) {
    const email = body.email;
    const user = await this.appService.findUserByEmailOrPhone(email); // find the user for which we have to change the code
    const newToken = await this.appService.generateToken(user); // generate new code for that user
    this.appService.sendVerificationMail(email, newToken);
  }

}
