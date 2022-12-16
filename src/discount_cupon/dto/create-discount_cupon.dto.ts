import { IsNotEmpty, IsString } from "class-validator";

export class CreateDiscountCuponDto {
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Discount cupon name must be string"})
    cupon_name: string
}
