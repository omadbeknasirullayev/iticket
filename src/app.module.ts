import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.entity';
import { Language } from './languages/entities/language.entity';
import { LanguagesModule } from './languages/languages.module';
import { HumanCategoryModule } from './human_category/human_category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),


    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Customer, Language],
      autoLoadModels: true,
      logging: false
    }),
    CustomersModule,
    LanguagesModule,
    HumanCategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
