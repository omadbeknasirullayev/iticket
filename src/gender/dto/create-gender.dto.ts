import { IsNotEmpty, IsString } from "class-validator";

export class CreateGenderDto {
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Gender name must be string"})
    name: string
}
