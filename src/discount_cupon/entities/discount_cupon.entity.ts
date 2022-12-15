import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'discount_cupons', timestamps: false})
export class DiscountCupon extends Model<DiscountCupon> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      })
      id: number
      
      @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
      })
      cupon_name: string;
}
