import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { VenuePhotoController } from './venue_photo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenuePhoto } from './entities/venue_photo.entity';
import { Venue } from 'src/venue/entities/venue.entity';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [SequelizeModule.forFeature([VenuePhoto, Venue]), FilesModule],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
  exports: [VenuePhotoService]
})
export class VenuePhotoModule {}
