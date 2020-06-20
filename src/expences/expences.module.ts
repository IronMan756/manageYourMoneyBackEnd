import { ExpencesController } from "./expences.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { transactionSchema } from "src/transactions/transactions.schema";
import { ExpencesService } from "./expences.service";
import { Module } from "@nestjs/common/decorators/modules/module.decorator";

@Module({
    controllers:[ExpencesController],
    exports:[],
    imports:[
        MongooseModule.forFeature([{
            name:'Expence',
            schema: transactionSchema 
        }])
    ],
    providers:[ExpencesService]
})

export class ExpencesModule{}