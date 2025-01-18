import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type P2PListingUpdateInput = {
  amount?: number | null;
  listingType?: "Option1" | null;
  price?: number | null;
  status?: "Option1" | null;
  wallet?: WalletWhereUniqueInput | null;
};
