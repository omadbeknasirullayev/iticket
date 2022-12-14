import { Module } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { TicketTypeController } from './ticket_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TicketType } from './entities/ticket_type.entity';

@Module({
  imports: [SequelizeModule.forFeature([TicketType])],
  controllers: [TicketTypeController],
  providers: [TicketTypeService],
  exports: [TicketTypeService]
})
export class TicketTypeModule {}
