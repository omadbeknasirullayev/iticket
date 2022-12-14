import { IsString } from "class-validator";

export class CreateTicketTypeDto {
    @IsString({message: "Status name must be string"})
    name: string
}
