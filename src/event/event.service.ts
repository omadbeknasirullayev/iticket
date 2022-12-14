import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event) private eventRepository: typeof Event,
    private readonly fileService: FilesService,
  ) {}

  async create(createEventDto: CreateEventDto, photo: any) {
    const fileName = await this.fileService.createFile(photo);
    const newEvent = await this.eventRepository.create({
      ...createEventDto,
      photo: fileName,
    });
    return newEvent;
  }

  findAll() {
    return `This action returns all event`;
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
