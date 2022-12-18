import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SeatType } from './entities/seat_type.entity';

@ApiTags('Seat Type')
@Controller('seat-type')
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}


  @ApiOperation({ summary: 'SeatType name' })
  @ApiResponse({ status: 200, type: SeatType })
  @Post()
  create(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeService.create(createSeatTypeDto);
  }

  @ApiOperation({ summary: 'Find all seat types' })
  @ApiResponse({ status: 200, type: [SeatType] })
  @Get()
  findAll() {
    return this.seatTypeService.findAll();
  }

  @ApiOperation({ summary: 'Find One seat type' })
  @ApiResponse({ status: 200, type: SeatType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate seat type' })
  @ApiResponse({ status: 200, type: SeatType })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatTypeDto: UpdateSeatTypeDto) {
    return this.seatTypeService.update(+id, updateSeatTypeDto);
  }

  @ApiOperation({ summary: 'remove seat type' })
  @ApiResponse({ status: 200, type: SeatType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatTypeService.remove(+id);
  }
}
