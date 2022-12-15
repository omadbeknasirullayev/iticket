import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'delivery_methods', timestamps: false})
export class DeliveryMethod extends Model<DeliveryMethod> {
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
        allowNull: false
      })
      delivery_name: string;
}
