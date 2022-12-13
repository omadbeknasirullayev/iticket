import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'regions', timestamps: false})

export class Region extends Model<Region> {
    @Column({
        type: DataType.SMALLINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @Column({
        type: DataType.STRING,
        unique: true,
    })
    name: string
}
