import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CreateLanguageAttr {
  lang_name: string;
}

@Table({ tableName: 'languages' })
export class Language extends Model<Language, CreateLanguageAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number
  
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  lang_name: string;
}
