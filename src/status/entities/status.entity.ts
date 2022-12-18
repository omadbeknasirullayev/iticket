import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'status', freezeTableName: true, timestamps: false})
export class Status extends Model<Status> {
  @ApiProperty({example: 1, description: "Unical ID"})
  @Column({
    type: DataType.SMALLINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number
  
  @ApiProperty({example: "Active", description: "Status name"})
      @Column({
        type: DataType.STRING,
        unique: true,
      })
      name: string;
}
