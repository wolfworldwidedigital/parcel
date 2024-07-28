import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ImportSource" source="importSource" />
        <TextInput label="ImageURL" source="imageUrl" />
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
