import { Injectable } from '@nestjs/common';
import { CreateCustomerAdressDto } from './dto/create-customer_adress.dto';
import { UpdateCustomerAdressDto } from './dto/update-customer_adress.dto';

@Injectable()
export class CustomerAdressService {
  create(createCustomerAdressDto: CreateCustomerAdressDto) {
    return 'This action adds a new customerAdress';
  }

  findAll() {
    return `This action returns all customerAdress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerAdress`;
  }

  update(id: number, updateCustomerAdressDto: UpdateCustomerAdressDto) {
    return `This action updates a #${id} customerAdress`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerAdress`;
  }
}
