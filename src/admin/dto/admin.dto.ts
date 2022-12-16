import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AdminDto {
  // @IsEmail({}, {message: "noto'g'ri"})
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
