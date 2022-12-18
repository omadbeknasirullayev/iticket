import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Venue Photo')
@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  create(@Body() createVenuePhotoDto: CreateVenuePhotoDto, @UploadedFile() photo) {
    return this.venuePhotoService.create(createVenuePhotoDto, photo);
  }

  @Get()
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenuePhotoDto: UpdateVenuePhotoDto,  @UploadedFile() photo) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto, photo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
