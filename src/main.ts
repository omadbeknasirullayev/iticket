import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3030

  app.useGlobalPipes(new ValidationPipe())
  
  const config = new DocumentBuilder()
  .setTitle('ITicket')
  .setDescription('REST API')
  .setVersion('1.0.0')
  .addTag('NodeJS, NestJS, Postgres, sequelize')
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
  });
}
bootstrap();
