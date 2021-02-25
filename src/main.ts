import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // -------------------------    WORKS ONLY SENDBOX -----------------------
  // const auth = {
  //   apiKey: "f72de0c68cc10313e3d6e88cfec8921b",
  //   apiSecret:
  //     "f1G51/+DJFW10+FM+bSz7G9g+IAEdyZK/wdr2p65XGKcfxmrrbt9Y5RyPuimTGmJmD5a5ex/m5WKmtJUIAnqlA==",
  //   passphrase: "jpmidetmc5k",
  // The Sandbox is for testing only and offers a subset of the products/assets:
  // https://docs.pro.coinbase.com/#sandbox
  // useSandbox: true,
  // };
  // const authR = {
  //   apiKey: "wBJFj0WiMjajlFtI",
  //   apiSecret: "lEbPlRy0vDDeodKdcPdtS3TOtt4LDpfx",
  //   passphrase: "jpmidetmc5k",
  //   // The Sandbox is for testing only and offers a subset of the products/assets:
  //   // https://docs.pro.coinbase.com/#sandbox
  //   useSandbox: false,
  // };

  // const client = new CoinbasePro(auth);
  // console.log(client);
  // // client.rest.account.listAccounts().then((accounts) => {
  //   const message = `You can trade "${accounts.length}" different pairs.`;
  //   console.log(message);
  // });
  // ----------------------------------------------------------------------------------
  // console.log(new PublicClient({ sandbox: false }));
  // ----------------------   IT IS WORKONG  BUT DEPRICATED  ------------------------
  // const myClient = new Client({
  //   apiKey: "VfC6iAMGXo5OJC7y",
  //   apiSecret: "ymNqdMroOlUEJPSk6sgpJKBbZK56rfge",
  //   strictSSL: false,
  // });
  // // myClient.getAccounts({}, function(err: any, accounts: any) {
  // //   console.log(err);
  // //   accounts.forEach(function(acct: any) {
  // //     console.log("my bal: " + acct.balance.amount + " for " + acct.name);
  // //   });
  // // });
  // // console.log(myClient);
  // // GET PRICE CHOSEN PAIR OF CURRENCY
  // myClient.getBuyPrice({ currencyPair: "BTC-USD" }, function(
  //   err: any,
  //   obj: any
  // ) {
  //   console.log(err);
  //   console.log("total amount: " + obj.data.amount);
  // });
  // --------------------------------------------------------------
  // try {
  //   // const client = new CoinbasePro();

  //   const key = "VfC6iAMGXo5OJC7y";
  //   const secret = "ymNqdMroOlUEJPSk6sgpJKBbZK56rfge";
  //   const passphrase = "AndrewFreyd756";

  //   // const client = new CoinbasePro(auth);
  //   const client = new AuthenticatedClient({
  //     key,
  //     secret,
  //     passphrase,
  //   });
  //   const account_id = "71452118-efc7-4cc4-8780-a5e22d4baa53";
  //   const account = await client.getAccount({ account_id });
  //   console.log("Accounts ", account);
  // } catch (e) {
  //   console.log(e);
  //   return null;
  // } // console.log(client);

  const options = new DocumentBuilder()
    .setTitle('ManageYourMoney')
    // .setDescription('ManageYourMoney API description')
    .setVersion('1.0')
    // .addTag('ManageYourMoney')
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
  app.enableCors();
  await app.listen(port);
}
bootstrap();
