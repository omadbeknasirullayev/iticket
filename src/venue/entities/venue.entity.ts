import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { District } from "src/district/entities/district.entity";
import { Region } from "src/region/entities/region.entity";
import { VenueType } from "src/venue_type/entities/venue_type.entity";

interface CreateVenueAttr {
    name: string
}


@Table({tableName: 'venues'})
export class Venue extends Model<Venue, CreateVenueAttr> {
    @ApiProperty({example: 1, description: "Unical ID"})
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: "Turkiston", description: "Vanue's name"})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string

    @ApiProperty({example: "Turkiston street", description: "Vanue's adress"})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    adress: string

    @ApiProperty({example: "location", description: "Vanue's location"})
    @Column({
        type: DataType.STRING
    })
    location: string

    @ApiProperty({example: "www.turkiston.uz", description: "Vanue's website"})
    @Column({
        type: DataType.STRING
    })
    site: string

    @ApiProperty({example: "+998712506395", description: "Vanue's phone number"})
    @Column({
        type: DataType.STRING
    })
    phone: string

    @ApiProperty({example: 2, description: "Vanue type id, connection with venue_type table"})
    @ForeignKey(() => VenueType)
    @Column({
        type: DataType.BIGINT
    })
    venue_type_id: number

    @ApiProperty({example: "visuel", description: "Visual appearance"})
    @Column({
        type: DataType.STRING
    })
    schema: string

    @ApiProperty({example: 3, description: "region id, connection with region table"})
    @ForeignKey(() => Region)
    @Column({
        type: DataType.SMALLINT
    })
    region_id: number

    @ApiProperty({example: 3, description: "district id, connection with district table"})
    @ForeignKey(() => District)
    @Column({
        type: DataType.SMALLINT
    })
    district_id: number

    @BelongsTo(() => VenueType)
    venue_type: VenueType

    @BelongsTo(() => Region)
    region: Region

    @BelongsTo(() => District)
    district: District

}
