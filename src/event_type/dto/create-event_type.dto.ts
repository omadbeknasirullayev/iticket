import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateEventTypeDto {
    @ApiProperty({example: "Men", description: "Gender name"})
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty({example: 1, description: "parent event type id"})
    @IsNumber()
    parent_event_type_id: number
}
