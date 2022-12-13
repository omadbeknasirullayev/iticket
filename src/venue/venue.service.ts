import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './entities/venue.entity';

@Injectable()
export class VenueService {
  constructor (@InjectModel(Venue) private venueRepository: typeof Venue) {}

  // create
  async create(createVenueDto: CreateVenueDto) {
    const venue = await this.venueRepository.create(createVenueDto)
    return {message: "Successfully added", info: venue}
  }
  
  // findAll
  async findAll() {
    const venues = await this.venueRepository.findAll({include: {all: true}})
    return venues
  }
  
  //findOne
  async findOne(id: number) {
    const venue = await this.venueRepository.findOne({where: {id}, include: {all: true}})    
    if (!venue) {
      throw new NotFoundException('No such venue exists');
    }
    return venue;
  }
  
  //update
  async update(id: number, updateVenueDto: UpdateVenueDto) {
    const venue = await this.venueRepository.findOne({where: {id}})    
    if (!venue) {
      throw new NotFoundException('No such venue exists');
    }
    const updated = await this.venueRepository.update(updateVenueDto, {where: {id}})
    return {message: "Successfully updated", count: updated}
  }

  // remove
  async remove(id: number) {
    const deleted = await this.venueRepository.destroy({where: {id}})
    return {message: "Successfully removed", count: deleted}
  }
}
