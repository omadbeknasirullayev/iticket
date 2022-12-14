import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAdminCustomerGuard } from 'src/guards/jwtAdminystomerGuard.guard';
import { CustomerAdressService } from './customer_adress.service';
import { CreateCustomerAdressDto } from './dto/create-customer_adress.dto';
import { UpdateCustomerAdressDto } from './dto/update-customer_adress.dto';
import { CustomerAdress } from './entities/customer_adress.entity';

@ApiTags('Customer Adress')
@Controller('customer-adress')
export class CustomerAdressController {
  constructor(private readonly customerAdressService: CustomerAdressService) {}

  @ApiOperation({ summary: 'CustomerAdress name' })
  @ApiResponse({ status: 200, type: CustomerAdress })
  @UseGuards(JwtAdminCustomerGuard)
  @Post()
  create(@Body() createCustomerAdressDto: CreateCustomerAdressDto) {
    return this.customerAdressService.create(createCustomerAdressDto);
  }

  @ApiOperation({ summary: 'Find all customer adresses' })
  @ApiResponse({ status: 200, type: [CustomerAdress] })
  @UseGuards(JwtAdminCustomerGuard)
  @Get()
  findAll() {
    return this.customerAdressService.findAll();
  }

  @ApiOperation({ summary: 'Find One customer adress' })
  @ApiResponse({ status: 200, type: CustomerAdress })
  @UseGuards(JwtAdminCustomerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerAdressService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate customer adress' })
  @ApiResponse({ status: 200, type: CustomerAdress })
  @UseGuards(JwtAdminCustomerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerAdressDto: UpdateCustomerAdressDto) {
    return this.customerAdressService.update(+id, updateCustomerAdressDto);
  }

  @ApiOperation({ summary: 'remove customer adress' })
  @ApiResponse({ status: 200, type: CustomerAdress })
  @UseGuards(JwtAdminCustomerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerAdressService.remove(+id);
  }
}
