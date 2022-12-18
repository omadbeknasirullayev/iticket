import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty({ example: 'Opera', description: "Event's name" })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: '13.12.2022', description: "Event's start date" })
  @IsNotEmpty()
  @IsDate()
  readonly start_date: Date;

  @ApiProperty({ example: '15:00', description: "Event's start time" })
  @IsNotEmpty()
  @IsString()
  readonly start_time: string;

  @ApiProperty({ example: '16.12.2022', description: "Event's finished date" })
  @IsNotEmpty()
  @IsDate()
  readonly finish_date: Date;

  @ApiProperty({ example: '16:00', description: "Event's finished time" })
  @IsNotEmpty()
  @IsString()
  readonly finish_time: string;

  @ApiProperty({ example: 'text about', description: "Event's info" })
  @IsString()
  readonly info?: string;

  @ApiProperty({
    example: '2',
    description: 'Event type id, connection with event_type table',
  })
  @IsNumber()
  readonly event_type_id?: number;

  @ApiProperty({
    example: '3',
    description: 'Human category id, connection with human_category table',
  })
  @IsNumber()
  readonly human_category_id?: number;

  @ApiProperty({
    example: '2',
    description: 'Venue id, connection with venue table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly venue_id: number;

  @ApiProperty({
    example: '2',
    description: 'Language id, connection with language table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly lang_id: number;

  @ApiProperty({ example: '20.10.2021', description: 'Event release date' })
  @IsDate()
  readonly release_date?: Date;
}