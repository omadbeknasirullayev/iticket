import { IsNumber, isNumber } from "class-validator"

export class CreateBookingDto {
    @IsNumber({}, {message: "Payment method must be number"})
    payment_method_id: number

    @IsNumber({}, {message: "Delivery method must be number"})
    delivery_method_id: number

    @IsNumber({}, {message: "Discount method must be number"})
    discount_cupon_id: number
}
