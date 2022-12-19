import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAdminCustomerGuard } from 'src/guards/jwtAdminystomerGuard.guard';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@ApiTags("Cart")
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @ApiOperation({ summary: 'Card name' })
  @ApiResponse({ status: 200, type: Card })
  @UseGuards(JwtAdminCustomerGuard)
  @Post()
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }

  @ApiOperation({ summary: 'Find all carts' })
  @ApiResponse({ status: 200, type: [Card] })
  @UseGuards(JwtAdminCustomerGuard)
  @Get()
  findAll() {
    return this.cardService.findAll();
  }

  @ApiOperation({ summary: 'Find One cart' })
  @ApiResponse({ status: 200, type: Card })
  @UseGuards(JwtAdminCustomerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate cart' })
  @ApiResponse({ status: 200, type: Card })
  @UseGuards(JwtAdminCustomerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardService.update(+id, updateCardDto);
  }

  @ApiOperation({ summary: 'remove cart' })
  @ApiResponse({ status: 200, type: Card })
  @UseGuards(JwtAdminCustomerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardService.remove(+id);
  }
}
