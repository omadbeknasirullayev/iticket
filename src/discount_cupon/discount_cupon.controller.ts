import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DiscountCuponService } from './discount_cupon.service';
import { CreateDiscountCuponDto } from './dto/create-discount_cupon.dto';
import { UpdateDiscountCuponDto } from './dto/update-discount_cupon.dto';
import { DiscountCupon } from './entities/discount_cupon.entity';

@ApiTags('Discount cupon')
@Controller('discount-cupon')
export class DiscountCuponController {
  constructor(private readonly discountCuponService: DiscountCuponService) {}


  @ApiOperation({ summary: 'DiscountCupon name' })
  @ApiResponse({ status: 200, type: DiscountCupon })
  @Post()
  create(@Body() createDiscountCuponDto: CreateDiscountCuponDto) {
    return this.discountCuponService.create(createDiscountCuponDto);
  }

  @ApiOperation({ summary: 'Find all discount cupons' })
  @ApiResponse({ status: 200, type: [DiscountCupon] })
  @Get()
  findAll() {
    return this.discountCuponService.findAll();
  }

  @ApiOperation({ summary: 'Find One discount cupon' })
  @ApiResponse({ status: 200, type: DiscountCupon })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountCuponService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate discount cupon' })
  @ApiResponse({ status: 200, type: DiscountCupon })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountCuponDto: UpdateDiscountCuponDto) {
    return this.discountCuponService.update(+id, updateDiscountCuponDto);
  }

  @ApiOperation({ summary: 'remove discount cupon' })
  @ApiResponse({ status: 200, type: DiscountCupon })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountCuponService.remove(+id);
  }
}
