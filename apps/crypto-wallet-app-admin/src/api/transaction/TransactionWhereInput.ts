import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  transactionType?: "Option1";
  wallet?: WalletWhereUniqueInput;
};
