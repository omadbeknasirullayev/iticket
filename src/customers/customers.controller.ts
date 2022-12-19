import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiPayloadTooLargeResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAdminGuard } from 'src/guards/admin.guard';
import { JwtAdminCustomerGuard } from 'src/guards/jwtAdminystomerGuard.guard';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiOperation({summary: 'create cutomers'})
  @ApiResponse({status: 200, type: Customer})
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @ApiOperation({summary: 'Find all customers'})
  @ApiResponse({status: 200, type: [Customer]})
  @UseGuards(JwtAdminGuard)
  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @ApiOperation({summary: 'Find one customer'})
  @ApiResponse({status: 200, type: Customer})
  @UseGuards(JwtAdminCustomerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @ApiOperation({summary: 'Update customers'})
  @ApiResponse({status: 200, type: Customer})
  @UseGuards(JwtAdminCustomerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @ApiOperation({summary: 'Remove customers'})
  @ApiResponse({status: 200, type: Customer})
  @UseGuards(JwtAdminCustomerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
