import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('ManageYourMoney')
    .setDescription('ManageYourMoney API description')
    .setVersion('1.0')
    .addTag('ManageYourMoney')
    .build();

  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: '50mb',
      parameterLimit: 100000,
    }),
  );
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  const configService: ConfigService = app.get(ConfigService);
  const port: string = configService.get('PORT') as string;
  await app.listen(port);
}
bootstrap();