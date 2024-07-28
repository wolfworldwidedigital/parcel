import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const EmailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Subject" source="subject" />
        <TextField label="Body" source="body" />
        <TextField label="Sender" source="sender" />
        <TextField label="ReceivedAt" source="receivedAt" />
        <BooleanField label="Processed" source="processed" />
      </SimpleShowLayout>
    </Show>
  );
};
