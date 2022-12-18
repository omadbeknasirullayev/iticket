import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDiscountCuponDto {
  @ApiProperty({example: "Winter", description: "Cupon name"})
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Discount cupon name must be string"})
    cupon_name: string
}
