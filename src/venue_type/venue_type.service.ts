import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { VenueType } from './entities/venue_type.entity';

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType) private venue_typeRepository: typeof VenueType) {}

  // create
  async create(createVenueTypeDto: CreateVenueTypeDto) {
    const venue_type = await this.venue_typeRepository.create(createVenueTypeDto)
    return {message: "Successfully added", info: venue_type}
  }

  // findAll
  async findAll() {
    const venue_types = await this.venue_typeRepository.findAll({include: {all: true}})
    return venue_types
  }

  //FindOne
  async findOne(id: number) {
    const venue_type = await this.venue_typeRepository.findOne({where: {id}, include: {all: true}})    
    if (!venue_type) {
      throw new NotFoundException('No such venue_type exists');
    }
    return venue_type;
  }

  // update
  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const venue_type = await this.venue_typeRepository.findOne({where: {id}})    
    if (!venue_type) {
      throw new NotFoundException('No such venue_type exists');
    }
    const updated = await this.venue_typeRepository.update(updateVenueTypeDto, {where: {id}})
    return {message: "Successfully updated", count: updated}
  }

  // remove
  async remove(id: number) {
    const deleted = await this.venue_typeRepository.destroy({where: {id}})
    return {message: "Successfully removed", count: deleted}
  }
}
