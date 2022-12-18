import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CreateLanguageAttr {
  lang_name: string;
}

@Table({ tableName: 'languages' })
export class Language extends Model<Language, CreateLanguageAttr> {

  @ApiProperty({example: 1, description: "Unical ID"})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number
  
  @ApiProperty({example: "English", description: "Language name"})
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  lang_name: string;
}
