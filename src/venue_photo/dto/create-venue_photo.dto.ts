import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateVenuePhotoDto {
    @ApiProperty({example: 2, description: "connection with venue table"})
    @IsNotEmpty({message: "cannot be empty"})
    @IsNumber({}, {message: "object_id must be number"})
    readonly object_id: number
}
