import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiPayloadTooLargeResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @ApiOperation({summary: 'Find one customer'})
  @ApiResponse({status: 200, type: Customer})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @ApiOperation({summary: 'Update customers'})
  @ApiResponse({status: 200, type: Customer})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @ApiOperation({summary: 'Remove customers'})
  @ApiResponse({status: 200, type: Customer})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
