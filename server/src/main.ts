import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PORT } from "./configs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT || 4000);
}
bootstrap();
