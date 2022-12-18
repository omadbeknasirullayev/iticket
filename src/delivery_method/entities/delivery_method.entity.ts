import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'delivery_methods', timestamps: false})
export class DeliveryMethod extends Model<DeliveryMethod> {
  @ApiProperty({example: 1, description: "Unical ID"})
  @Column({
    type: DataType.SMALLINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number
  
  @ApiProperty({example: "Express 24", description: "Delivery name"})
      @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
      })
      delivery_name: string;
}
