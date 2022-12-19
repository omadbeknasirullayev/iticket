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
import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Language } from './entities/language.entity';
import { JwtAdminGuard } from 'src/guards/admin.guard';

@ApiTags('Language')
@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @ApiOperation({ summary: 'Language name' })
  @ApiResponse({ status: 200, type: Language })
  @UseGuards(JwtAdminGuard)
  @Post()
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languagesService.create(createLanguageDto);
  }

  @ApiOperation({ summary: 'Find all languages' })
  @ApiResponse({ status: 200, type: [Language] })
  @UseGuards(JwtAdminGuard)
  @Get()
  findAll() {
    return this.languagesService.findAll();
  }

  @ApiOperation({ summary: 'Find One language' })
  @ApiResponse({ status: 200, type: Language })
  @UseGuards(JwtAdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languagesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate language' })
  @ApiResponse({ status: 200, type: Language })
  @UseGuards(JwtAdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateLanguageDto,
  ) {
    return this.languagesService.update(+id, updateLanguageDto);
  }

  @ApiOperation({ summary: 'remove language' })
  @ApiResponse({ status: 200, type: Language })
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languagesService.remove(+id);
  }
}
