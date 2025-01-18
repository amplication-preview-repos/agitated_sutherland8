import { WalletCreateNestedManyWithoutUsersInput } from "./WalletCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  telegramId?: string | null;
  wallets?: WalletCreateNestedManyWithoutUsersInput;
};
