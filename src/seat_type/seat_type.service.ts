import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { SeatType } from './entities/seat_type.entity';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seat_typeRepository: typeof SeatType) {}

  // create
  async create(createSeatTypeDto: CreateSeatTypeDto) {
    const seat_type = await this.seat_typeRepository.create(createSeatTypeDto)
    return {message: "Successfully added", info: seat_type}
  }

  // findAll
  async findAll() {
    const seat_types = await this.seat_typeRepository.findAll({include: {all: true}})
    return seat_types
  }

  //FindOne
  async findOne(id: number) {
    const seat_type = await this.seat_typeRepository.findOne({where: {id}, include: {all: true}})    
    if (!seat_type) {
      throw new NotFoundException('No such seat_type exists');
    }
    return seat_type;
  }

  // update
  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    const seat_type = await this.seat_typeRepository.findOne({where: {id}})    
    if (!seat_type) {
      throw new NotFoundException('No such seat_type exists');
    }
    const updated = await this.seat_typeRepository.update(updateSeatTypeDto, {where: {id}})
    return {message: "Successfully updated", count: updated}
  }

  // remove
  async remove(id: number) {
    const deleted = await this.seat_typeRepository.destroy({where: {id}})
    return {message: "Successfully removed", count: deleted}
  }
}
