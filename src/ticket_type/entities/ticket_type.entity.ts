import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'ticket_types', timestamps: false })
export class TicketType extends Model<TicketType> {
  @ApiProperty({ example: 1, description: 'Unical ID' })
  @Column({
    type: DataType.SMALLINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Gold', description: 'Ticket Type name' })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  name: string;
}
