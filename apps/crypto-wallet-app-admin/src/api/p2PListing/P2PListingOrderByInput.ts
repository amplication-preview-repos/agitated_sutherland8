import { SortOrder } from "../../util/SortOrder";

export type P2PListingOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  listingType?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  walletId?: SortOrder;
};
