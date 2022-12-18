import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, Model, Table } from "sequelize-typescript"

interface CreateHumanCategoryAttr {
    name: string
    start_age: number
}
@Table({tableName: 'human_categories'})
export class HumanCategory extends Model<HumanCategory, CreateHumanCategoryAttr> {
    @ApiProperty({example: 1, description: "Unical ID"})
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @ApiProperty({example: "human", description: "Humam's name"})
    @Column({
        type: DataType.STRING
    })
    name: string

    @ApiProperty({example: "3", description: "Humam's minimum age "})
    @Column({
        type: DataType.SMALLINT
    })
    start_age: number

    @ApiProperty({example: "67", description: "Humam's maximum age"})
    @Column({
        type: DataType.SMALLINT
    })
    finish_age: number

    @ApiProperty({example: "2", description: "Humam's sex, connection with gender table"})
    @Column({
        type: DataType.SMALLINT
    })
    gender: number
}
