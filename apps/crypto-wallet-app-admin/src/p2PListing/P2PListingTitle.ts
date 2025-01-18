import { P2PListing as TP2PListing } from "../api/p2PListing/P2PListing";

export const P2PLISTING_TITLE_FIELD = "id";

export const P2PListingTitle = (record: TP2PListing): string => {
  return record.id?.toString() || String(record.id);
};
