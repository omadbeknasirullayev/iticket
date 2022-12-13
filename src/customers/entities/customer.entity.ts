
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Gender } from "src/gender/entities/gender.entity";
import { Language } from "src/languages/entities/language.entity";

interface CreateCustomerAttr {
    first_name: string
    last_name: string
    phone: string
    email: string
}

@Table({tableName: "customers"})

export class Customer extends Model<Customer, CreateCustomerAttr> {
    
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })

    @Column({
        type: DataType.STRING,
    })
    first_name: string

    @Column({
        type: DataType.STRING,
    })
    last_name: string

    @Column({
        type: DataType.STRING,
        unique: true
    })
    phone: string

    @Column({
        type: DataType.STRING
    })
    hashed_password: string

    @Column({
        type: DataType.STRING,
        unique: true
    })
    email: string

    @ForeignKey(() => Gender)
    @Column({
        type: DataType.SMALLINT
    })
    gender: number

    @ForeignKey(() => Language)
    @Column({
        type: DataType.SMALLINT
    })
    lang_id: number

    @Column({
        type: DataType.STRING
    })
    hashed_refresh_token: string

    @BelongsTo(() => Language)
    language: Language

    @BelongsTo(() => Gender)
    gender_type: Gender
}
