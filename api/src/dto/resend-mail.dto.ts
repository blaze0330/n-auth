import {IsBoolean, IsEmail, IsNotEmpty} from "class-validator";

export class ResendMailDto {
  @IsEmail()
  email: string;

}
