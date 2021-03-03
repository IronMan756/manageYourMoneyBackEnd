import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class BlockchainWalletDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  public guid: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  public address: string;
}
