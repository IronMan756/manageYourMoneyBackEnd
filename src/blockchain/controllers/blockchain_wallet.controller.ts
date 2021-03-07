import { BlockchainService } from "./../blockchain.service";
import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Response } from "express";
import { BalanceWalletDto } from "../dtos/balance.dto";
import { WalletsDto } from "../dtos/wallets.dto";

@ApiTags("blockchain/wallet")
@Controller("blockchain/wallet")
export class BlockchainWalletController {
  public constructor(private readonly _blockchainService: BlockchainService) {}
  @Post("create")
  @ApiOperation({ description: "Create blockchain wallet" })
  @ApiResponse({
    description: "Create blockchain wallet success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @ApiQuery({
    required: false,
    name: "pass",
    description: "Password for blockchain accaunt ",
  })
  @ApiQuery({
    required: true,
    name: "api_code",
    description: "Unique code for blockchain application",
  })
  public async blockchainCreateWallet(
    @Res() res: Response,
    @Body() body: { pass: string; api_code: string; label: string }
  ) {
    try {
      const { pass, api_code, label } = body;
      const createdWallet = await this._blockchainService.createWallet(
        pass,
        api_code,
        label
      );
      const securedWallet = await this._blockchainService.enableHdFunctionality(
        pass,
        createdWallet.guid
      );
      const walletInDb =
        createdWallet &&
        (await this._blockchainService.createInDB(
          Object.assign(createdWallet, securedWallet)
        ));

      return res.status(HttpStatus.OK).json({ data: walletInDb, error: null });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }

  @Get("balance")
  @ApiOperation({ description: "Get blockchain wallet balance" })
  @ApiResponse({
    description: "Get blockchain wallet balance success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @ApiBody({ type: BalanceWalletDto, required: true })
  public async blockchainWalletBalance(
    @Res() res: Response,
    @Body() body: any
  ) {
    try {
      const { guid, xpub, pass, api_code } = body;
      const balance = await this._blockchainService.getBalance(
        guid,
        xpub,
        pass,
        api_code
      );
      return res.status(HttpStatus.OK).json({ data: balance, error: null });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }
  @Get("wallets")
  @ApiOperation({ description: "Get blockchain wallets" })
  @ApiResponse({
    description: "Get blockchain wallets success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @ApiBody({ type: WalletsDto, required: true })
  public async blockchainWallets(@Res() res: Response, @Body() body: any) {
    try {
      const { guid, pass, api_code, xpubs } = body;
      const wallets = await this._blockchainService.getListOfWallets(
        guid,
        pass,
        api_code,
        xpubs
      );

      return res.status(HttpStatus.OK).json({ data: wallets, error: null });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }
}
