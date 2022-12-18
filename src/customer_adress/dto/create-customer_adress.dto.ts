import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCustomerAdressDto {
  @ApiProperty({
    example: 2,
    description: 'customer id, connection with customer table',
  })
  @IsNotEmpty({ message: 'cannot be empty' })
  @IsNumber()
  readonly customer_id: number;

  @ApiProperty({ example: 'Jhon', description: 'Customer name' })
  @IsNotEmpty({ message: 'cannot be empty' })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 2,
    description: 'country id, connection with country table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly country_id: number;

  @ApiProperty({
    example: 2,
    description: 'region id, connection with region table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly region_id: number;

  @ApiProperty({
    example: 4,
    description: 'district id, connection with district table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly district_id: number;

  @ApiProperty({ example: 'Qatortol', description: "Customer's street" })
  @IsNotEmpty()
  @IsString()
  readonly street: string;

  @ApiProperty({ example: '18 Dom', description: "Customer's house" })
  @IsNotEmpty()
  @IsString()
  readonly house: string;

  @ApiProperty({ example: '12 kv', description: "Customer's flat" })
  @IsString()
  readonly flat: string;

  @ApiProperty({ example: 'location', description: "Customer's location" })
  @IsString()
  readonly location?: string;

  @ApiProperty({ example: '170700', description: "Customer's post index" })
  @IsNotEmpty()
  @IsString()
  readonly post_index: string;

  @ApiProperty({ example: 'important', description: "Customer's info" })
  @IsString()
  readonly info?: string;
}
