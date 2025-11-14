import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Requisition API')
  .setDescription('API documentation for Requisition system')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
