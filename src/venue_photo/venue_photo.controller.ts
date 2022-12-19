import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VenuePhoto } from './entities/venue_photo.entity';
import { JwtAdminGuard } from 'src/guards/admin.guard';

@ApiTags('Venue Photo')
@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @ApiOperation({ summary: 'VenuePhoto name' })
  @ApiResponse({ status: 200, type: VenuePhoto })
  @UseGuards(JwtAdminGuard)
  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  create(
    @Body() createVenuePhotoDto: CreateVenuePhotoDto,
    @UploadedFile() photo,
  ) {
    return this.venuePhotoService.create(createVenuePhotoDto, photo);
  }

  @ApiOperation({ summary: 'Find all vanue photos' })
  @ApiResponse({ status: 200, type: [VenuePhoto] })
  @Get()
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @ApiOperation({ summary: 'Find One vanue photo' })
  @ApiResponse({ status: 200, type: VenuePhoto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate vanue photo' })
  @ApiResponse({ status: 200, type: VenuePhoto })
  @UseGuards(JwtAdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto,
    @UploadedFile() photo,
  ) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto, photo);
  }

  @ApiOperation({ summary: 'remove vanue photo' })
  @ApiResponse({ status: 200, type: VenuePhoto })
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
