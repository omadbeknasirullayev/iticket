import { Module } from '@nestjs/common';
import { DiscountCuponService } from './discount_cupon.service';
import { DiscountCuponController } from './discount_cupon.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DiscountCupon } from './entities/discount_cupon.entity';

@Module({
  imports: [SequelizeModule.forFeature([DiscountCupon])],
  controllers: [DiscountCuponController],
  providers: [DiscountCuponService],
  exports: [DiscountCuponService]
})
export class DiscountCuponModule {}
