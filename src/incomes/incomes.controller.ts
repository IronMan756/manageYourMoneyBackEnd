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
import { IncomesService } from "./incomes.service";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { IncomesDto } from "./incomes.dto";

@ApiTags("incomes")
@Controller("incomes")
export class IncomesController {
  public constructor(public incomesService: IncomesService) {}

  @UseGuards(AuthGuard("jwt"))
  @Get("")
  @ApiOperation({ description: "Find incomes" })
  @ApiResponse({
    description: "Find incomes success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Any incomes weren't found",
    status: HttpStatus.NOT_FOUND,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @ApiQuery({
    name: "quary",
    required: false,
    description: "Find income by some query",
  })
  public async findIncomes(@Query() quary: any, @Res() res: Response) {
    try {
      const incomes = await this.incomesService.find(quary);
      return res.status(HttpStatus.OK).json({
        data: incomes,
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
  @ApiOperation({ description: "Create new income" })
  @ApiResponse({
    description: "Create new income success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  public async createPurses(@Body() income: IncomesDto, @Res() res: Response) {
    try {
      const newIncome = await this.incomesService.createIncome(income);
      return res.status(HttpStatus.OK).json({
        data: newIncome,
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
  @ApiOperation({ description: "Delete the income" })
  @ApiResponse({
    description: "Delete the income success",
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @ApiQuery({ name: "id", required: true, description: "Income id" })
  public async deletePurses(
    @Query("id") incomeId: string,
    @Res() res: Response
  ) {
    try {
      await this.incomesService.removeIncome(incomeId);
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
