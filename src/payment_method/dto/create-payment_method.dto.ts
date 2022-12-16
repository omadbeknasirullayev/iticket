import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentMethodDto {
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Payment method name must be string"})
    payment_name: string
}
