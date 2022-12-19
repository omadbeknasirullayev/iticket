import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { JwtAdminGuard } from 'src/guards/admin.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Venue } from './entities/venue.entity';

@ApiTags('Venue')
@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiOperation({ summary: 'Venue name' })
  @ApiResponse({ status: 200, type: Venue })
  @UseGuards(JwtAdminGuard)
  @Post()
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation({ summary: 'Find all venues' })
  @ApiResponse({ status: 200, type: [Venue] })
  @Get()
  findAll() {
    return this.venueService.findAll();
  }

  @ApiOperation({ summary: 'Find One venue' })
  @ApiResponse({ status: 200, type: Venue })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate venue' })
  @ApiResponse({ status: 200, type: Venue })
  @UseGuards(JwtAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(+id, updateVenueDto);
  }

  @ApiOperation({ summary: 'remove venue' })
  @ApiResponse({ status: 200, type: Venue })
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueService.remove(+id);
  }
}
