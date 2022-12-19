import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "src/venue/entities/venue.entity";

@Table({tableName: "venue_photo"})
export class VenuePhoto extends Model<VenuePhoto> {
  @ApiProperty({example: 1, description: "Unical ID"})
  @Column({
    type: DataType.BIGINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number
  
  @ApiProperty({example: 2, description: "connection with venue table"})
      @ForeignKey(() => Venue)
      @Column({
        type: DataType.BIGINT,
        unique: true,
      })
      object_id: number;

  @ApiProperty({example: "phono name", description: "connection with venue table"})
      @Column({
        type: DataType.STRING
      })
      url: string
}
