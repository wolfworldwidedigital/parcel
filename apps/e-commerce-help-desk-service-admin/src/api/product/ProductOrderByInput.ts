import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  importSource?: SortOrder;
  imageUrl?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
};
