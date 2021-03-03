import { Test, TestingModule } from '@nestjs/testing';
import { BlockchainWebhookController } from "./controllers/blockchain_webhook.controller";

describe('Blockchain Controller', () => {
  let controller: BlockchainWebhookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlockchainWebhookController],
    }).compile();

    controller = module.get<BlockchainWebhookController>(
      BlockchainWebhookController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
