import { Module } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { EventTypeController } from './event_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventType } from './entities/event_type.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([EventType]), JwtModule],
  controllers: [EventTypeController],
  providers: [EventTypeService],
  exports: [EventTypeService]
})
export class EventTypeModule {}
