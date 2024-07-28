import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
