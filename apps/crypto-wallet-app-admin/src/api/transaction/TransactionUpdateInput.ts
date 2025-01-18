import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  transactionType?: "Option1" | null;
  wallet?: WalletWhereUniqueInput | null;
};
