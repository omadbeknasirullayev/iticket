import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCountryDto {
    @ApiProperty({example:'Estonia',description:'Country name'})
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Country must be string"})
    readonly country: string;
}