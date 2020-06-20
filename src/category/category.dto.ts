import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CategoriesDto {
    @ApiProperty()
    public name: string;
    @ApiPropertyOptional()
    public description: string;
    @ApiPropertyOptional()
    public img: string 

    public _id?: string;
}
