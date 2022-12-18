import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table({tableName: 'seat_types', timestamps: false})

export class SeatType extends Model<SeatType> {
    @ApiProperty({example: 1, description: "Unical ID"})
    @Column({
        type: DataType.SMALLINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number
    
    @ApiProperty({example: "Parter", description: "Seat type's name"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string
}
