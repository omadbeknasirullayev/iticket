import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscountCuponService } from './discount_cupon.service';
import { CreateDiscountCuponDto } from './dto/create-discount_cupon.dto';
import { UpdateDiscountCuponDto } from './dto/update-discount_cupon.dto';

@Controller('discount-cupon')
export class DiscountCuponController {
  constructor(private readonly discountCuponService: DiscountCuponService) {}

  @Post()
  create(@Body() createDiscountCuponDto: CreateDiscountCuponDto) {
    return this.discountCuponService.create(createDiscountCuponDto);
  }

  @Get()
  findAll() {
    return this.discountCuponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountCuponService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountCuponDto: UpdateDiscountCuponDto) {
    return this.discountCuponService.update(+id, updateDiscountCuponDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountCuponService.remove(+id);
  }
}
