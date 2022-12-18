import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTicketTypeDto {
    @ApiProperty({example: "Gold", description: "Ticket Type name"})
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Status name must be string"})
    name: string
}
