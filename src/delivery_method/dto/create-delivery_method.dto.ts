import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDeliveryMethodDto {
  @ApiProperty({example: "Express 24", description: "Delivery name"})
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Delivery method name must be string"})
    delivery_name: string
}
