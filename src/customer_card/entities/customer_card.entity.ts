import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Customer } from "src/customers/entities/customer.entity"

@Table({tableName: 'customer_cards'})
export class CustomerCard extends Model<CustomerCard> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    customer_id: number

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    name: string

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    phone: string
    
    @Column({
        type: DataType.STRING,
        allowNull:false,
        // unique: true
    })
    number: string

    @Column({
        type: DataType.CHAR(6),
        
    })
    year: string

    @Column({
        type: DataType.CHAR(2),
    })
    month: string

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_main: boolean
}
