import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'payment_types', timestamps: false})
export class PaymentMethod extends Model<PaymentMethod> {
    @Column({
        type: DataType.SMALLINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      })
      id: number
      
      @Column({
        type: DataType.STRING,
        unique: true,
      })
      payment_name: string;
}
