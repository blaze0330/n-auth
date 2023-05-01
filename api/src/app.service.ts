import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import { Repository } from 'typeorm';
import { User } from './user/entities/user.entity';
import { MailerService } from '@nestjs-modules/mailer';


@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, private mailerService: MailerService) {}
  getHello(): string {
    return 'Hello Universe!';
  }
  getUsers() {
    return [
    ]
  }

  
  async generateToken(user: User): Promise<string> {
    const token =  crypto.randomBytes(20).toString('hex');
    user.verification_code = token;
    console.log("generate token was called!!", user);
    await user.save();
    return token;
  }

  async generateVerficationLink(token: string, email: string): Promise<String> {
    return  `http://localhost:3000/verify-email?token=${token}&email=${encodeURIComponent(email)}`;
  }

  async findVerificationCodeByEmail(email: string): Promise<string> {
    const user = await this.userRepository.findOne({
      where: [
        {email: email}
      ]
    })
    return user.verification_code;
  }

  async findUserByEmailOrPhone(phoneOrEmail: string) {
    const user = await this.userRepository.findOne({
      where: [
        { phone_number: phoneOrEmail },
        { email: phoneOrEmail.toLowerCase() }
      ]
    });
    return user;
  }

  async sendVerificationMail(email: string, token: string) {
    const verificationLink = await this.generateVerficationLink(token, email);
    
      console.log("verificationLink => ", verificationLink);

      await this.mailerService.sendMail({
        to: email,
        from: 'Sharmatushar0k@gmail.com',
        subject: 'Email Verification',
        text: `Please use this link to verify your email ${verificationLink}`,
      });
  }

  async verifyUser(email: string) {
    const user = await this.userRepository.findOne({
      where: [
        {email: email}
      ]
    })
    user.email_verified = true;
    await user.save();
  }

}
