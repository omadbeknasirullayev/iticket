import { IsNotEmpty, IsString } from "class-validator";

export class CreateSeatTypeDto {
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "region name must be string"})
    name: string
}
