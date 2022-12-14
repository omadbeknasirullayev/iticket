import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { JwtAdminCustomerGuard } from 'src/guards/jwtAdminystomerGuard.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Region } from './entities/region.entity';
import { JwtAdminGuard } from 'src/guards/admin.guard';

@ApiTags('Region')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({ summary: 'Region name' })
  @ApiResponse({ status: 200, type: Region })
  @UseGuards(JwtAdminGuard)
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({ summary: 'Find all regions' })
  @ApiResponse({ status: 200, type: [Region] })
  @UseGuards(JwtAdminCustomerGuard)
  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: 'Find One region' })
  @ApiResponse({ status: 200, type: Region })
  @UseGuards(JwtAdminCustomerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate region' })
  @ApiResponse({ status: 200, type: Region })
  @UseGuards(JwtAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @ApiOperation({ summary: 'remove region' })
  @ApiResponse({ status: 200, type: Region })
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(+id);
  }
}
