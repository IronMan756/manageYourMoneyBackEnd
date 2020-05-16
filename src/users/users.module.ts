import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.constroller';
import { Module } from "@nestjs/common";
import { userSchema } from './users.schema';

@Module({
    controllers: [UsersController],
    exports: [UsersService],
    imports:[
        MongooseModule.forFeature([{
            name:'User',
            schema: userSchema
        }])
    ],
    providers:[UsersService]
})
export class UsersModule{}
