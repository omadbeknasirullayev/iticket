import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { PaymentMethod } from './entities/payment_method.entity';

@Injectable()
export class PaymentMethodService {
  constructor (@InjectModel(PaymentMethod) private paymentMethodRapository: typeof PaymentMethod) {}

  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    const payment_method = await this.paymentMethodRapository.create(createPaymentMethodDto)
    return {message: "Successfully added", info: payment_method}
  }

  async findAll() {
    const payment_methods = await this.paymentMethodRapository.findAll()
    return payment_methods
  }

  async findOne(id: number) {
    const payment_method = await this.paymentMethodRapository.findOne({where: {id}})
    if (!payment_method) {
      throw new NotFoundException("No such paymentMethod exists")
    } 
    return payment_method
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    const payment_method = await this.paymentMethodRapository.findOne({where: {id}})
    if (!payment_method) {
      throw new NotFoundException("No such paymentMethod exists")
    }
    await this.paymentMethodRapository.update(updatePaymentMethodDto, {where: {id}})
    return {message: "Successfully updated"}
  }

  async remove(id: number) {
    const deleted = await this.paymentMethodRapository.destroy({where: {id}})
    return {message: "Successfully removed", info: deleted}
  }
}
