import { IsNumber } from "class-validator"

export class CreateCardDto {
    @IsNumber({}, {message: "Ticket_id must be number"})
    ticket_id: number

    @IsNumber({}, {message: "Customer_id method must be number"})
    customer_id: number

    @IsNumber({}, {message: "Status_id method must be number"})
    status_id: number
}
