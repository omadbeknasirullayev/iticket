import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Gender')
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @ApiOperation({ summary: 'Gender name' })
  @ApiResponse({ status: 200, type: Gender })
  @Post()
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.genderService.create(createGenderDto);
  }

  @ApiOperation({ summary: 'Find all languages' })
  @ApiResponse({ status: 200, type: [Gender] })
  @Get()
  findAll() {
    return this.genderService.findAll();
  }

  @ApiOperation({ summary: 'Find One language' })
  @ApiResponse({ status: 200, type: Gender })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate language' })
  @ApiResponse({ status: 200, type: Gender })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.genderService.update(+id, updateGenderDto);
  }

  @ApiOperation({ summary: 'remove language' })
  @ApiResponse({ status: 200, type: Gender })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genderService.remove(+id);
  }
}
