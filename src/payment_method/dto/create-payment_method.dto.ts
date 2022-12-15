import { IsString } from "class-validator";

export class CreatePaymentMethodDto {
    @IsString({message: "Payment method name must be string"})
    payment_name: string
}
