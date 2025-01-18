import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "telegramId";

export const UserTitle = (record: TUser): string => {
  return record.telegramId?.toString() || String(record.id);
};
