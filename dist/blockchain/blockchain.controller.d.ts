import { Response } from "express";
export declare class BlockchainController {
    stripeWebhook(res: Response, body: any): Promise<Response<any>>;
}
