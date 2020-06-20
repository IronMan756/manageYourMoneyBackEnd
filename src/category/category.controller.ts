import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from "@nestjs/swagger";
import { Controller, UseGuards, Get, HttpStatus, Query, Res, Post, Body, Delete } from "@nestjs/common";
import { Response } from 'express';
import { AuthGuard } from "@nestjs/passport";
import { CategoriesService } from "./category.service";
import { CategoriesDto } from "./category.dto";

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
    public constructor(
        public categoriesService: CategoriesService
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('')
    @ApiOperation({ description: 'Find categories' })
    @ApiResponse({
        description: 'Find categories success',
        status: HttpStatus.OK
    })
    @ApiResponse({
        description: "Any categories weren't found",
        status: HttpStatus.NOT_FOUND
    })
    @ApiResponse({
        description: "Server error",
        status: HttpStatus.INTERNAL_SERVER_ERROR
    })
    @ApiQuery({ name: 'quary', required: false, description: 'Find categoriy by some query' })
    public async findCategories(
        @Query() quary: any,
        @Res() res: Response
    ) {
        try {
            const incomes = await this.categoriesService.find(quary)
            return res.status(HttpStatus.OK).json({
                data: incomes,
                error: null,
            });
        }
        catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }


    @UseGuards(AuthGuard('jwt'))
    @Post('')
    @ApiOperation({ description: 'Create new category' })
    @ApiResponse({
        description: 'Create new category success',
        status: HttpStatus.OK
    })
    @ApiResponse({
        description: "Server error",
        status: HttpStatus.INTERNAL_SERVER_ERROR
    })
    public async createCategory(
        @Body() category: CategoriesDto,
        @Res() res: Response
    ) {
        try {
            const newCategory = await this.categoriesService.createCategory(category);
            return res.status(HttpStatus.OK).json({
                data: newCategory,
                error: null,
            });
        }
        catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('')
    @ApiOperation({ description: 'Delete the category' })
    @ApiResponse({
        description: 'Delete the category success',
        status: HttpStatus.OK
    })
    @ApiResponse({
        description: "Server error",
        status: HttpStatus.INTERNAL_SERVER_ERROR
    })
    @ApiQuery({ name: 'id', required: true, description: 'Category id' })
    public async deleteCategory(
        @Query('id') categoryId: string,
        @Res() res: Response
    ) {
        try {
            await this.categoriesService.removeCategory(categoryId);
            return res.status(HttpStatus.OK).json({
                data: true,
                error: null,
            });
        }
        catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
}