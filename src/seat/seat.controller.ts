import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Seat } from './entities/seat.entity';
import { JwtAdminGuard } from 'src/guards/admin.guard';
import { JwtAdminCustomerGuard } from 'src/guards/jwtAdminystomerGuard.guard';

@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation({ summary: 'Seat name' })
  @ApiResponse({ status: 200, type: Seat })
  @UseGuards(JwtAdminGuard)
  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @ApiOperation({ summary: 'Find all seats' })
  @ApiResponse({ status: 200, type: [Seat] })
  @Get()
  findAll() {
    return this.seatService.findAll();
  }

  @ApiOperation({ summary: 'Find One seat' })
  @ApiResponse({ status: 200, type: Seat })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate seat' })
  @ApiResponse({ status: 200, type: Seat })
  @UseGuards(JwtAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }

  @ApiOperation({ summary: 'remove seat' })
  @ApiResponse({ status: 200, type: Seat })
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatService.remove(+id);
  }
}
