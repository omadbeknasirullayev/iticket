import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.entity';
import { Language } from './languages/entities/language.entity';
import { LanguagesModule } from './languages/languages.module';
import { GenderModule } from './gender/gender.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { Gender } from './gender/entities/gender.entity';
import { HumanCategory } from './human_category/entities/human_category.entity';
import { EventTypeModule } from './event_type/event_type.module';
import { EventType } from './event_type/entities/event_type.entity';
import { VenueModule } from './venue/venue.module';
import { RegionModule } from './region/region.module';
import { Region } from './region/entities/region.entity';
import { DistrictModule } from './district/district.module';
import { District } from './district/entities/district.entity';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { VenueType } from './venue_type/entities/venue_type.entity';
import { Venue } from './venue/entities/venue.entity';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { SeatType } from './seat_type/entities/seat_type.entity';
import { SeatModule } from './seat/seat.module';
import { Seat } from './seat/entities/seat.entity';
import { EventModule } from './event/event.module';
import { FilesModule } from './files/files.module';
import { Event } from './event/entities/event.entity';
import { TicketModule } from './ticket/ticket.module';
import { StatusModule } from './status/status.module';
import { Status } from './status/entities/status.entity';
import { TicketTypeModule } from './ticket_type/ticket_type.module';
import { TicketType } from './ticket_type/entities/ticket_type.entity';
import { Ticket } from './ticket/entities/ticket.entity';
import { CardModule } from './card/card.module';
import { Card } from './card/entities/card.entity';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { PaymentMethod } from './payment_method/entities/payment_method.entity';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { DeliveryMethod } from './delivery_method/entities/delivery_method.entity';
import { DiscountCuponModule } from './discount_cupon/discount_cupon.module';
import { DiscountCupon } from './discount_cupon/entities/discount_cupon.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Customer,
        Language,
        Gender,
        HumanCategory,
        EventType,
        Region,
        District,
        VenueType,
        Venue,
        SeatType,
        Seat,
        Event,
        Status,
        TicketType,
        Ticket,
        Card,
        PaymentMethod,
        DeliveryMethod,
        DiscountCupon,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    CustomersModule,
    LanguagesModule,
    HumanCategoryModule,
    GenderModule,
    EventTypeModule,
    VenueModule,
    RegionModule,
    DistrictModule,
    VenueTypeModule,
    SeatTypeModule,
    SeatModule,
    EventModule,
    FilesModule,
    TicketModule,
    StatusModule,
    TicketTypeModule,
    CardModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    DiscountCuponModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
