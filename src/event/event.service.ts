import { Injectable, NotFoundException } from '@nestjs/common';
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
    return { message: 'Successfully added', info: newEvent };
  }

  async findAll() {
    const event = await this.eventRepository.findAll({
      include: { all: true },
    });
    return event;
  }

  async findOne(id: number) {
    const event = await this.eventRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!event) {
      throw new NotFoundException('No such event exists');
    }
    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto, photo: any) {
    const event = await this.eventRepository.findOne({ where: { id } });
    if (!event) {
      throw new NotFoundException('No such event exists');
    }
    console.log(photo);
    if (photo) {
      await this.fileService.removeFile(event.photo);
      const fileName = await this.fileService.createFile(photo);
      const newEvent = await this.eventRepository.update(
        {
          ...updateEventDto,
          photo: fileName,
        },
        { where: { id }, returning: true },
      );
      return { message: 'Successfully updated', info: newEvent };
    }
    const newEvent = await this.eventRepository.update(updateEventDto, {
      where: { id },
      returning: true,
    });

    return { message: 'Successfully updated', info: newEvent };
  }

  async remove(id: number) {
    const event = await this.eventRepository.findOne({ where: { id } });
    if (!event) {
      throw new NotFoundException('No such event exists');
    }
    if (event.photo) await this.fileService.removeFile(event.photo);
    const deleted = await this.eventRepository.destroy({ where: { id } });

    return { message: 'Successfully removed', count: deleted };
  }
}
