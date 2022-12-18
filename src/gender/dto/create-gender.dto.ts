import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateGenderDto {
    @ApiProperty({example: "Men", description: "Gender name"})
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Gender name must be string"})
    name: string
}
