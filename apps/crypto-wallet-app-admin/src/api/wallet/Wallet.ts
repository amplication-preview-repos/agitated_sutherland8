import { P2PListing } from "../p2PListing/P2PListing";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Wallet = {
  balance: number | null;
  createdAt: Date;
  currency?: "Option1" | null;
  id: string;
  p2PListings?: Array<P2PListing>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
