import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateStatusDto {
  @ApiProperty({example: "Active", description: "Status name"})
    @IsString({message: "Status name must be string"})
    name: string
}
