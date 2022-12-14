import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './entities/status.entity';

@Injectable()
export class StatusService {
  constructor (@InjectModel(Status) private statusRepository: typeof Status) {}

  async create(createStatusDto: CreateStatusDto) {
    const status = await this.statusRepository.create(createStatusDto)
    return {message: "Successfully added", info: status}
  }

  async findAll() {
    const statuss = await this.statusRepository.findAll()
    return statuss
  }

  async findOne(id: number) {
    const status = await this.statusRepository.findOne({where: {id}})
    if (!status) {
      throw new NotFoundException("No such status exists")
    } 
    return status
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    const status = await this.statusRepository.findOne({where: {id}})
    if (!status) {
      throw new NotFoundException("No such status exists")
    }
    await this.statusRepository.update(updateStatusDto, {where: {id}})
    return {message: "Successfully updated"}
  }

  async remove(id: number) {
    const deleted = await this.statusRepository.destroy({where: {id}})
    return {message: "Successfully removed", info: deleted}
  }
}
