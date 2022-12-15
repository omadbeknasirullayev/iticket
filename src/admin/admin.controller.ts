import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { JwtAdminGuard } from 'src/guards/admin.guard';
import { AdminService } from './admin.service';
import { AdminDto } from './dto/admin.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Tokens } from './types';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  signup(
    @Body() adminDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<Tokens> {
    return this.adminService.signup(adminDto, res);
  }


  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signin(
    @Body() adminDto: AdminDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<Tokens> {
    return await this.adminService.signin(adminDto, res);
  }

  @UseGuards(JwtAdminGuard)
  @Post('activate/:id')
  create(@Param('id') id: string) {
    return this.adminService.activate(+id);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
