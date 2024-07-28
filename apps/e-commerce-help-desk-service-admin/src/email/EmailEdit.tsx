import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const EmailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Subject" source="subject" />
        <TextInput label="Body" multiline source="body" />
        <TextInput label="Sender" source="sender" />
        <DateTimeInput label="ReceivedAt" source="receivedAt" />
        <BooleanInput label="Processed" source="processed" />
      </SimpleForm>
    </Edit>
  );
};
