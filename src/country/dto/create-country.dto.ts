import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCountryDto {
    @IsString({message: "Country must be string"})
    readonly country: string;
}