import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class PursesDto {
  @ApiProperty()
  public idUser!: string;
  @ApiProperty()
  public name!: string;
  @ApiPropertyOptional()
  public balance?: number;
  @ApiPropertyOptional()
  public categoryId?: string;

  public _id?: string;

//   public readonly get = () => {
//     return Object.keys(this);
//     // ["idUser", "name", "balance", "categoryId"];
//   };
}

