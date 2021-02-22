import { Injectable } from "@nestjs/common";
// import { CoinbaseService } from "nestjs-coinbase";

@Injectable()
export class CoinbaseApiService {
  public constructor() // private readonly _coinbaseServise: CoinbaseService
  //     @InjectModel('Category') private readonly _categoryModel: Model<any>
  {}

  public async coinbase() {
    // return this._coinbaseServise.createCharge()
  }
}
