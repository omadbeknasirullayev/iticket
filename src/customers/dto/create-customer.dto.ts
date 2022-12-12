import { IsDate, IsEmail, IsNumber, IsString } from "class-validator"

export class CreateCustomerDto {
    @IsString({message: "Customer's first_name must be string"})
    first_name: string

    @IsString({message: "Customer's last_name must be string"})
    last_name: string

    @IsString({message: "Customer's phone must be string"})
    phone: string

    @IsString({message: "Customer's password must be string"})
    hashed_password: string

    @IsString({message: "Customer's email must be string"})
    @IsEmail({}, {message: "Invalid email entered"})
    email: string

    @IsDate({message: "Customer's birth_date must be date"})
    birth_date: Date

    @IsNumber({}, {message: "Customer's gender must be number"})
    gender: number

    @IsNumber({}, {message: "Customer's language_id must be number"})
    lang_id: number

    @IsString({message: "Customer's refresh_token must be string"})
    hashed_refresh_token?: string
}

