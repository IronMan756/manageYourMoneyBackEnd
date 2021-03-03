import { HttpModule, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BlockchainService } from "./blockchain.service";
import { BlockchainWalletController } from "./controllers/blockchain_wallet.controller";
import { BlockchainWebhookController } from "./controllers/blockchain_webhook.controller";
import { bclockchainWalletSchema } from "./schemas/blockchain.schema";

@Module({
  controllers: [BlockchainWebhookController, BlockchainWalletController],
  imports: [
    MongooseModule.forFeature([
      { name: "Blockchain-Wallet", schema: bclockchainWalletSchema },
    ]),
    HttpModule,
  ],
  providers: [BlockchainService],
})
export class BlockchainModule {}
