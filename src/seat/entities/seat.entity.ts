import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { SeatType } from "src/seat_type/entities/seat_type.entity";
import { Venue } from "src/venue/entities/venue.entity";

@Table({tableName: 'seats'})
export class Seat extends Model<Seat> {
    @ApiProperty({example: 1, description: "Unical ID"})
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number
    
    @ApiProperty({example: 2, description: "Sector number"})
    @Column({
        type: DataType.SMALLINT,
        allowNull: true
    })
    sector: number

    @ApiProperty({example: 21, description: "Row number"})
    @Column({
        type: DataType.SMALLINT,
        allowNull: true
    })
    row_number: number

    @ApiProperty({example: 45, description: "Seat number"})
    @Column({
        type: DataType.SMALLINT,
        allowNull: true
    })
    number: number

    @ApiProperty({example: 1, description: "venue id, connection venue table"})
    @ForeignKey(() => Venue)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    venue_id: number

    @ApiProperty({example: 1, description: "seat type id, connection seat_type table"})
    @ForeignKey(() => SeatType)
    @Column({
        type: DataType.SMALLINT
    })
    seat_type_id: number

    @ApiProperty({example: "visual", description: "visual appearance"})
    @Column({
        type: DataType.STRING
    })
    location_in_schema: string

    @BelongsTo(() => Venue)
    venue: Venue

    @BelongsTo(() => SeatType)
    seatType: SeatType
}
