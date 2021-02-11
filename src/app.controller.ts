import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Response } from "express";

@Controller()
export class AppController {
  constructor() {}
  @Get("")
  @ApiOperation({ description: "Find user" })
  @ApiResponse({
    description: "Find user success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Any user weren't found",
    status: HttpStatus.NOT_FOUND,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  public async findUser(@Res() res: Response) {
    try {
      return res.status(HttpStatus.OK).json({
        // data: [user],
        data: "It is succceeesss!!!! Ura!!!!!",
        error: null,
      });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }
}
