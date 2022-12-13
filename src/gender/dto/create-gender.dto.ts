import { IsString } from "class-validator";

export class CreateGenderDto {
    @IsString({message: "Gender name must be string"})
    name: string
}
