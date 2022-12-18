import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Card } from "src/card/entities/card.entity";
import { DeliveryMethod } from "src/delivery_method/entities/delivery_method.entity";
import { DiscountCupon } from "src/discount_cupon/entities/discount_cupon.entity";
import { PaymentMethod } from "src/payment_method/entities/payment_method.entity";

@Table({tableName: 'bookings'})
export class Booking extends Model<Booking> {
    @ApiProperty({example: 1, description: "Unical ID"})
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 2, description: "card id, connection with card table"})
    @ForeignKey(() => Card)
    @Column({
        type: DataType.BIGINT
    })
    card_id: number

    @ApiProperty({example: "12.12.2022", description: "created date"})
    @Column({
        type: DataType.DATE,
        defaultValue: Date.now()
    })
    created: Date

    @ApiProperty({example: "23.01.2023", description: "finished date"})
    @Column({
        type: DataType.DATE,
        defaultValue: Date.now() + 180000
    })
    finished: Date

    @ApiProperty({example: 2, description: "payment method id , connection with payment method table"})
    @ForeignKey(() => PaymentMethod)
    @Column({
        type: DataType.SMALLINT
    })
    payment_method_id: number

    @ApiProperty({example: 1, description: "delivery method id , connection with delivery method table"})
    @ForeignKey(() => DeliveryMethod)
    @Column({
        type: DataType.SMALLINT
    })
    delivery_method_id: number

    @ApiProperty({example: 3, description: "discount cupon id , connection with discount cupon table"})
    @ForeignKey(() => DiscountCupon)
    @Column({
        type: DataType.BIGINT
    })
    discount_cupon_id: number

    @BelongsTo(() => Card)
    card: Card

    @BelongsTo(() => PaymentMethod)
    payment: PaymentMethod

    @BelongsTo(() => DeliveryMethod)
    delivery: DeliveryMethod

    @BelongsTo(() => DiscountCupon)
    cupon: DiscountCupon

}
