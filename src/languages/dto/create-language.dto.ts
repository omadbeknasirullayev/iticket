import { IsString } from "class-validator";

export class CreateLanguageDto {
    @IsString({message: "Language name must be string"})
    lang_name: string
}
