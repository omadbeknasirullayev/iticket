import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentMethod } from './entities/payment_method.entity';

@ApiTags('Payment Method')
@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @ApiOperation({ summary: 'PaymentMethod name' })
  @ApiResponse({ status: 200, type: PaymentMethod })
  @Post()
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodService.create(createPaymentMethodDto);
  }

  @ApiOperation({ summary: 'Find all payment methods' })
  @ApiResponse({ status: 200, type: [PaymentMethod] })
  @Get()
  findAll() {
    return this.paymentMethodService.findAll();
  }

  @ApiOperation({ summary: 'Find One payment method' })
  @ApiResponse({ status: 200, type: PaymentMethod })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentMethodService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate payment method' })
  @ApiResponse({ status: 200, type: PaymentMethod })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentMethodService.update(+id, updatePaymentMethodDto);
  }

  @ApiOperation({ summary: 'remove payment method' })
  @ApiResponse({ status: 200, type: PaymentMethod })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentMethodService.remove(+id);
  }
}
