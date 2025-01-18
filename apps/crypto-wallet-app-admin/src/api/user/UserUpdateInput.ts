import { WalletUpdateManyWithoutUsersInput } from "./WalletUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  telegramId?: string | null;
  wallets?: WalletUpdateManyWithoutUsersInput;
};
