
import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Card } from "src/card/entities/card.entity";
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
    @ApiProperty({example: 1, description: 'Unical ID'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number
    
    @ApiProperty({example: "Jhon", description: "Customer's first name"})
    @Column({
        type: DataType.STRING,
    })
    first_name: string

    @ApiProperty({example: "Doe", description: "Customer's lats name"})
    @Column({
        type: DataType.STRING,
    })
    last_name: string

    @ApiProperty({example: "+998999002559", description: "Customer's phone number"})
    @Column({
        type: DataType.STRING,
        unique: true
    })
    phone: string

    @ApiProperty({example: "myPassword", description: "Customer's hashed password"})
    @Column({
        type: DataType.STRING
    })
    hashed_password: string

    @ApiProperty({example: "doe@gmail.com", description: "Customer's email"})
    @Column({
        type: DataType.STRING,
        unique: true
    })
    email: string

    @ApiProperty({example: "1", description: "Customer's sex, connected gender table"})
    @ForeignKey(() => Gender)
    @Column({
        type: DataType.SMALLINT
    })
    gender: number

    @ApiProperty({example: "2", description: "Customer's language connected language table"})
    @ForeignKey(() => Language)
    @Column({
        type: DataType.SMALLINT
    })
    lang_id: number

    @ApiProperty({example: "Token", description: "Customer's hashed token"})
    @Column({
        type: DataType.STRING
    })
    hashed_refresh_token: string

    @BelongsTo(() => Language)
    language: Language

    @BelongsTo(() => Gender)
    gender_type: Gender

    @HasMany(() => Card)
    card: Card
}
