import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/registration')
  registration(
    @Body() createCustomerDto: CreateCustomerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.registration(createCustomerDto, res);
  }
}
