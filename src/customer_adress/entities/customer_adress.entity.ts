import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Country } from "src/country/entities/country.entity";
import { Customer } from "src/customers/entities/customer.entity";
import { District } from "src/district/entities/district.entity";
import { Region } from "src/region/entities/region.entity";

@Table({tableName: 'customer_adresses'})
export class CustomerAdress extends Model<CustomerAdress> {
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
    })
    customer_id: number

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    name: string

    @ForeignKey(() => Country)
    @Column({
        type: DataType.SMALLINT,
    })
    country_id: number

    @ForeignKey(() => Region)
    @Column({
        type: DataType.SMALLINT,
    })
    region_id: number

    @ForeignKey(() => District)
    @Column({
        type: DataType.SMALLINT,
    })
    district_id: number

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    street: string

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    house: string

    @Column({
        type: DataType.SMALLINT,
    })
    flat: string

    @Column({
        type: DataType.STRING(300),
    })
    location: string

    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    post_index: string

    @Column({
        type: DataType.STRING(),
    })
    info: string
    
    @BelongsTo(() => Customer)
    customer: Customer

    @BelongsTo(() => Region)
    region: Region

    @BelongsTo(() => District)
    district: District

    @BelongsTo(() => Country)
    country: Country
}
