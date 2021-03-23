import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './configs /winston.config';
import { SwaggerModule, DocumentBuilder  } from '@nestjs/swagger';
 

async function bootstrap() {
  const logger = WinstonModule.createLogger(winstonConfig);
  const app = await NestFactory.create(AppModule, { logger });

  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
  .setTitle('Item API')
  .setDescription('My Item API')
  .build());

SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();