import { ConfigService } from '@nestjs/config';
import { UserDto } from './../users/users.dto';
import { Controller, Post, HttpStatus, Body, Res, UseGuards, Get } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Response } from "express";
import { AuthGuard } from "@nestjs/passport";
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  public constructor(
    public userService: UsersService,
    public configService: ConfigService
  ) {}
  @Post("sign-in")
  @ApiOperation({ description: "Login to system" })
  @ApiResponse({
    description: "Log in success ",
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: "Wrong credentials",
    status: HttpStatus.UNAUTHORIZED
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR
  })
  public async signin(
    @Body() query: UserDto,
    //   LoginDto
    @Res() res: Response
  ) {
    try {
      console.log('sign-up success, all info about user: jwt token',query);
      return res.status(HttpStatus.OK).json({
        data:`Sign In, body:${JSON.stringify(query)}`,
        error: null,
      });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }
//   @UseGuards(AuthGuard('jwt'))
  @Post("sign-up")
  @ApiOperation({ description: "Sign up" })
  @ApiResponse({
    description: "Sign up success",
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: "Server error",
    status: HttpStatus.INTERNAL_SERVER_ERROR
  })
  //   @UseInterceptors(FileInterceptor('avatar'))
  public async signUp(
    @Body() user: UserDto,
    // SignUpDto
    @Res() res: Response
    // @UploadedFile() avatar: Buffer,
  ): Promise<Response> {
    try {
        const { email } = user;
        const userInDB = await this.userService.findUser( email );  
        if( userInDB ) {
          return res.status(HttpStatus.CONFLICT).json({
            data: null,
            error: 'This email already exists'
          });
        }

        const numberTypeSalt = Number(this.configService.get('SALT') as number);
        const salt = await bcrypt.genSalt(numberTypeSalt)

        return res.status(HttpStatus.OK).json({
            // data: accessToken,
            data:`Sign Up, body:${JSON.stringify(userInDB)}`,
            error: null,
          });
        
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }
}

