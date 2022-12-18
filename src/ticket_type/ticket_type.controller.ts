import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TicketType } from './entities/ticket_type.entity';

@ApiTags('Ticket Type')
@Controller('ticket-type')
export class TicketTypeController {
  constructor(private readonly ticketTypeService: TicketTypeService) {}


  @ApiOperation({ summary: 'TicketType name' })
  @ApiResponse({ status: 200, type: TicketType })
  @Post()
  create(@Body() createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketTypeService.create(createTicketTypeDto);
  }

  @ApiOperation({ summary: 'Find all ticket types' })
  @ApiResponse({ status: 200, type: [TicketType] })
  @Get()
  findAll() {
    return this.ticketTypeService.findAll();
  }

  @ApiOperation({ summary: 'Find One ticket type' })
  @ApiResponse({ status: 200, type: TicketType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate ticket type' })
  @ApiResponse({ status: 200, type: TicketType })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketTypeDto: UpdateTicketTypeDto) {
    return this.ticketTypeService.update(+id, updateTicketTypeDto);
  }

  @ApiOperation({ summary: 'remove ticket type' })
  @ApiResponse({ status: 200, type: TicketType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketTypeService.remove(+id);
  }
}
