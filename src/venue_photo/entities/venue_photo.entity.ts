import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "src/venue/entities/venue.entity";

@Table({tableName: "venue_photo"})
export class VenuePhoto extends Model<VenuePhoto> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      })
      id: number
      
      @ForeignKey(() => Venue)
      @Column({
        type: DataType.BIGINT,
        unique: true,
      })
      object_id: number;

      @Column({
        type: DataType.STRING
      })
      url: string
}
