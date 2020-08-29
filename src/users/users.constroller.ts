import { UsersService } from "./users.service";
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from "@nestjs/swagger";
import { Controller, Get, HttpStatus, Res, Query } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { Response } from "express";

@ApiTags("user")
@Controller("user")
export class UsersController {
  public constructor(private readonly _userServise: UsersService) {}
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
      const { email, pass: password } = quary;
      const user = await this._userServise.findUser(email);

      if (!user || (user && !(await bcrypt.compare(password, user.password)))) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
          data: null,
          error: "Invalid email and/or password",
        });
      }
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
