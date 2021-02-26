"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const purses_schema_1 = require("./purses.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const expences_schema_1 = require("../expences/expences.schema");
let PursesService = class PursesService {
    constructor(_purseModel, _expenceModel) {
        this._purseModel = _purseModel;
        this._expenceModel = _expenceModel;
    }
    async find(quary) {
        return this._purseModel
            .find(quary, { __v: 0 })
            .lean()
            .exec();
    }
    async createPurse(purse) {
        const createPurse = new this._purseModel(purse);
        return createPurse.save();
    }
    async removePurse(purseId) {
        return this._purseModel.remove({ _id: purseId });
    }
    async migrate(collName) {
        let model;
        let schema;
        switch (collName) {
            case "purses":
                model = this._purseModel;
                schema = purses_schema_1.purseSchema;
                break;
            case "expences":
                model = this._expenceModel;
                schema = expences_schema_1.expenceSchema;
                break;
            default:
                null;
        }
        const purses = await model.find({});
        const som = async (i) => {
            const newObj = {};
            const theObject = JSON.parse(JSON.stringify(purses[i]));
            const id = theObject._id;
            delete theObject._id;
            delete theObject.__v;
            const theObjKeys = Object.keys(theObject);
            if (theObjKeys.length > 0) {
                theObjKeys.forEach(async (item) => {
                    let removeObj = { $unset: {} };
                    removeObj["$unset"][`${item}`] = 1;
                    console.log("REMOVE", item, await model.update({ _id: mongoose_2.Types.ObjectId(id) }, removeObj));
                });
            }
            delete purses_schema_1.purseSchema.obj["name"];
            console.log("SCHemma 99999", purses_schema_1.purseSchema.obj["name"]);
            const keys = Object.keys(schema.obj);
            keys.forEach((item) => {
                if (Object.keys(theObject).includes(item)) {
                    newObj[item] = theObject[item] ? theObject[item] : "";
                }
                else {
                    newObj[item] = "";
                }
            });
            await model.update({ _id: mongoose_2.Types.ObjectId(id) }, {
                $set: newObj,
            });
        };
        for (let i = 0; i < purses.length; i++) {
            som(i);
        }
        return null;
    }
};
PursesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Purse")),
    __param(1, mongoose_1.InjectModel("Expence")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], PursesService);
exports.PursesService = PursesService;
//# sourceMappingURL=purses.service.js.map