import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Response } from "express";

@Controller("blockchain")
export class BlockchainController {
  @Post("")
  @ApiOperation({ description: "Blockchain webhook success or error" })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  public async stripeWebhook(@Res() res: Response, @Body() body: any) {
    try {
      console.log(body);
      console.log("xvdvzkj");
      return res.status(HttpStatus.OK).json({ data: null, error: null });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }
}
