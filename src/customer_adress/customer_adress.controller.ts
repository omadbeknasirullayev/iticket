import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerAdressService } from './customer_adress.service';
import { CreateCustomerAdressDto } from './dto/create-customer_adress.dto';
import { UpdateCustomerAdressDto } from './dto/update-customer_adress.dto';

@Controller('customer-adress')
export class CustomerAdressController {
  constructor(private readonly customerAdressService: CustomerAdressService) {}

  @Post()
  create(@Body() createCustomerAdressDto: CreateCustomerAdressDto) {
    return this.customerAdressService.create(createCustomerAdressDto);
  }

  @Get()
  findAll() {
    return this.customerAdressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerAdressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerAdressDto: UpdateCustomerAdressDto) {
    return this.customerAdressService.update(+id, updateCustomerAdressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerAdressService.remove(+id);
  }
}
