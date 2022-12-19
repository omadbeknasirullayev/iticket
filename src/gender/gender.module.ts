import { Module } from '@nestjs/common';
import { GenderService } from './gender.service';
import { GenderController } from './gender.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gender } from './entities/gender.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Gender]), JwtModule],
  controllers: [GenderController],
  providers: [GenderService],
  exports: [GenderService]
})
export class GenderModule {}
