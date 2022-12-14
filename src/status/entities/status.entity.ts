import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'status', freezeTableName: true, timestamps: false})
export class Status extends Model<Status> {
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
      name: string;
}
