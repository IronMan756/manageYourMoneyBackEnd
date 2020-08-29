import { UsersService } from './users.service';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from "@nestjs/swagger";
import { Controller, Get, HttpStatus, Res, Query, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { Response } from "express";

@ApiTags("user")
@Controller("user")
export class UsersController {
  public constructor( 
      private readonly _userServise: UsersService
  ) {}
  @UseGuards(AuthGuard("jwt"))
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
  @ApiQuery({
    name: "quary",
    required: false,
    description: "Find user by some query",
  })
  public async findUser(@Query() quary: any, @Res() res: Response) {
    try {
      const user = await this._userServise.findUser(quary);
      return res.status(HttpStatus.OK).json({
        data: user,
        error: null,
      });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }
}
