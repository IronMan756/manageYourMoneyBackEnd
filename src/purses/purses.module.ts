import { Module } from "@nestjs/common";
import { PursesController } from "./purses.controller";
import { purseSchema } from "./purses.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { PursesService } from "./purses.service";

@Module({
    controllers: [PursesController],
    exports:[],
    imports:[
        MongooseModule.forFeature([{
            name: 'Purse',
            schema: purseSchema
        }])
    ],
    providers:[PursesService]
})
export class PursesModule {}