import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateVenueDto {
  @ApiProperty({ example: 'Turkiston', description: "Vanue's name" })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'Turkiston street', description: "Vanue's adress" })
  @IsNotEmpty()
  @IsString()
  readonly adress: string;

  @ApiProperty({ example: 'location', description: "Vanue's location" })
  @IsString()
  readonly location: string;

  @ApiProperty({ example: 'www.turkiston.uz', description: "Vanue's website" })
  @IsString()
  readonly site?: string;

  @ApiProperty({
    example: '+998712506395',
    description: "Vanue's phone number",
  })
  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @ApiProperty({
    example: 2,
    description: 'Vanue type id, connection with venue_type table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly venue_type_id: number;

  @ApiProperty({ example: 'visuel', description: 'Visual appearance' })
  @IsString()
  readonly schema?: string;

  @ApiProperty({
    example: 3,
    description: 'region id, connection with region table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly region_id: number;

  @ApiProperty({
    example: 3,
    description: 'district id, connection with district table',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly district_id: number;
}
