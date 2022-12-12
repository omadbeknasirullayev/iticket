import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './entities/language.entity';

@Injectable()
export class LanguagesService {
  constructor (@InjectModel(Language) private languageRapository: typeof Language) {}

  async create(createLanguageDto: CreateLanguageDto) {
    const lang = await this.languageRapository.create(createLanguageDto)
    return {message: "Successfully added", info: lang}
  }

  async findAll() {
    const langs = await this.languageRapository.findAll()
    return langs
  }

  async findOne(id: number) {
    const lang = await this.languageRapository.findOne({where: {id}})
    if (!lang) {
      throw new NotFoundException("No such language exists")
    } 
    return lang
  }

  async update(id: number, updateLanguageDto: UpdateLanguageDto) {
    const lang = await this.languageRapository.findOne({where: {id}})
    if (!lang) {
      throw new NotFoundException("No such language exists")
    }
    await this.languageRapository.update(updateLanguageDto, {where: {id}})
    return {message: "Successfully updated"}
  }

  async remove(id: number) {
    const deleted = await this.languageRapository.destroy({where: {id}})
    return {message: "Successfully removed", info: deleted}
  }
}
