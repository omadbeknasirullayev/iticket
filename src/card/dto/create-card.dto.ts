import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateCardDto {
  @ApiProperty({
    example: 2,
    description: 'ticket id , connection with ticket table',
  })
  @IsNumber({}, { message: 'Ticket_id must be number' })
  ticket_id: number;

  @ApiProperty({
    example: 1,
    description: 'custmer id, connection customer table',
  })
  @IsNumber({}, { message: 'Customer_id method must be number' })
  customer_id: number;

  @ApiProperty({
    example: 2,
    description: 'status id, connection with status table',
  })
  @IsNumber({}, { message: 'Status_id method must be number' })
  status_id: number;
}
