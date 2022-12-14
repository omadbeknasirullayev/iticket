import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { TicketType } from './entities/ticket_type.entity';

@Injectable()
export class TicketTypeService {
  constructor (@InjectModel(TicketType) private ticket_typeRepository: typeof TicketType) {}

  async create(createTicketTypeDto: CreateTicketTypeDto) {
    const ticket_type = await this.ticket_typeRepository.create(createTicketTypeDto)
    return {message: "Successfully added", info: ticket_type}
  }

  async findAll() {
    const ticket_types = await this.ticket_typeRepository.findAll()
    return ticket_types
  }

  async findOne(id: number) {
    const ticket_type = await this.ticket_typeRepository.findOne({where: {id}})
    if (!ticket_type) {
      throw new NotFoundException("No such ticket_type exists")
    } 
    return ticket_type
  }

  async update(id: number, updateTicketTypeDto: UpdateTicketTypeDto) {
    const ticket_type = await this.ticket_typeRepository.findOne({where: {id}})
    if (!ticket_type) {
      throw new NotFoundException("No such ticket_type exists")
    }
    await this.ticket_typeRepository.update(updateTicketTypeDto, {where: {id}})
    return {message: "Successfully updated"}
  }

  async remove(id: number) {
    const deleted = await this.ticket_typeRepository.destroy({where: {id}})
    return {message: "Successfully removed", info: deleted}
  }
}
