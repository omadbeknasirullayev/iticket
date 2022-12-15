import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AdminDto {
  @IsEmail()
  readonly login: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
