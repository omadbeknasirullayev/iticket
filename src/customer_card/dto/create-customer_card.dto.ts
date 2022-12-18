import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCustomerCardDto {
  @ApiProperty({
    example: 2,
    description: 'customer id, connection with customer table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly customer_id: number;

  @ApiProperty({ example: 'Jhon', description: 'Card name' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: '+998999002559', description: 'Phone Number' })
  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @ApiProperty({ example: '8600041526698745', description: "Card's number" })
  @IsNotEmpty()
  @IsString()
  readonly number: string;

  @ApiProperty({ example: '2022', description: "Card's year" })
  @IsNotEmpty()
  @IsString()
  readonly year: string;

  @ApiProperty({ example: '10', description: "Card's month" })
  @IsNotEmpty()
  @IsString()
  readonly month: string;
}
