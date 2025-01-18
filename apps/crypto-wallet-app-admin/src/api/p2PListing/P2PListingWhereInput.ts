import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type P2PListingWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  listingType?: "Option1";
  price?: FloatNullableFilter;
  status?: "Option1";
  wallet?: WalletWhereUniqueInput;
};
