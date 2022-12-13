import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "src/district/entities/district.entity";

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

    @HasMany(() => District)
    districts: District[]
}
