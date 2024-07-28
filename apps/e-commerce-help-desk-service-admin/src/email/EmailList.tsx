import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const EmailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Emails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Subject" source="subject" />
        <TextField label="Body" source="body" />
        <TextField label="Sender" source="sender" />
        <TextField label="ReceivedAt" source="receivedAt" />
        <BooleanField label="Processed" source="processed" />
      </Datagrid>
    </List>
  );
};
