import { TransactionsService } from "./transactions.service";
import { TransactionsDto } from "./transactions.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from "@nestjs/swagger";
import { Controller, UseGuards, Get, HttpStatus, Query, Res, Post, Body, Delete } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response }  from "express"

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController{
    public constructor(
        public transactionsService: TransactionsService
    ){}   

    @UseGuards(AuthGuard('jwt'))
    @Get('')
    @ApiOperation({ description: 'Find transactions' })
    @ApiResponse({
        description: 'Find transactions success',
        status: HttpStatus.OK
    })
    @ApiResponse({
        description: "Any transactions weren't found",
        status: HttpStatus.NOT_FOUND
    })
    @ApiResponse({
        description: "Server error",
        status: HttpStatus.INTERNAL_SERVER_ERROR
    })
    @ApiQuery({ name: 'quary', required: false, description: 'Find transaction by some query' })
    public async findTransactions(
        @Query() quary: any,
        @Res() res: Response
    ) {
        try {
            const transactions = await this.transactionsService.find(quary)
            return res.status(HttpStatus.OK).json({
                data: transactions,
                error: null,
            });
        }
        catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }


    @UseGuards(AuthGuard('jwt'))
    @Post('')
    @ApiOperation({ description: 'Create new transaction' })
    @ApiResponse({
        description: 'Create new transaction success',
        status: HttpStatus.OK
    })
    @ApiResponse({
        description: "Server error",
        status: HttpStatus.INTERNAL_SERVER_ERROR
    })
    public async createTransaction(
        @Body() transaction: TransactionsDto,
        @Res() res: Response
    ) {
        try {
            const newTransaction = await this.transactionsService.createTransaction(transaction);
            return res.status(HttpStatus.OK).json({
                data: newTransaction,
                error: null,
            });
        }
        catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Delete('')
    @ApiOperation({ description: 'Delete the transaction' })
    @ApiResponse({
        description: 'Delete the transaction success',
        status: HttpStatus.OK
    })
    @ApiResponse({
        description: "Server error",
        status: HttpStatus.INTERNAL_SERVER_ERROR
    })
    @ApiQuery({ name: 'id', required: true, description: 'Transactionid' })
    public async deleteTransaction(
        @Query('id') transactionId: string,
        @Res() res: Response
    ) {
        try {
            await this.transactionsService.removeTransaction(transactionId);
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