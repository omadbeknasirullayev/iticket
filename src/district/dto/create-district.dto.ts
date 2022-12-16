import { IsNotEmpty, IsString } from "class-validator";

export class CreateDistrictDto {
    @IsNotEmpty({message: "Cannot be empty"})
    @IsString({message: "District name must be string"})
    name: string
}
