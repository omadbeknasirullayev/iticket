import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'genders', timestamps: false})

export class Gender extends Model<Gender>{
    @Column({
        type: DataType.SMALLINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        unique: true
    })
    name: string
}
