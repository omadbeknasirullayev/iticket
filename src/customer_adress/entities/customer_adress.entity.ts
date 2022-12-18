import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Country } from "src/country/entities/country.entity";
import { Customer } from "src/customers/entities/customer.entity";
import { District } from "src/district/entities/district.entity";
import { Region } from "src/region/entities/region.entity";

@Table({tableName: 'customer_adresses'})
export class CustomerAdress extends Model<CustomerAdress> {
    @ApiProperty({example: 1, description: "Unical ID"})
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
    })
    customer_id: number

    @ApiProperty({example: "Jhon", description: "Customer name"})
    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    name: string

    @ApiProperty({example: 2, description: "country id, connection with country table"})
    @ForeignKey(() => Country)
    @Column({
        type: DataType.SMALLINT,
    })
    country_id: number

    @ApiProperty({example: 2, description: "region id, connection with region table"})    
    @ForeignKey(() => Region)
    @Column({
        type: DataType.SMALLINT,
    })
    region_id: number

    @ApiProperty({example: 4, description: "district id, connection with district table"})
    @ForeignKey(() => District)
    @Column({
        type: DataType.SMALLINT,
    })
    district_id: number

    @ApiProperty({example: "Qatortol", description: "Customer's street"})
    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    street: string

    @ApiProperty({example: "18 Dom", description: "Customer's house"})
    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    house: string

    @ApiProperty({example: "12 kv", description: "Customer's flat"})
    @Column({
        type: DataType.SMALLINT,
    })
    flat: string

    @ApiProperty({example: "location", description: "Customer's location"})
    @Column({
        type: DataType.STRING(300),
    })
    location: string

    @ApiProperty({example: "170700", description: "Customer's post index"})
    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    post_index: string

    @ApiProperty({example: "important", description: "Customer's info"})
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
