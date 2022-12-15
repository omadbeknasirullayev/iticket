import { IsString } from "class-validator";

export class CreateDeliveryMethodDto {
    @IsString({message: "Delivery method name must be string"})
    delivery_name: string
}
