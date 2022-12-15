import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './entities/booking.entity';
import { PaymentMethod } from 'src/payment_method/entities/payment_method.entity';
import { DeliveryMethod } from 'src/delivery_method/entities/delivery_method.entity';
import { DiscountCupon } from 'src/discount_cupon/entities/discount_cupon.entity';

@Module({
  imports: [SequelizeModule.forFeature([Booking, PaymentMethod, DeliveryMethod, DiscountCupon])],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService]
})
export class BookingModule {}
