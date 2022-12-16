import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrytjs from 'bcryptjs';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

// oxiriga yetmadi
@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer) private customerRapository: typeof Customer,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    
    const customer = await this.customerRapository.create(createCustomerDto);
    return { message: 'Successfully added, info: customer' };
  }

  async findAll() {
    const customers = await this.customerRapository.findAll({
      include: { all: true },
    });
    return customers;
  }

  async findOne(id: number) {
    const customer = await this.customerRapository.findOne({
      where: { id },
      include: { all: true },
    });
    
    if (!customer) {
      throw new NotFoundException('No such customer exists');
    }

    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRapository.findOne({ where: { id } });

    if (!customer) {
      throw new NotFoundException('No such customer exists');
    }

    await this.customerRapository.update(updateCustomerDto, { where: { id } });

    return { message: 'Successfully updated' };
  }

  async remove(id: number) {
    const deleted = await this.customerRapository.destroy({ where: { id } });

    return { message: 'Successfully removed' };
  }
}
