import { IsNotEmpty, IsString } from "class-validator";

export class CreateDeliveryMethodDto {
    @IsNotEmpty({message: "cannot be empty"})
    @IsString({message: "Delivery method name must be string"})
    delivery_name: string
}
