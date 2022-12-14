import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Event } from "src/event/entities/event.entity";
import { Seat } from "src/seat/entities/seat.entity";
import { Status } from "src/status/entities/status.entity";
import { TicketType } from "src/ticket_type/entities/ticket_type.entity";

@Table({tableName: 'tickets'})
export class Ticket extends Model<Ticket> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @ForeignKey(() => Event)
    @Column({
        type: DataType.BIGINT
    })
    event_id: number

    @ForeignKey(() => Seat)
    @Column({
        type: DataType.BIGINT
    })
    seat_id: number

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    price: number

    @Column({
        type: DataType.DECIMAL,
    })
    service_fee: number

    @ForeignKey(() => Status)
    @Column({
        type: DataType.SMALLINT
    })
    status_id: number

    @ForeignKey(() => TicketType)
    @Column({
        type: DataType.SMALLINT
    })
    ticket_type_id: number

    @BelongsTo(() => Event)
    event: Event

    @BelongsTo(() => Seat)
    seat: Seat

    @BelongsTo(() => Status)
    status: Status

    @BelongsTo(() => TicketType)
    ticket_type: TicketType
}
