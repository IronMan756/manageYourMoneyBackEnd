import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Controller, Get, HttpStatus, Query, Res, UseGuards, Post, Body } from "@nestjs/common";
import { PursesService } from "./purses.service";
import { Response } from "express";
import { AuthGuard } from "@nestjs/passport";
import { PursesDto } from "./purses.dto";


@ApiTags('purses')
@Controller('purses')
export class PursesController {
    public constructor(
        public pursesService: PursesService
    ) { }
    @UseGuards(AuthGuard('jwt'))
    @Get('')
    @ApiOperation({ description: 'Get purses' })
    @ApiResponse({
        description: 'Find purses success',
        status: HttpStatus.OK
    })
    @ApiResponse({
        description: "Any purses weren't found",
        status: HttpStatus.NOT_FOUND
    })
    @ApiResponse({
        description: "Server error",
        status: HttpStatus.INTERNAL_SERVER_ERROR
    })
    public async findPurses(
        @Query() query: any,
        // PursessQueryDto -- to write !!!, 
        @Res() res: Response
    ) {
        try {
            console.log('Find purse',query)
            const purse = this.pursesService.findPurse(query)
            console.log(purse)
            return res.status(HttpStatus.OK).json({
                token:purse,
                error: null,
              });
        }
        catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }


    @UseGuards(AuthGuard('jwt'))
    @Post('')
    @ApiOperation({ description: 'Create new a purse' })
    @ApiResponse({
        description: 'Create new a purse success',
        status: HttpStatus.OK
    })
    @ApiResponse({
        description: "Server error",
        status: HttpStatus.INTERNAL_SERVER_ERROR
    })
    public async createPurses(
        @Body() purse: PursesDto,
        @Res() res: Response
    ) {
        try {
            console.log('Create purse',purse)
            return this.pursesService.createPurse(purse);
        }
        catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
}