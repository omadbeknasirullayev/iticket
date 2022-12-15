import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingService {
  constructor (@InjectModel(Booking) private bookingRepository: typeof Booking) {}

  // create
  async create(createBookingDto: CreateBookingDto) {
    const booking = await this.bookingRepository.create(createBookingDto)
    return {message: "Successfully added", info: booking}
  }
  
  // findAll
  async findAll() {
    const bookings = await this.bookingRepository.findAll({include: {all: true}})
    return bookings
  }
  
  //findOne
  async findOne(id: number) {
    const booking = await this.bookingRepository.findOne({where: {id}, include: {all: true}})    
    if (!booking) {
      throw new NotFoundException('No such booking exists');
    }
    return booking;
  }
  
  //update
  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const booking = await this.bookingRepository.findOne({where: {id}})    
    if (!booking) {
      throw new NotFoundException('No such booking exists');
    }
    const updated = await this.bookingRepository.update(updateBookingDto, {where: {id}})
    return {message: "Successfully updated", count: updated}
  }

  // remove
  async remove(id: number) {
    const deleted = await this.bookingRepository.destroy({where: {id}})
    return {message: "Successfully removed", count: deleted}
  }
}
