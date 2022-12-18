import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateSeatDto {
    @ApiProperty({example: 2, description: "Sector number"})
    @IsNotEmpty()
    @IsNumber()
    readonly sector: number
    
    @ApiProperty({example: 21, description: "Row number"})
    @IsNotEmpty()
    @IsNumber()
    readonly row_number: number
    
    @ApiProperty({example: 45, description: "Seat number"})
    @IsNotEmpty()
    @IsNumber()
    readonly number: number
    
    @ApiProperty({example: 1, description: "venue id, connection venue table"})
    @IsNotEmpty()
    @IsNumber()
    readonly venue_id: number

    @ApiProperty({example: 1, description: "seat type id, connection seat_type table"})
    @IsNotEmpty()
    @IsNumber()
    readonly seat_type_id: number

    @ApiProperty({example: "visual", description: "visual appearance"})
    readonly location_in_schema?: string

}
