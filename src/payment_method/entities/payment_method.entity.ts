import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'payment_types', timestamps: false})
export class PaymentMethod extends Model<PaymentMethod> {
  @ApiProperty({example: 1, description: "Unical ID"})
  @Column({
    type: DataType.SMALLINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number
  
  @ApiProperty({example: "Plastic", description: "Payment method name"})
      @Column({
        type: DataType.STRING,
        unique: true,
      })
      payment_name: string;
}
