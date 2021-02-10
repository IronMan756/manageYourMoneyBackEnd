"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const purses_module_1 = require("./purses/purses.module");
const transactions_module_1 = require("./transactions/transactions.module");
const category_module_1 = require("./category/category.module");
const expences_module_1 = require("./expences/expences.module");
const incomes_module_1 = require("./incomes/incomes.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                envFilePath: process.env.NODE_ENV === 'production' ? '.production.env' : '.env',
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('DATABASE'),
                }),
            }),
            users_module_1.UsersModule,
            purses_module_1.PursesModule,
            transactions_module_1.TransactionsModule,
            incomes_module_1.IncomesModule,
            expences_module_1.ExpencesModule,
            category_module_1.CategoriesModule
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map