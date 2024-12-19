import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log("CORS:", process.env.CORS_ORIGIN);

  // Enable Cors
  app.enableCors( {
    origin: process.env.CORS_ORIGIN,
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    allowedHeaders: "Content-Type, Accept",
  });

  await app.listen(process.env.PORT);
}
bootstrap();
