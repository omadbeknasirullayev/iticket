import { IsString } from "class-validator";

export class CreateVenueDto {
    @IsString({message: "venue name must be string"})
    name: string
    adress: string
    location: string
    site: string
    phone: string
    venue_type_id: number
    schema: string
    region_id: number
    district_id: number

}
