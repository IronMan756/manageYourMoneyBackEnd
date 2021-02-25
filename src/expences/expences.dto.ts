import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ExpencesDto {
  @ApiProperty()
  public userId!: string;
  @ApiProperty()
  public purseId!: string;
  @ApiProperty()
  public suma!: number;
  @ApiProperty()
  public data: number;
  @ApiProperty()
  public name: string;
  @ApiPropertyOptional()
  public description: string;

  public _id?: string;
}
