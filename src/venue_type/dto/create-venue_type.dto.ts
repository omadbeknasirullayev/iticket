import { IsString } from "class-validator";

export class CreateVenueTypeDto {
    @IsString({message: "venue_type name must be string"})

    name: string
}
