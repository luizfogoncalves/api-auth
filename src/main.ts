import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvsConfig } from './infra/config/envs.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(EnvsConfig.getServerPort());
}
bootstrap();
