import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { SeatType } from "src/seat_type/entities/seat_type.entity";
import { Venue } from "src/venue/entities/venue.entity";

@Table({tableName: 'seats'})
export class Seat extends Model<Seat> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @Column({
        type: DataType.SMALLINT,
        allowNull: true
    })
    sector: number

    @Column({
        type: DataType.SMALLINT,
        allowNull: true
    })
    row_number: number

    @Column({
        type: DataType.SMALLINT,
        allowNull: true
    })
    number: number

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    venue_id: number

    @ForeignKey(() => SeatType)
    @Column({
        type: DataType.SMALLINT
    })
    seat_type_id: number

    @Column({
        type: DataType.STRING
    })
    location_in_schema: string

    @BelongsTo(() => Venue)
    venue: Venue

    @BelongsTo(() => SeatType)
    seatType: SeatType
}
