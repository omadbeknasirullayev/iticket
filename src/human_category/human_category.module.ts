import { Module } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { HumanCategoryController } from './human_category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HumanCategory } from './entities/human_category.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([HumanCategory]), JwtModule],
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
  exports: [HumanCategoryService],
})
export class HumanCategoryModule {}
