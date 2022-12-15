import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDiscountCuponDto } from './dto/create-discount_cupon.dto';
import { UpdateDiscountCuponDto } from './dto/update-discount_cupon.dto';
import { DiscountCupon } from './entities/discount_cupon.entity';

@Injectable()
export class DiscountCuponService {
  constructor (@InjectModel(DiscountCupon) private discountCuponRapository: typeof DiscountCupon) {}

  async create(createDiscountCuponDto: CreateDiscountCuponDto) {
    const discount_cupon = await this.discountCuponRapository.create(createDiscountCuponDto)
    return {message: "Successfully added", info: discount_cupon}
  }

  async findAll() {
    const discount_cupons = await this.discountCuponRapository.findAll()
    return discount_cupons
  }

  async findOne(id: number) {
    const discount_cupon = await this.discountCuponRapository.findOne({where: {id}})
    if (!discount_cupon) {
      throw new NotFoundException("No such discountCupon exists")
    } 
    return discount_cupon
  }

  async update(id: number, updateDiscountCuponDto: UpdateDiscountCuponDto) {
    const discount_cupon = await this.discountCuponRapository.findOne({where: {id}})
    if (!discount_cupon) {
      throw new NotFoundException("No such discountCupon exists")
    }
    await this.discountCuponRapository.update(updateDiscountCuponDto, {where: {id}})
    return {message: "Successfully updated"}
  }

  async remove(id: number) {
    const deleted = await this.discountCuponRapository.destroy({where: {id}})
    return {message: "Successfully removed", info: deleted}
  }
}
