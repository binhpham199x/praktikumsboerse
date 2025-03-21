import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { patchNestjsSwagger, ZodValidationPipe } from '@anatine/zod-nestjs';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  patchNestjsSwagger();

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ZodValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Intership Platform')
    .setDescription('A REST-API for internship positions')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'jwt',
    )
    .setVersion('1.0')
    .build();

  const port = 3000;

  const document = SwaggerModule.createDocument(app, config);
  const path = 'docs';
  SwaggerModule.setup(path, app, document);

  await app.listen(port, () => {
    Logger.log(
      'Swagger UI for API docs at http://localhost:' + port + '/' + path,
    );
    Logger.log('Listening at http://localhost:' + port);
  });
}
bootstrap();
