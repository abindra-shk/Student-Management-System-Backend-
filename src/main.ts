import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  LoggingInterceptor,
} from 'nestjs-winston-logger';
import { ResponseTransformInterceptor } from './core/http/interceptors/response-transform.interceptor';
import { globalLogger } from './config/globalLogger';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalFilters();
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useLogger(globalLogger);

  app.useGlobalInterceptors(new LoggingInterceptor(globalLogger));

  if (process.env.APP_ENV !== 'production') {
    app.use(
      ['/api-doc', '/api-doc/*'],
      basicAuth({
        challenge: true,
        users: {
          [`${process.env.SWAGGER_USER}`]: process.env.SWAGGER_PASSWORD,
        },
      }),
    );
    const options = new DocumentBuilder()
      .setTitle('base OKR')
      .setDescription('base OKR API')
      .setVersion('1.0')
      .setExternalDoc('Postman Collection', '/api-doc-json')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, options);
    const customOptions = {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customSiteTitle: 'base OKR Docs',
    };
    SwaggerModule.setup('api-doc', app, document, customOptions);
  }

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalInterceptors(new ResponseTransformInterceptor());
  app.enableShutdownHooks();

  // app.use(helmet());
  await app.listen(process.env.APP_PORT || '3003', () => {
    console.log(`App running at port ${process.env.APP_PORT || '3003'}`);
  });

}
bootstrap();
