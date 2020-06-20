import { Module } from "@nestjs/common";
import { IncomesController } from "./incomes.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { incomeSchema } from "./incomes.schema";
import { IncomesService } from "./incomes.service";

@Module({
    controllers:[IncomesController],
    exports:[],
    imports:[
        MongooseModule.forFeature([{
            name:'Income',
            schema: incomeSchema 
        }])
    ],
    providers:[IncomesService]
})

export class IncomesModule{}