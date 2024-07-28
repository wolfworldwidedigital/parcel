import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const EmailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Subject" source="subject" />
        <TextInput label="Body" multiline source="body" />
        <TextInput label="Sender" source="sender" />
        <DateTimeInput label="ReceivedAt" source="receivedAt" />
        <BooleanInput label="Processed" source="processed" />
      </SimpleForm>
    </Create>
  );
};
