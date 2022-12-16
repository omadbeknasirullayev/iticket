import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Card } from "src/card/entities/card.entity";
import { DeliveryMethod } from "src/delivery_method/entities/delivery_method.entity";
import { DiscountCupon } from "src/discount_cupon/entities/discount_cupon.entity";
import { PaymentMethod } from "src/payment_method/entities/payment_method.entity";

@Table({tableName: 'bookings'})
export class Booking extends Model<Booking> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Card)
    @Column({
        type: DataType.BIGINT
    })
    card_id: number

    @Column({
        type: DataType.DATE,
        defaultValue: Date.now()
    })
    created: Date

    @Column({
        type: DataType.DATE,
        defaultValue: Date.now() + 180000
    })
    finished: Date

    @ForeignKey(() => PaymentMethod)
    @Column({
        type: DataType.SMALLINT
    })
    payment_method_id: number

    @ForeignKey(() => DeliveryMethod)
    @Column({
        type: DataType.SMALLINT
    })
    delivery_method_id: number

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
