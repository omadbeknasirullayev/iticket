import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table({tableName: 'seat_types', timestamps: false})

export class SeatType extends Model<SeatType> {
    @Column({
        type: DataType.SMALLINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string
}
