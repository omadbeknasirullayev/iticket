import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ticket } from './entities/ticket.entity';
import { Status } from 'src/status/entities/status.entity';
import { TicketType } from 'src/ticket_type/entities/ticket_type.entity';
import { Event } from 'src/event/entities/event.entity';
import { Seat } from 'src/seat/entities/seat.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Ticket, Status, TicketType, Event, Seat]), JwtModule],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService]
})
export class TicketModule {}
