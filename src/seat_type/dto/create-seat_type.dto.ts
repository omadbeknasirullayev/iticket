import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSeatTypeDto {
    @ApiProperty({example: "Parter", description: "Seat type's name"})
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "region name must be string"})
    name: string
}
