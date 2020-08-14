import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from "@nestjs/swagger";
import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  UseGuards,
  Post,
  Body,
  Delete,
} from "@nestjs/common";
import { PursesService } from "./purses.service";
import { Response } from "express";
import { AuthGuard } from "@nestjs/passport";
import { PursesDto } from "./purses.dto";

@ApiTags("purses")
@Controller("purses")
export class PursesController {
  public constructor(public pursesService: PursesService) {}
  @UseGuards(AuthGuard("jwt"))
  @Get("")
  @ApiOperation({ description: "Get purses" })
  @ApiResponse({
    description: "Find purses success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Any purses weren't found",
    status: HttpStatus.NOT_FOUND,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @ApiQuery({
    name: "quary",
    required: false,
    description: "Find purse by some query",
  })
  public async findPurses(@Query() quary: any, @Res() res: Response) {
    try {
      const purse = await this.pursesService.find(quary);
      return res.status(HttpStatus.OK).json({
        data: purse,
        error: null,
      });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("")
  @ApiOperation({ description: "Create new a purse" })
  @ApiResponse({
    description: "Create new a purse success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  public async createPurses(@Body() purse: PursesDto, @Res() res: Response) {
    try {
      const newPurse = await this.pursesService.createPurse(purse);
      return res.status(HttpStatus.OK).json({
        data: newPurse,
        error: null,
      });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }

  @UseGuards(AuthGuard("jwt"))
  @Delete("")
  @ApiOperation({ description: "Delete the purse" })
  @ApiResponse({
    description: "Delete the purse success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @ApiQuery({ name: "id", required: true, description: "Purse id" })
  public async deletePurses(
    @Query("id") purseId: string,
    @Res() res: Response
  ) {
    try {
      await this.pursesService.removePurse(purseId);
      return res.status(HttpStatus.OK).json({
        data: true,
        error: null,
      });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }
}
