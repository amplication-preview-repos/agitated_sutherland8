import { P2PListingWhereInput } from "./P2PListingWhereInput";
import { P2PListingOrderByInput } from "./P2PListingOrderByInput";

export type P2PListingFindManyArgs = {
  where?: P2PListingWhereInput;
  orderBy?: Array<P2PListingOrderByInput>;
  skip?: number;
  take?: number;
};
