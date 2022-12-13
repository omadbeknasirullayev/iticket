import { Column, DataType, Model, Table } from "sequelize-typescript"

interface CreateHumanCategoryAttr {
    name: string
    start_age: number
}
@Table({tableName: 'human_categories'})
export class HumanCategory extends Model<HumanCategory, CreateHumanCategoryAttr> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @Column({
        type: DataType.STRING
    })
    name: string

    @Column({
        type: DataType.SMALLINT
    })
    start_age: number

    @Column({
        type: DataType.SMALLINT
    })
    finish_age: number

    @Column({
        type: DataType.SMALLINT
    })
    gender: number
}
