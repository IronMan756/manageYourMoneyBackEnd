import { IPurse, purseSchema } from "./purses.schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { PursesDto } from "./purses.dto";
import { expenceSchema } from "src/expences/expences.schema";

@Injectable()
export class PursesService {
  public constructor(
    @InjectModel("Purse") private readonly _purseModel: Model<IPurse>,
    @InjectModel("Expence") private readonly _expenceModel: Model<any>
  ) {}
  public async find(quary: any) {
    return this._purseModel
      .find(quary, { __v: 0 })
      .lean()
      .exec();
  }
  public async createPurse(purse: PursesDto) {
    const createPurse = new this._purseModel(purse);
    return createPurse.save();
  }
  // public async update(id: string, body: PursesDto): Promise<any> {
  //   try {
  //     console.log(id, body);
  //     return await this._purseModel.update(
  //       { _id: Types.ObjectId(id) },
  //       {
  //         $set: body,
  //       }
  //     );
  //   } catch (error) {
  //     console.log("error", error);
  //     return error;
  //   }
  // }
  public async removePurse(purseId: string) {
    return this._purseModel.remove({ _id: purseId });
  }
  public async migrate(collName: string) {
    let model: Model<IPurse> | undefined;
    let schema: any;

    switch (collName) {
      case "purses":
        model = this._purseModel;
        schema = purseSchema;
        break;
      case "expences":
        model = this._expenceModel;
        schema = expenceSchema;
        break;
      default:
        null;
    }
    const purses: IPurse[] | any[] = await model.find({});
    // console.log(purses);
    const som = async (i: number) => {
      const newObj = {};
      const theObject = JSON.parse(JSON.stringify(purses[i]));
      const id = theObject._id;
      // console.log(id);
      delete theObject._id;
      delete theObject.__v;
      const theObjKeys = Object.keys(theObject);

      // REMOVE ALL FIELDS  /////////////////////
      if (theObjKeys.length > 0) {
        theObjKeys.forEach(async (item) => {
          let removeObj = { $unset: {} };
          removeObj["$unset"][`${item}`] = 1;

          console.log(
            "REMOVE",
            item,
            await model.update({ _id: Types.ObjectId(id) }, removeObj)
          );
        });

        // console.log(
        // removeObj);

        // );
      }
      ///////////////////////////////////////////
      //  schema.obj.
      delete purseSchema.obj["name"];
      console.log("SCHemma 99999", purseSchema.obj["name"]);
      const keys = Object.keys(schema.obj);
      // const etalon = [];
      // for( let q = 0; q < keys.length ; q++ ){
      //   if( theObject.includes(keys[q]){
      //     etalon.push(keys[q])
      //   }
      // }
      keys.forEach((item) => {
        // console.log(item, Object.keys(theObject).includes(item));
        if (Object.keys(theObject).includes(item)) {
          newObj[item] = theObject[item] ? theObject[item] : "";
        } else {
          newObj[item] = "";
        }
      });

      // purse[i];

      //  { $unset: { 'files.approoval': 1 }

      // console.log("theObjKeys", theObjKeys);
      // console.log(purses[i]);
      await model.update(
        { _id: Types.ObjectId(id) },
        {
          $set: newObj,
        }
      );
      // console.log(
      //   "12589",
      //   await model.findById({ _id: Types.ObjectId(id) }),
      //   "id",
      //   id
      // );
    };
    for (let i = 0; i < purses.length; i++) {
      som(i);
    }

    return null;
  }
}
