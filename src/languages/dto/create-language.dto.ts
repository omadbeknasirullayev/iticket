import { IsNotEmpty, IsString } from "class-validator";

export class CreateLanguageDto {
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Language name must be string"})
    lang_name: string
}
