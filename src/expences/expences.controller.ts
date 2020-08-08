import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from "@nestjs/swagger";
import {
  Controller,
  UseGuards,
  Get,
  HttpStatus,
  Query,
  Res,
  Post,
  Body,
  Delete,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { IncomesDto } from "src/incomes/incomes.dto";
import { ExpencesService } from "./expences.service";
import { Response } from "express";
import { ExpencesDto } from "./expences.dto";

@ApiTags("expences")
@Controller("expences")
export class ExpencesController {
  public constructor(public expencesService: ExpencesService) {}

  @UseGuards(AuthGuard("jwt"))
  @Get("")
  @ApiOperation({ description: "Find expences" })
  @ApiResponse({
    description: "Find expences success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Any expences weren't found",
    status: HttpStatus.NOT_FOUND,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @ApiQuery({
    name: "quary",
    required: false,
    description: "Find expence by some query",
  })
  public async findExpences(@Query() quary: any, @Res() res: Response) {
    try {
      const expences = await this.expencesService.find(quary);
      console.log(expences);
      return res.status(HttpStatus.OK).json({
        data: expences,
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
  @ApiOperation({ description: "Create new expence" })
  @ApiResponse({
    description: "Create new expence success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  public async createExpences(
    @Body() expence: ExpencesDto,
    @Res() res: Response
  ) {
    try {
      const newExpence = await this.expencesService.createExpence(expence);
      return res.status(HttpStatus.OK).json({
        data: newExpence,
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
  @ApiOperation({ description: "Delete the expence" })
  @ApiResponse({
    description: "Delete the expence success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @ApiQuery({ name: "id", required: true, description: "Expence id" })
  public async deleteExpence(
    @Query("id") expenceId: string,
    @Res() res: Response
  ) {
    try {
      await this.expencesService.removeExpence(expenceId);
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
