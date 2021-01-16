import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import bodyParser = require("body-parser");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle("ManageYourMoney")
    // .setDescription('ManageYourMoney API description')
    .setVersion("1.0")
    // .addTag('ManageYourMoney')
    .build();

  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: "50mb",
      parameterLimit: 100000,
    })
  );
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);
  const configService: ConfigService = app.get(ConfigService);
  const port: string = configService.get("PORT") as string;
  app.enableCors();

  // TRIED TO MAKE BACK UP MONGO CLOUD DB
  // npm i mongo-cloud-backup
  // var destination_folder = "/backup";
  // var replicaset_name = "Cluster0-shard-0";
  // var replicaset_members =
  //   "cluster0-shard-00-00.mmm21.mongodb.net:27017,cluster0-shard-00-01.mmm21.mongodb.net:27017,cluster0-shard-00-02.mmm2";
  // // "cluster0-shard-00-01-tajsk.mongodb.net:27017,cluster0-shard-00-02-tajsk.mongodb.net:27017,cluster0-shard-00-00-tajsk.mongodb.net:27017";
  // var db_name = "manageYourMoney";
  // var credentials = {
  //   username: "manageYourMoney",
  //   password: "manageYourMoney",
  // };

  // // "mongodb+srv://manageYourMoney:manageYourMoney@cluster0.mmm21.mongodb.net/manageYourMoney?retryWrites=true&w=majority";

  // mcb.mongoCloudBackup(
  //   replicaset_name,
  //   replicaset_members,
  //   db_name,
  //   credentials,
  //   destination_folder
  // );
  await app.listen(port);
}
bootstrap();
