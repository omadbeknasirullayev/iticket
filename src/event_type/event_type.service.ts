import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { EventType } from './entities/event_type.entity';

@Injectable()
export class EventTypeService {
  constructor(@InjectModel(EventType) private eventTypeRepository: typeof EventType) {}

  // create
  async create(createEventTypeDto: CreateEventTypeDto) {
    const event_type = await this.eventTypeRepository.create(createEventTypeDto)
    return {message: "Successullfy", info: event_type}
  }

  //findAll
  async findAll() {
    const event_type = await this.eventTypeRepository.findAll()
    return event_type
  }

  // findone
  async findOne(id: number) {
    const event_type = await this.eventTypeRepository.findOne({where: {id}})

    if(!event_type) {
      throw new NotFoundException("No such event_type exists")
    }
    return event_type
  
  }

  // update
  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    const event_type = await this.eventTypeRepository.findOne({where: {id}})

    if(!event_type) {
      throw new NotFoundException("No such event_type exists")
    }
    await this.eventTypeRepository.update(updateEventTypeDto, {where: {id}})
    return {message: "Succeccfully updated"}
  }

  //remove
  async remove(id: number) {
    const deleted = await this.eventTypeRepository.destroy({where: {id}})
    return {message: "Successfully removed"}
  }
}
