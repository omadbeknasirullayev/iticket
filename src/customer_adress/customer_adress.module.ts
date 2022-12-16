import { Module } from '@nestjs/common';
import { CustomerAdressService } from './customer_adress.service';
import { CustomerAdressController } from './customer_adress.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerAdress } from './entities/customer_adress.entity';
import { Country } from 'src/country/entities/country.entity';

@Module({
  imports: [SequelizeModule.forFeature([CustomerAdress, Country])],
  controllers: [CustomerAdressController],
  providers: [CustomerAdressService]
})
export class CustomerAdressModule {}
