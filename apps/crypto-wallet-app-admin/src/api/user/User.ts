import { Wallet } from "../wallet/Wallet";

export type User = {
  createdAt: Date;
  id: string;
  telegramId: string | null;
  updatedAt: Date;
  wallets?: Array<Wallet>;
};
