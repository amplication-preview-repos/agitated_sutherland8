import { P2PListingUpdateManyWithoutWalletsInput } from "./P2PListingUpdateManyWithoutWalletsInput";
import { TransactionUpdateManyWithoutWalletsInput } from "./TransactionUpdateManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletUpdateInput = {
  balance?: number | null;
  currency?: "Option1" | null;
  p2PListings?: P2PListingUpdateManyWithoutWalletsInput;
  transactions?: TransactionUpdateManyWithoutWalletsInput;
  user?: UserWhereUniqueInput | null;
};
