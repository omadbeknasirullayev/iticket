import { IsString } from "class-validator";

export class CreateDistrictDto {
    @IsString({message: "District name must be string"})
    name: string
}
