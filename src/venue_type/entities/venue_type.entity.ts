import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'venue_types', timestamps: false})
export class VenueType extends Model<VenueType> {
    @ApiProperty({example: 1, description: "Unical ID"})
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number
    
    @ApiProperty({example: "Stadion", description: "Venue Type name"})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string
}
