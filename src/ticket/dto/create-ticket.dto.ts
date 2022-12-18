import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTicketDto {
  @ApiProperty({
    example: 1,
    description: 'event id, connection with event table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly event_id: number;

  @ApiProperty({
    example: 1,
    description: 'seat id, connection with seat table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly seat_id: number;

  @ApiProperty({ example: 150000, description: "ticket's price" })
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @ApiProperty({ example: 1500, description: 'service fee' })
  @IsNumber()
  readonly service_fee?: number;

  @ApiProperty({
    example: 1,
    description: 'status id, connection with status table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly status_id: number;

  @ApiProperty({
    example: 1,
    description: 'ticket_type id, connection with ticket_type table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly ticket_type_id: number;
}
