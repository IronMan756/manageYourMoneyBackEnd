import * as mongoose from "mongoose";
export const bclockchainWalletSchema: mongoose.Schema = new mongoose.Schema({
  guid: {
    required: false,
    type: String,
    unique: false,
  },
  address: {
    required: false,
    type: String,
    unique: false,
  },
  label: {
    required: false,
    type: String,
    unique: false,
  },
  index: {
    required: false,
    type: Number,
    unique: false,
  },
  archived: {
    required: false,
    type: Boolean,
    unique: false,
  },
  extendedPublicKey: {
    required: false,
    type: String,
    unique: false,
  },
  extendedPrivateKey: {
    required: false,
    type: String,
    unique: false,
  },
  receiveIndex: {
    required: false,
    type: Number,
    unique: false,
  },
  lastUsedReceiveIndex: {
    required: false,
    type: Number,
    unique: false,
    default: 0,
  },
  receiveAddress: {
    required: false,
    type: String,
    unique: false,
  },
  balance: {
    required: false,
    type: Number,
    unique: false,
    default: 0,
  },
});
export type BlockchainWallet = {
  balance: number;
  receiveAddress: string;
  lastUsedReceiveIndex: number | null;
  receiveIndex: number;
  extendedPrivateKey: string;
  extendedPublicKey: string;
  archived: boolean;
  index: number;
  label: string;
  guid: string;
  address: string;
};

export interface IBlockchainWallet
  extends mongoose.Document,
    BlockchainWallet {}
