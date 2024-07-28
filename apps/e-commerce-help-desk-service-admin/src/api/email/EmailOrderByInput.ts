import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  subject?: SortOrder;
  body?: SortOrder;
  sender?: SortOrder;
  receivedAt?: SortOrder;
  processed?: SortOrder;
};
