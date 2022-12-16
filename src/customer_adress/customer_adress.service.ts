import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerAdressDto } from './dto/create-customer_adress.dto';
import { UpdateCustomerAdressDto } from './dto/update-customer_adress.dto';
import { CustomerAdress } from './entities/customer_adress.entity';

@Injectable()
export class CustomerAdressService {
  constructor(@InjectModel(CustomerAdress) private customerAdressRepository: typeof CustomerAdress) {}

  // create
  async create(createCustomerAdressDto: CreateCustomerAdressDto) {
    const customerAdress = await this.customerAdressRepository.create(createCustomerAdressDto)
    return {message: "Successfully added", info: customerAdress}
  }

  // findAll
  async findAll() {
    const customerAdresss = await this.customerAdressRepository.findAll({include: {all: true}})
    return customerAdresss
  }

  //FindOne
  async findOne(id: number) {
    const customerAdress = await this.customerAdressRepository.findOne({where: {id}, include: {all: true}})    
    if (!customerAdress) {
      throw new NotFoundException('No such customerAdress exists');
    }
    return customerAdress;
  }

  // update
  async update(id: number, updateCustomerAdressDto: UpdateCustomerAdressDto) {
    const customerAdress = await this.customerAdressRepository.findOne({where: {id}})    
    if (!customerAdress) {
      throw new NotFoundException('No such customerAdress exists');
    }
    const updated = await this.customerAdressRepository.update(updateCustomerAdressDto, {where: {id}})
    return {message: "Successfully updated", count: updated}
  }

  // remove
  async remove(id: number) {
    const deleted = await this.customerAdressRepository.destroy({where: {id}})
    return {message: "Successfully removed", count: deleted}
  }
}
