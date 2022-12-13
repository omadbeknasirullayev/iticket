import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepository: typeof Seat) {}

  // create
  async create(createSeatDto: CreateSeatDto) {
    const seat = await this.seatRepository.create(createSeatDto)
    return {message: "Successfully added", info: seat}
  }

  // findAll
  async findAll() {
    const seats = await this.seatRepository.findAll({include: {all: true}})
    return seats
  }

  //FindOne
  async findOne(id: number) {
    const seat = await this.seatRepository.findOne({where: {id}, include: {all: true}})    
    if (!seat) {
      throw new NotFoundException('No such seat exists');
    }
    return seat;
  }

  // update
  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const seat = await this.seatRepository.findOne({where: {id}})    
    if (!seat) {
      throw new NotFoundException('No such seat exists');
    }
    const updated = await this.seatRepository.update(updateSeatDto, {where: {id}})
    return {message: "Successfully updated", count: updated}
  }

  // remove
  async remove(id: number) {
    const deleted = await this.seatRepository.destroy({where: {id}})
    return {message: "Successfully removed", count: deleted}
  }
}
