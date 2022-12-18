import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Event } from "src/event/entities/event.entity";
import { Seat } from "src/seat/entities/seat.entity";
import { Status } from "src/status/entities/status.entity";
import { TicketType } from "src/ticket_type/entities/ticket_type.entity";

@Table({tableName: 'tickets'})
export class Ticket extends Model<Ticket> {
    @ApiProperty({example: 1, description: "Unical ID"})
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number
    
    @ApiProperty({example: 1, description: "event id, connection with event table"})
    @ForeignKey(() => Event)
    @Column({
        type: DataType.BIGINT
    })
    event_id: number

    @ApiProperty({example: 1, description: "seat id, connection with seat table"})
    @ForeignKey(() => Seat)
    @Column({
        type: DataType.BIGINT
    })
    seat_id: number

    @ApiProperty({example: 150000, description: "ticket's price"})
    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    price: number

    @ApiProperty({example: 1500, description: "service fee"})
    @Column({
        type: DataType.DECIMAL,
    })
    service_fee: number

    @ApiProperty({example: 1, description: "status id, connection with status table"})
    @ForeignKey(() => Status)
    @Column({
        type: DataType.SMALLINT
    })
    status_id: number

    @ApiProperty({example: 1, description: "ticket_type id, connection with ticket_type table"})
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
