import {IsBoolean, IsEmail, IsNotEmpty} from "class-validator";

export class VerifyUserDto {
 @IsNotEmpty()
  token: string;

  @IsEmail()
  email: string;

}
