import { Controller, Post, HttpStatus, Body, Res, UseGuards } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Response } from "express";
import { AuthGuard } from "@nestjs/passport";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  public constructor() {}
  @Post("signin")
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
    @Body() query: any,
    //   LoginDto
    @Res() res: Response
  ) {
    try {
      console.log(query);
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
  @Post("signup")
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
    @Body() user: any,
    // SignUpDto
    @Res() res: Response
    // @UploadedFile() avatar: Buffer,
  ): Promise<Response> {
    try {
        console.log('Sign Up, body:',user)
        return res.status(HttpStatus.OK).json({
            // data: accessToken,
            data:`Sign Up, body:${JSON.stringify(user)}`,
            error: null,
          });
        
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ data: null, error });
    }
  }
}

// Example:
// @Post('signin')
// @ApiOperation({ description: 'Login to system' })
// @ApiResponse({
//     description: 'You have successfully logged in',
//     status: HttpStatus.OK,
// })
// @ApiResponse({
//     description: 'Wrong credentials',
//     status: HttpStatus.UNAUTHORIZED,
// })
// @ApiResponse({
//     description: 'Server error',
//     status: HttpStatus.INTERNAL_SERVER_ERROR,
// })
// public async signin(@Body() query: any
// //   LoginDto
// , @Res() res: Response) {
//     try {
// }  catch (error) {
//     return res
//       .status(HttpStatus.INTERNAL_SERVER_ERROR)
//       .json({ data: null, error });
//   }
