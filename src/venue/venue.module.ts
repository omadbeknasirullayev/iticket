import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue } from './entities/venue.entity';
import { VenueType } from 'src/venue_type/entities/venue_type.entity';
import { Region } from 'src/region/entities/region.entity';
import { District } from 'src/district/entities/district.entity';

@Module({
  imports: [SequelizeModule.forFeature([Venue, VenueType, Region, District])],
  controllers: [VenueController],
  providers: [VenueService],
  exports: [VenueService]
})
export class VenueModule {}
