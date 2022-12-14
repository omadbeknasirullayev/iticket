import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "src/customers/entities/customer.entity";
import { Status } from "src/status/entities/status.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";

@Table({tableName: 'cards'})

export class Card extends Model<Card> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Ticket)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    ticket_id: number
    
    @ForeignKey(() => Customer)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    customer_id: number

    @Column({
        type: DataType.DATE,
        defaultValue: Date.now()
    })
    createdAt: Date

    @Column({
        type: DataType.DATE,
        defaultValue: Date.now() + 180000
    })
    finishedAt: Date

    @ForeignKey(() => Status)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    status_id: number

    @BelongsTo(() => Ticket)
    ticket: Ticket

    @BelongsTo(() => Customer) 
    customer: Customer

    @BelongsTo(() => Status)
    status: Status 
}
