import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateLanguageDto {
    @ApiProperty({example: "English", description: "Language name"})
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Language name must be string"})
    lang_name: string
}
