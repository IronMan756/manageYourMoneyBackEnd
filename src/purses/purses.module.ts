import { Module } from "@nestjs/common";
import { PursesController } from "./purses.controller";
import { purseSchema } from "./purses.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { PursesService } from "./purses.service";
import { transactionSchema } from "src/transactions/transactions.schema";

@Module({
  controllers: [PursesController],
  exports: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: "Purse",
        schema: purseSchema,
      },
      {
        name: "Expence",
        schema: transactionSchema,
      },
    ]),
  ],
  providers: [PursesService],
})
export class PursesModule {}
