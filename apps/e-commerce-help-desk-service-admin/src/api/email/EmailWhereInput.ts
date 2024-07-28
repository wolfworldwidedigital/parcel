import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type EmailWhereInput = {
  id?: StringFilter;
  subject?: StringNullableFilter;
  body?: StringNullableFilter;
  sender?: StringNullableFilter;
  receivedAt?: DateTimeNullableFilter;
  processed?: BooleanNullableFilter;
};
