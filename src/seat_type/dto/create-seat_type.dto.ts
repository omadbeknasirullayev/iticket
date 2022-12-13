import { IsString } from "class-validator";

export class CreateSeatTypeDto {
    @IsString({message: "region name must be string"})

    name: string
}
