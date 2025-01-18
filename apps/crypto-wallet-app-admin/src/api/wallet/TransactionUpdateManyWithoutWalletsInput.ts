import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionUpdateManyWithoutWalletsInput = {
  connect?: Array<TransactionWhereUniqueInput>;
  disconnect?: Array<TransactionWhereUniqueInput>;
  set?: Array<TransactionWhereUniqueInput>;
};
