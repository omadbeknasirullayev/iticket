import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Status } from './entities/status.entity';

@ApiTags('Status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}


  @ApiOperation({ summary: 'Status name' })
  @ApiResponse({ status: 200, type: Status })
  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @ApiOperation({ summary: 'Find all status' })
  @ApiResponse({ status: 200, type: [Status] })
  @Get()
  findAll() {
    return this.statusService.findAll();
  }

  @ApiOperation({ summary: 'Find One status' })
  @ApiResponse({ status: 200, type: Status })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updadate status' })
  @ApiResponse({ status: 200, type: Status })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(+id, updateStatusDto);
  }

  @ApiOperation({ summary: 'remove status' })
  @ApiResponse({ status: 200, type: Status })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }
}
