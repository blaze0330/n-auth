import {IsBoolean, IsEmail, IsNotEmpty} from "class-validator";

export class RegisterUserDto {

  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  dialing_code: string;

  @IsNotEmpty()
  phone_number: string;

  @IsNotEmpty()
  password: string;

}
