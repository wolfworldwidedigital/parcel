import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ImportSource" source="importSource" />
        <TextField label="ImageURL" source="imageUrl" />
        <TextField label="Title" source="title" />
        <TextField label="Description" source="description" />
      </SimpleShowLayout>
    </Show>
  );
};
