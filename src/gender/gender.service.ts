import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderService {
  constructor(@InjectModel(Gender) private genderRepository: typeof Gender) {}

  async create(createGenderDto: CreateGenderDto) {
    const gender = await this.genderRepository.create(createGenderDto)
    return {message: "Successfully added", info: gender}
  }

  async findAll() {
    const genders = await this.genderRepository.findAll()
    return genders
  }

  async findOne(id: number) {
    const gender = await this.genderRepository.findOne({where: {id}})
    if(!gender) {
      throw new NotFoundException("No such gender exists")
    }
    return gender
  }

  async update(id: number, updateGenderDto: UpdateGenderDto) {
    const gender = await this.genderRepository.findOne({where: {id}})
    
    if(!gender) {
      throw new NotFoundException("No such gender exists")
    }
    const updated = await this.genderRepository.update(updateGenderDto, {where: {id}, returning: true})
    return updated
  }

  async remove(id: number) {
    const deleted = await this.genderRepository.destroy({where: {id}})
    return {message: "Successfully removed"}
  }
}
