import React from 'react';
import { SimpleForm, TextInput, DateInput, TimeInput, ReferenceInput, SelectInput } from 'react-admin';

// Format time for display in TimeInput
const formatTime = (value) => {
  console.log('Formatting Time:', value);
  if (!value) return '';
  if (value.length === 8) return value; // Already in HH:mm:ss format
  return new Date(value).toISOString().slice(11, 19); // Convert ISO string to HH:mm:ss
};

const parseTime = (value) => {
  console.log('Parsing Time:', value);
  if (!value) return null;
  const [hours, minutes, seconds] = value.split(':');
  if (!hours || !minutes) return null;
  return `${hours}:${minutes}:${seconds || '00'}`;
};


const ContractForm = (props) => (
  <SimpleForm {...props}>
    <TextInput source="number" label="Contract Number" />
    <TextInput source="customer_name" label="Customer Name" />
    <DateInput source="actual_out_date" label="Actual Out Date" />
    <TimeInput
      source="actual_out_time"
      label="Actual Out Time"
      format={formatTime}
      parse={parseTime}
    />
    <ReferenceInput source="car" reference="car" label="Car">
      <SelectInput optionText={(record) => `${record.make} ${record.model} (${record.year})`} />
    </ReferenceInput>
    <TextInput source="rent_charge" label="Rent Charge" />
    <TextInput source="fine_charge" label="Fine Charge" />
  </SimpleForm>
);

export default ContractForm;
