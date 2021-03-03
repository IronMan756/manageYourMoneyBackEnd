import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class WalletsDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  public guid: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  public pass: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  public api_code: string;
}
