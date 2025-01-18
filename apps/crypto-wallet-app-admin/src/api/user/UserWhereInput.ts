import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  telegramId?: StringNullableFilter;
  wallets?: WalletListRelationFilter;
};
