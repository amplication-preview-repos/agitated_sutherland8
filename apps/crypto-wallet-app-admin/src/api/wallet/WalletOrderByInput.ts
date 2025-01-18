import { SortOrder } from "../../util/SortOrder";

export type WalletOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
