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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
