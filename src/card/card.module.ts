import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { Card } from './entities/card.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Status } from 'src/status/entities/status.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Ticket, Card, Customer, Status]), JwtModule],
  controllers: [CardController],
  providers: [CardService],
  exports: [CardService]
})
export class CardModule {}
