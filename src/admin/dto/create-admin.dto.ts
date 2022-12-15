import { IsString } from "class-validator"

export class CreateAdminDto {
    
    @IsString({message: "Admin's name must be string"})
    readonly name: string

    @IsString({message: "Admin's login must be string"})
    readonly login: string

    @IsString({message: "Admin's password must be string"})
    readonly password: string
}
