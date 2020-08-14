import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class TransactionsDto {
    @ApiProperty()
    public userId!: string;
    @ApiProperty()
    public purseIdTo!: string;
    @ApiProperty()
    public purseIdFrom!: string;
    @ApiProperty()
    public incomeId!: string;
    @ApiProperty()
    public expenceId!: string;
    @ApiProperty()
    public suma!: number;
    @ApiProperty()
    public data: Date;
    @ApiProperty()
    public name!: string;
    @ApiPropertyOptional()
    public description: string;
    @ApiPropertyOptional()
    public categoryId: string;

    public _id?: string;
}