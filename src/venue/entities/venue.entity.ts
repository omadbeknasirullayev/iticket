import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { District } from "src/district/entities/district.entity";
import { Region } from "src/region/entities/region.entity";
import { VenueType } from "src/venue_type/entities/venue_type.entity";

interface CreateVenueAttr {
    name: string
}

@Table({tableName: 'venues'})
export class Venue extends Model<Venue, CreateVenueAttr> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    adress: string

    @Column({
        type: DataType.STRING
    })
    location: string

    @Column({
        type: DataType.STRING
    })
    site: string

    @Column({
        type: DataType.STRING
    })
    phone: string

    @ForeignKey(() => VenueType)
    @Column({
        type: DataType.BIGINT
    })
    venue_type_id: number

    @Column({
        type: DataType.STRING
    })
    schema: string

    @ForeignKey(() => Region)
    @Column({
        type: DataType.SMALLINT
    })
    region_id: number

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
