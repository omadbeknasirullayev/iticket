import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Status } from './entities/status.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Status]), JwtModule],
  controllers: [StatusController],
  providers: [StatusService],
  exports: [StatusService]
})
export class StatusModule {}
