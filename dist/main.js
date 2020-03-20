"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('ManageYourMoney')
        .setVersion('1.0')
        .build();
    app.use(bodyParser.urlencoded({
        extended: true,
        limit: '50mb',
        parameterLimit: 100000,
    }));
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT');
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map