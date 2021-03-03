import { HttpModule, HttpService, Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { PursesModule } from "./purses/purses.module";
import { TransactionsModule } from "./transactions/transactions.module";
import { CategoriesModule } from "./category/category.module";
import { ExpencesModule } from "./expences/expences.module";
import { IncomesModule } from "./incomes/incomes.module";
import { AppController } from "./app.controller";
import { BlockchainModule } from "./blockchain/blockchain.module";

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === "production" ? ".production.env" : ".env",
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get("DATABASE"),
      }),
    }),
    UsersModule,
    PursesModule,
    TransactionsModule,
    IncomesModule,
    ExpencesModule,
    CategoriesModule,
    BlockchainModule,
  ],
  providers: [AppService],
  controllers: [AppController],
  // exports: [HttpService],
})
export class AppModule {}
