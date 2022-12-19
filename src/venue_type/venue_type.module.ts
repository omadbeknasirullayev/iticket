import { Module } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { VenueTypeController } from './venue_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenueType } from './entities/venue_type.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([VenueType]), JwtModule],
  controllers: [VenueTypeController],
  providers: [VenueTypeService],
  exports: [VenueTypeService]
})
export class VenueTypeModule {}
