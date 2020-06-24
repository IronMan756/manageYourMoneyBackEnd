import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { TransactionsController } from "./transactions.controller";
import { transactionSchema } from "./transactions.schema";
import { TransactionsService } from "./transactions.service";

@Module({
    controllers:[TransactionsController],
    exports:[],
    imports:[
        MongooseModule.forFeature([{
            name:'Transaction',
            schema: transactionSchema 
        }])
    ],
    providers:[TransactionsService]
})

export class TransactionsModule{}