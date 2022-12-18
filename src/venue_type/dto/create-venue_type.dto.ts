import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateVenueTypeDto {
    @ApiProperty({example: "Stadion", description: "Venue Type name"})
    @IsString({message: "venue_type name must be string"})
    name: string
}
