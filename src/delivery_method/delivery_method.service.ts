import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { DeliveryMethod } from './entities/delivery_method.entity';

@Injectable()
export class DeliveryMethodService {
  constructor (@InjectModel(DeliveryMethod) private deliveryMethodRapository: typeof DeliveryMethod) {}

  async create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    const delivery_method = await this.deliveryMethodRapository.create(createDeliveryMethodDto)
    return {message: "Successfully added", info: delivery_method}
  }

  async findAll() {
    const delivery_methods = await this.deliveryMethodRapository.findAll()
    return delivery_methods
  }

  async findOne(id: number) {
    const delivery_method = await this.deliveryMethodRapository.findOne({where: {id}})
    if (!delivery_method) {
      throw new NotFoundException("No such deliveryMethod exists")
    } 
    return delivery_method
  }

  async update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    const delivery_method = await this.deliveryMethodRapository.findOne({where: {id}})
    if (!delivery_method) {
      throw new NotFoundException("No such deliveryMethod exists")
    }
    await this.deliveryMethodRapository.update(updateDeliveryMethodDto, {where: {id}})
    return {message: "Successfully updated"}
  }

  async remove(id: number) {
    const deleted = await this.deliveryMethodRapository.destroy({where: {id}})
    return {message: "Successfully removed", info: deleted}
  }
}
