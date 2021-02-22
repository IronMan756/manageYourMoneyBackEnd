import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Response } from "express";

@Controller("coinbase")
export class CoinbaseController {
  @Get("")
  @ApiOperation({ description: "Find categories" })
  @ApiResponse({
    description: "Find categories success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Any categories weren't found",
    status: HttpStatus.NOT_FOUND,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  public async findCategories(@Res() res: Response) {
    try {
      return res.status(HttpStatus.OK).json({
        data: null,
        error: null,
      });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }
}
