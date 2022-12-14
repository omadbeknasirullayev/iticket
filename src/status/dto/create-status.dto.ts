import { IsString } from "class-validator";

export class CreateStatusDto {
    @IsString({message: "Status name must be string"})
    name: string
}
