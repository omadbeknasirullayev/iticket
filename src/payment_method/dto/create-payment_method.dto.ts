import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentMethodDto {
  @ApiProperty({example: "Plastic", description: "Payment method name"})
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Payment method name must be string"})
    payment_name: string
}
