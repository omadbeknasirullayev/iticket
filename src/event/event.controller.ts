import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Event } from './entities/event.entity';
import { JwtAdminGuard } from 'src/guards/admin.guard';
import { JwtAdminCustomerGuard } from 'src/guards/jwtAdminystomerGuard.guard';

@ApiTags('Event')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({ summary: 'Event name' })
  @ApiResponse({ status: 200, type: Event })
  @UseGuards(JwtAdminGuard)
  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  create(@Body() createEventDto: CreateEventDto, @UploadedFile() photo) {
    return this.eventService.create(createEventDto, photo);
  }

  @ApiOperation({ summary: 'Find all events' })
  @ApiResponse({ status: 200, type: [Event] })
  @UseGuards(JwtAdminCustomerGuard)
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: 'Find One event' })
  @ApiResponse({ status: 200, type: Event })
  @UseGuards(JwtAdminCustomerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate event' })
  @ApiResponse({ status: 200, type: Event })
  @UseGuards(JwtAdminGuard)
  @Patch(':id')
  @UseInterceptors(FileInterceptor('photo'))
  update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
    @UploadedFile() photo,
  ) {
    return this.eventService.update(+id, updateEventDto, photo);
  }

  @ApiOperation({ summary: 'remove event' })
  @ApiResponse({ status: 200, type: Event })
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
