import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VenueType } from './entities/venue_type.entity';
import { JwtAdminGuard } from 'src/guards/admin.guard';

@ApiTags('Venue Type')
@Controller('venue-type')
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @ApiOperation({ summary: 'VenueType name' })
  @ApiResponse({ status: 200, type: VenueType })
  @UseGuards(JwtAdminGuard)
  @Post()
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.create(createVenueTypeDto);
  }

  @ApiOperation({ summary: 'Find all venue types' })
  @ApiResponse({ status: 200, type: [VenueType] })
  @Get()
  findAll() {
    return this.venueTypeService.findAll();
  }

  @ApiOperation({ summary: 'Find One venue type' })
  @ApiResponse({ status: 200, type: VenueType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate venue type' })
  @ApiResponse({ status: 200, type: VenueType })
  @UseGuards(JwtAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeService.update(+id, updateVenueTypeDto);
  }

  @ApiOperation({ summary: 'remove venue type' })
  @ApiResponse({ status: 200, type: VenueType })
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueTypeService.remove(+id);
  }
}
