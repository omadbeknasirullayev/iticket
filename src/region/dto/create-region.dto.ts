import { IsString, IsUppercase } from "class-validator";

export class CreateRegionDto {
    @IsString({message: "region name must be string"})
    @IsUppercase({message: "Region name must be uppercase"})

    name: string
}
 