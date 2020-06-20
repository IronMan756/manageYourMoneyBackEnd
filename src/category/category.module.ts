import { CategoriesController } from "./category.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { categorySchema } from "./category.schema";
import { CategoriesService } from "./category.service";
import { Module } from "@nestjs/common/decorators/modules/module.decorator";

@Module({
    controllers:[CategoriesController],
    exports:[],
    imports:[
        MongooseModule.forFeature([{
            name:'Category',
            schema: categorySchema 
        }])
    ],
    providers:[CategoriesService]
})

export class CategoriesModule{}