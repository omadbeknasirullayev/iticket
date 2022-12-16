import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { VenuePhoto } from './entities/venue_photo.entity';

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private venuePhotoRepository: typeof VenuePhoto,
    readonly fileService: FilesService,
  ) {}

  async create(createVenuePhotoDto: CreateVenuePhotoDto, photo: any) {
    const fileName = await this.fileService.createFile(photo);
    const newEvent = await this.venuePhotoRepository.create({
      ...createVenuePhotoDto,
      url: fileName,
    });
    return { message: 'Successfully added', info: newEvent };
  }

  async findAll() {
    const venuePhoto = await this.venuePhotoRepository.findAll({
      include: { all: true },
    });
    return venuePhoto;
  }

  async findOne(id: number) {
    const venuePhoto = await this.venuePhotoRepository.findOne({
      where: { id }
    });
    if (!venuePhoto) {
      throw new NotFoundException('No such venue photo exists');
    }
    return venuePhoto;
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto, photo: any) {
    const venuePhoto = await this.venuePhotoRepository.findOne({ where: { id } });
    if (!venuePhoto) {
      throw new NotFoundException('No such venuePhoto exists');
    }
    console.log(photo);
    if (photo) {
      await this.fileService.removeFile(venuePhoto.url);
      const fileName = await this.fileService.createFile(photo);
      const newEvent = await this.venuePhotoRepository.update(
        {
          ...updateVenuePhotoDto,
          url: fileName,
        },
        { where: { id }, returning: true },
      );
      return { message: 'Successfully updated', info: newEvent };
    }
    const newEvent = await this.venuePhotoRepository.update(updateVenuePhotoDto, {
      where: { id },
      returning: true,
    });

    return { message: 'Successfully updated', info: newEvent };
  }


  async remove(id: number) {
    const event = await this.venuePhotoRepository.findOne({ where: { id } });
    if (!event) {
      throw new NotFoundException('No such event exists');
    }
    if (event.url) await this.fileService.removeFile(event.url);
    const deleted = await this.venuePhotoRepository.destroy({ where: { id } });

    return { message: 'Successfully removed', count: deleted };
  }
}
