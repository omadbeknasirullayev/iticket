import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateVenuePhotoDto {
    @IsNotEmpty({message: "cannot be empty"})
    @IsNumber({}, {message: "object_id must be number"})
    readonly object_id: number
}
