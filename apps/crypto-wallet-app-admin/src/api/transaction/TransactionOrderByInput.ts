import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
  walletId?: SortOrder;
};
