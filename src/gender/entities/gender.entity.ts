import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'genders', timestamps: false})

export class Gender extends Model<Gender>{
    @ApiProperty({example: 1, description: "Unical ID"})
    @Column({
        type: DataType.SMALLINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number
    
    @ApiProperty({example: "Men", description: "Gender name"})
    @Column({
        type: DataType.STRING,
        unique: true
    })
    name: string
}
