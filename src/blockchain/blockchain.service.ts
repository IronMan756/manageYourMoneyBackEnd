import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/common/http/http.service";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BlockchainWalletDto } from "./dtos/blockchain-wallet.dto";
import { IBlockchainWallet } from "./schemas/blockchain.schema";

@Injectable()
export class BlockchainService {
  private domain = this._configService.get("DOMAIN");
  private blockchainPort = this._configService.get("BLCH_PORT");

  public constructor(
    @InjectModel("Blockchain-Wallet")
    private readonly _blockchainWalletModel: Model<IBlockchainWallet>,
    private readonly _configService: ConfigService,
    private readonly _httpService: HttpService
  ) {}

  //  BLOCKCHAIN
  public async createWallet(
    pass: string,
    api_code: string,
    label: string
  ): Promise<BlockchainWalletDto> {
    const url = `${this.domain}:${this.blockchainPort}/api/v2/create?password=${pass}&api_code=${api_code}&label=${label}`;
    const headers = {
      "Content-Type": "application/json",
    };
    const data = this._httpService.get(url, { headers });
    return await (await data.toPromise()).data;
  }

  public async enableHdFunctionality(
    pass: string,
    guid: string
  ): Promise<BlockchainWalletDto> {
    const url = `${this.domain}:${this.blockchainPort}/merchant/${guid}/enableHD?password=${pass}`;
    const headers = {
      "Content-Type": "application/json",
    };
    const data = this._httpService.get(url, { headers });
    return await (await data.toPromise()).data;
  }

  public async getBalance(
    guid: string,
    xpub: string,
    pass: string,
    api_code: string
  ): Promise<BlockchainWalletDto> {
    const url = `${this.domain}:${this.blockchainPort}/merchant/${guid}/accounts/${xpub}/balance?password=${pass}&api_code=${api_code}`;
    const headers = {
      "Content-Type": "application/json",
    };
    const data = this._httpService.get(url, { headers });
    return await (await data.toPromise()).data;
  }
  public async getListOfWallets(
    guid: string,
    pass: string,
    api_code: string,
    xpubs: string
  ): Promise<BlockchainWalletDto> {
    const url = `${this.domain}:${this.blockchainPort}/merchant/${guid}/accounts/${xpubs}?password=${pass}&api_code=${api_code}`;
    const headers = {
      "Content-Type": "application/json",
    };
    const data = this._httpService.get(url, { headers });
    return await (await data.toPromise()).data;
  }
  //  DATABASE

  public async createInDB(criptoWallet: BlockchainWalletDto): Promise<any> {
    const createdCriptoWallet = new this._blockchainWalletModel(criptoWallet);
    return createdCriptoWallet.save();
  }
}
