import { IsNotEmpty, IsString } from "class-validator";

export class CreateTicketTypeDto {
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Status name must be string"})
    name: string
}
