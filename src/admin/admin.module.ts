import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './entities/admin.entity';
import { JwtModule } from '@nestjs/jwt';
import {
  AccessTokenStrategy,
  RefreshTokenFromCookieStrategy,
} from './strategies'; 

@Module({
  imports: [SequelizeModule.forFeature([Admin]), JwtModule.register({})],
  controllers: [AdminController],
  providers: [
    AdminService,
    AccessTokenStrategy,
    RefreshTokenFromCookieStrategy,
  ],
})
export class AdminModule {}
