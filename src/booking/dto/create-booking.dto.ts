import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, isNumber } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({
    example: 2,
    description: 'card id, connection with card table',
  })
  @IsNumber()
  card_id: number;

  @ApiProperty({
    example: 2,
    description: 'payment method id , connection with payment method table',
  })
  @IsNumber({}, { message: 'Payment method must be number' })
  payment_method_id: number;

  @ApiProperty({
    example: 1,
    description: 'delivery method id , connection with delivery method table',
  })
  @IsNumber({}, { message: 'Delivery method must be number' })
  delivery_method_id: number;

  @ApiProperty({
    example: 3,
    description: 'discount cupon id , connection with discount cupon table',
  })
  @IsNumber({}, { message: 'Discount method must be number' })
  discount_cupon_id: number;
}
