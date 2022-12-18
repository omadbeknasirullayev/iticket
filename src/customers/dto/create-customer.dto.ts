import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Jhon', description: "Customer's first name" })
  @IsString({ message: "Customer's first_name must be string" })
  readonly first_name: string;

  @ApiProperty({ example: 'Doe', description: "Customer's lats name" })
  @IsString({ message: "Customer's last_name must be string" })
  readonly last_name: string;

  @ApiProperty({
    example: '+998999002559',
    description: "Customer's phone number",
  })
  @IsString({ message: "Customer's phone must be string" })
  readonly phone: string;

  @ApiProperty({
    example: 'myPassword',
    description: "Customer's hashed password",
  })
  @IsString({ message: "Customer's password must be string" })
  readonly hashed_password: string;

  @ApiProperty({ example: 'doe@gmail.com', description: "Customer's email" })
  @IsString({ message: "Customer's email must be string" })
  @IsEmail({}, { message: 'Invalid email entered' })
  readonly email: string;

  @ApiProperty({
    example: '1',
    description: "Customer's sex, connected gender table",
  })
  @IsNumber({}, { message: "Customer's gender must be number" })
  readonly gender: number;

  @ApiProperty({
    example: '2',
    description: "Customer's language connected language table",
  })
  @IsNumber({}, { message: "Customer's language_id must be number" })
  readonly lang_id: number;
}
