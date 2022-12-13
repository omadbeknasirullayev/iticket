import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Region } from "src/region/entities/region.entity";

interface CreateDistrictAttr {
    name: string
}

@Table({tableName: 'districts', timestamps: false})
export class District extends Model<District, CreateDistrictAttr>{
    
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
    name: string
 
    @ForeignKey(() => Region)
    @Column({
        type: DataType.SMALLINT
    })
    region_id: number

}
