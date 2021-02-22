import { Module } from "@nestjs/common";
import { CoinbaseController } from "./coinbase.controller";
import { CoinbaseApiService } from "./coinbase.service";

@Module({
  controllers: [CoinbaseController],
  imports: [
    
  ],
  providers: [CoinbaseApiService],
})
export class CoinbaseApiModule {}
