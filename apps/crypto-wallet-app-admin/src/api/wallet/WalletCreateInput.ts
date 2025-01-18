import { P2PListingCreateNestedManyWithoutWalletsInput } from "./P2PListingCreateNestedManyWithoutWalletsInput";
import { TransactionCreateNestedManyWithoutWalletsInput } from "./TransactionCreateNestedManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  balance?: number | null;
  currency?: "Option1" | null;
  p2PListings?: P2PListingCreateNestedManyWithoutWalletsInput;
  transactions?: TransactionCreateNestedManyWithoutWalletsInput;
  user?: UserWhereUniqueInput | null;
};
