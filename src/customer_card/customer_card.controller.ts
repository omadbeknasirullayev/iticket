import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAdminCustomerGuard } from 'src/guards/jwtAdminystomerGuard.guard';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { CustomerCard } from './entities/customer_card.entity';

@Controller('customer-card')
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @ApiOperation({ summary: 'CustomerCard name' })
  @ApiResponse({ status: 200, type: CustomerCard })
  @UseGuards(JwtAdminCustomerGuard)
  @Post()
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @ApiOperation({ summary: 'Select the main card' })
  @ApiResponse({ status: 200,})
  @UseGuards(JwtAdminCustomerGuard)
  @Post('ismain/:id')
  isMain(@Param('id') id: string, @Body() customer: any) {
    return this.customerCardService.isMain(+id, customer.customer_id)
  }

  @ApiOperation({ summary: "Activated customer's card" })
  @ApiResponse({ status: 200, })
  @UseGuards(JwtAdminCustomerGuard)
  @Post('/activate/:id')
  activate(@Param('id') id: string) {
    return this.customerCardService.activate(+id)
  }

  @ApiOperation({ summary: 'Find all customer cards' })
  @ApiResponse({ status: 200, type: [CustomerCard] })
  @UseGuards(JwtAdminCustomerGuard)
  @Get()
  findAll() {
    return this.customerCardService.findAll();
  }

  @ApiOperation({ summary: 'Find One customer card' })
  @ApiResponse({ status: 200, type: CustomerCard })
  @UseGuards(JwtAdminCustomerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerCardService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate customer card' })
  @ApiResponse({ status: 200, type: CustomerCard })
  @UseGuards(JwtAdminCustomerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @ApiOperation({ summary: 'remove customer card' })
  @ApiResponse({ status: 200, type: CustomerCard })
  @UseGuards(JwtAdminCustomerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerCardService.remove(+id);
  }
}
