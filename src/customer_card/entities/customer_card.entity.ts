import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Customer } from "src/customers/entities/customer.entity"

@Table({tableName: 'customer_cards'})
export class CustomerCard extends Model<CustomerCard> {
    @ApiProperty({example: 1, description: "Unucal ID"})
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 2, description: "customer id, connection with customer table"})
    @ForeignKey(() => Customer)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    customer_id: number

    @ApiProperty({example: "Jhon", description: "Card name"})
    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    name: string

    @ApiProperty({example: "+998999002559", description: "Phone Number"})
    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    phone: string
    
    @ApiProperty({example: "8600041526698745", description: "Card's number"})
    @Column({
        type: DataType.STRING,
        allowNull:false,
        // unique: true
    })
    number: string

    @ApiProperty({example: "2022", description: "Card's year"})
    @Column({
        type: DataType.CHAR(6),
        
    })
    year: string

    @ApiProperty({example: "10", description: "Card's month"})
    @Column({
        type: DataType.CHAR(2),
    })
    month: string

    @ApiProperty({example: "true", description: "Card active or inactive"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean

    @ApiProperty({example: "true", description: "Card main or not main"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_main: boolean
}
