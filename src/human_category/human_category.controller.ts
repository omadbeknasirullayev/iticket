import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HumanCategory } from './entities/human_category.entity';
import { JwtAdminGuard } from 'src/guards/admin.guard';

@ApiTags('Human Category')
@Controller('human-category')
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @ApiOperation({summary: "created human category"})
  @ApiResponse({status: 200, type: HumanCategory})
  @UseGuards(JwtAdminGuard)
  @Post()
  create(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryService.create(createHumanCategoryDto);
  }

  @ApiOperation({summary: "Find all human category"})
  @ApiResponse({status: 200, type: [HumanCategory]})
  @UseGuards(JwtAdminGuard)
  @Get()
  findAll() {
    return this.humanCategoryService.findAll();
  }

  @ApiOperation({summary: "Find one human category"})
  @ApiResponse({status: 200, type: HumanCategory})
  @UseGuards(JwtAdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.humanCategoryService.findOne(+id);
  }

  @ApiOperation({summary: "Update human category"})
  @ApiResponse({status: 200, type: HumanCategory})
  @UseGuards(JwtAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humanCategoryService.update(+id, updateHumanCategoryDto);
  }

  @ApiOperation({summary: "Remove human category"})
  @ApiResponse({status: 200, type: HumanCategory})
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.humanCategoryService.remove(+id);
  }
}
