import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ImportSource" source="importSource" />
        <TextInput label="ImageURL" source="imageUrl" />
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
