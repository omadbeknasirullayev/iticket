import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'event_type', timestamps: false})

export class EventType extends Model<EventType> {
    @Column({
        type: DataType.SMALLINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    name: string

    @Column({
        type: DataType.SMALLINT
    })
    parent_event_type_id: number
}
