// write out a class that lists all properties that an incoming request
// to create a user should have
// write out a class that lists all properties that an incoming request
// to create a user should have
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
