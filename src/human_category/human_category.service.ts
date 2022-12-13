import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { HumanCategory } from './entities/human_category.entity';

@Injectable()
export class HumanCategoryService {
  constructor(@InjectModel(HumanCategory) private humanCategoryRepository: typeof HumanCategory) {}

  async create(createHumanCategoryDto: CreateHumanCategoryDto) {
    const human_category = await this.humanCategoryRepository.create(createHumanCategoryDto)
    return {message: "Successfully added", info: human_category}
  }

  async findAll() {
    const human_categories = await this.humanCategoryRepository.findAll()
    return human_categories
  }

  async findOne(id: number) {
    const human_category = await this.humanCategoryRepository.findOne({where: {id}})
    if(!human_category) {
      throw new NotFoundException("No such human_category exists")
    }
    return human_category
  }

  async update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    const human_category = await this.humanCategoryRepository.findOne({where: {id}})
    if(!human_category) {
      throw new NotFoundException("No such human_category exists")
    }
    await this.humanCategoryRepository.update(updateHumanCategoryDto, {where: {id}})
    return {message: "Successfully updated"}
  }

  async remove(id: number) {
    const deleted = await this.humanCategoryRepository.destroy({where: {id}})
    return {message: "Successfully deleted"}
  }
}
