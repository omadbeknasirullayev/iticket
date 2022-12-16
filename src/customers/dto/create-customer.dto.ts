import { IsDate, IsEmail, IsNumber, IsString } from "class-validator"

export class CreateCustomerDto {
    @IsString({message: "Customer's first_name must be string"})
    readonly first_name: string

    @IsString({message: "Customer's last_name must be string"})
    readonly last_name: string

    @IsString({message: "Customer's phone must be string"})
    readonly phone: string

    @IsString({message: "Customer's password must be string"})
    readonly hashed_password: string

    @IsString({message: "Customer's email must be string"})
    @IsEmail({}, {message: "Invalid email entered"})
    readonly email: string

    @IsDate({message: "Customer's birth_date must be date"})
    readonly birth_date: Date

    @IsNumber({}, {message: "Customer's gender must be number"})
    readonly gender: number

    @IsNumber({}, {message: "Customer's language_id must be number"})
    readonly lang_id: number

    @IsString({message: "Customer's refresh_token must be string"})
    readonly hashed_refresh_token?: string
}

