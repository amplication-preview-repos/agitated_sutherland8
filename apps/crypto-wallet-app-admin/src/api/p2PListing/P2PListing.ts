import { Wallet } from "../wallet/Wallet";

export type P2PListing = {
  amount: number | null;
  createdAt: Date;
  id: string;
  listingType?: "Option1" | null;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
  wallet?: Wallet | null;
};
