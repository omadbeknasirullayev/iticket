import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'event_type', timestamps: false})

export class EventType extends Model<EventType> {
    @ApiProperty({example: 1, description: "Unical ID"})
    @Column({
        type: DataType.SMALLINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number
    
    @ApiProperty({example: "Comedy", description: "Event type name"})
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    name: string

    @ApiProperty({example: 1, description: "Parent event type id, connction with self"})
    @Column({
        type: DataType.SMALLINT
    })
    parent_event_type_id: number
}
