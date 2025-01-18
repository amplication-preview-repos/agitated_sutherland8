import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { P2PListingListRelationFilter } from "../p2PListing/P2PListingListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  balance?: FloatNullableFilter;
  currency?: "Option1";
  id?: StringFilter;
  p2PListings?: P2PListingListRelationFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
