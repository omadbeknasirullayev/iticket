import { IsString } from "class-validator";

export class CreateDiscountCuponDto {
    @IsString({message: "Discount cupon name must be string"})
    cupon_name: string
}
