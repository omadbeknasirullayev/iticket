import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'discount_cupons', timestamps: false})
export class DiscountCupon extends Model<DiscountCupon> {
  @ApiProperty({example: 1, description: "Unical ID"})
  @Column({
    type: DataType.BIGINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number
  
  @ApiProperty({example: "Winter", description: "Cupon name"})
      @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
      })
      cupon_name: string;
}
