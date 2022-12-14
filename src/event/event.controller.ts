import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  create(@Body() createEventDto: CreateEventDto, @UploadedFile() photo) {
    return this.eventService.create(createEventDto, photo);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('photo'))
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto, @UploadedFile() photo) {
    return this.eventService.update(+id, updateEventDto, photo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
