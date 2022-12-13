import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'venue_types', timestamps: false})
export class VenueType extends Model<VenueType> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string
}
