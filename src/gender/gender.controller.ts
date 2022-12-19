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
import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAdminGuard } from 'src/guards/admin.guard';

@ApiTags('Gender')
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @ApiOperation({ summary: 'Gender name' })
  @ApiResponse({ status: 200, type: Gender })
  @UseGuards(JwtAdminGuard)
  @Post()
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.genderService.create(createGenderDto);
  }

  @ApiOperation({ summary: 'Find all languages' })
  @ApiResponse({ status: 200, type: [Gender] })
  @UseGuards(JwtAdminGuard)
  @Get()
  findAll() {
    return this.genderService.findAll();
  }

  @ApiOperation({ summary: 'Find One language' })
  @ApiResponse({ status: 200, type: Gender })
  @UseGuards(JwtAdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate language' })
  @ApiResponse({ status: 200, type: Gender })
  @UseGuards(JwtAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.genderService.update(+id, updateGenderDto);
  }

  @ApiOperation({ summary: 'remove language' })
  @ApiResponse({ status: 200, type: Gender })
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genderService.remove(+id);
  }
}
