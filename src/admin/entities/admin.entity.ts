import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'admins'})
export class Admin extends Model<Admin> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING
    })
    name: string

    @Column({
        type: DataType.STRING(30),
        unique: true,
        allowNull: false
    })
    login: string

    @Column({
        type: DataType.STRING
    })
    hashed_password: string

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    is_active: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    is_creator: boolean

    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string
}
