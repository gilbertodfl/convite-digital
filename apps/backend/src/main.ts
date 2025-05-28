import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ErroFilter from './erro.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuração específica do CORS
  app.enableCors({
    origin: ['http://localhost:3000'], // URL do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  
  app.useGlobalFilters(new ErroFilter());
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
