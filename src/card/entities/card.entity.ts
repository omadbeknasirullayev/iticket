import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "src/customers/entities/customer.entity";
import { Status } from "src/status/entities/status.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";

@Table({tableName: 'cards'})

export class Card extends Model<Card> {
    @ApiProperty({example: 1, description: "Unical ID"})
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 2, description: "ticket id , connection with ticket table"})
    @ForeignKey(() => Ticket)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    ticket_id: number
    
    @ApiProperty({example: 1, description: "custmer id, connection customer table"})
    @ForeignKey(() => Customer)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    customer_id: number

    @ApiProperty({example: "01.12.2022", description: "created date"})
    @Column({
        type: DataType.DATE,
        defaultValue: Date.now()
    })
    createdAt: Date

    @ApiProperty({example: "05.12.2022", description: "finished date"})
    @Column({
        type: DataType.DATE,
        defaultValue: Date.now() + 180000
    })
    finishedAt: Date

    @ApiProperty({example: 2, description: "status id, connection with status table"})
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
