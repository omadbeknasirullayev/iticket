import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@ApiTags('Country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @ApiOperation({ summary: 'Country name' })
  @ApiResponse({ status: 200, type: Country })
  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @ApiOperation({ summary: 'Find all countrys' })
  @ApiResponse({ status: 200, type: [Country] })
  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @ApiOperation({ summary: 'Find One country' })
  @ApiResponse({ status: 200, type: Country })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate country' })
  @ApiResponse({ status: 200, type: Country })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(+id, updateCountryDto);
  }

  @ApiOperation({ summary: 'remove country' })
  @ApiResponse({ status: 200, type: Country })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
