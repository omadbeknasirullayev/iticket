import { IsNotEmpty } from "class-validator"

export class CreateCustomerAdressDto {
    @IsNotEmpty({message: "cannot be empty"})
    readonly customer_id: number
    readonly name: string
    readonly country_id: number
    readonly region_id: number
    readonly district_id: number
    readonly street: string
    readonly house: string
    readonly flat: string
    readonly location: string
    readonly post_index: string
    readonly info: string
}
