import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {
  constructor (@InjectModel(Ticket) private ticketRepository: typeof Ticket) {}

  // create
  async create(createTicketDto: CreateTicketDto) {
    const ticket = await this.ticketRepository.create(createTicketDto)
    return {message: "Successfully added", info: ticket}
  }
  
  // findAll
  async findAll() {
    const tickets = await this.ticketRepository.findAll({include: {all: true}})
    return tickets
  }
  
  //findOne
  async findOne(id: number) {
    const ticket = await this.ticketRepository.findOne({where: {id}, include: {all: true}})    
    if (!ticket) {
      throw new NotFoundException('No such ticket exists');
    }
    return ticket;
  }
  
  //update
  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticketRepository.findOne({where: {id}})    
    if (!ticket) {
      throw new NotFoundException('No such ticket exists');
    }
    const updated = await this.ticketRepository.update(updateTicketDto, {where: {id}})
    return {message: "Successfully updated", count: updated}
  }

  // remove
  async remove(id: number) {
    const deleted = await this.ticketRepository.destroy({where: {id}})
    return {message: "Successfully removed", count: deleted}
  }
}
