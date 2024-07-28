import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  importSource?: StringNullableFilter;
  imageUrl?: StringNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
};
