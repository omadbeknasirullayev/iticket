import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: 'Booking name' })
  @ApiResponse({ status: 200, type: Booking })
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({ summary: 'Find all bookings' })
  @ApiResponse({ status: 200, type: [Booking] })
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({ summary: 'Find One booking' })
  @ApiResponse({ status: 200, type: Booking })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate booking' })
  @ApiResponse({ status: 200, type: Booking })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @ApiOperation({ summary: 'remove booking' })
  @ApiResponse({ status: 200, type: Booking })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
