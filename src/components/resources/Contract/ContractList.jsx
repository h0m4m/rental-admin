import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  ReferenceField,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  useRecordContext,
} from 'react-admin';
import { supabaseClient } from '../../../supabaseClient';

// Custom Field for Total Charge
const TotalChargeField = () => {
  const record = useRecordContext();
  const [carStatus, setCarStatus] = React.useState(null);

  React.useEffect(() => {
    const fetchCarStatus = async () => {
      const { data } = await supabaseClient
        .from('car')
        .select('status')
        .eq('id', record.car)
        .single();
      setCarStatus(data?.status || null);
    };
    fetchCarStatus();
  }, [record.car]);

  if (!record) return null;

  const totalCharge = record.rent_charge + record.fine_charge + 
                      (carStatus === 'bad' ? 10 : 0);

  return <span>{totalCharge}</span>;
};


const ContractFilters = [
  <TextInput label="Contract Number" source="number" key="number" />,
  <TextInput label="Customer Name" source="customer_name" key="customer_name" />,
  <DateInput label="Out Date" source="actual_out_date" key="actual_out_date" />,
  <ReferenceInput label="Car" source="car" reference="car" key="car">
    <SelectInput optionText={(record) => `${record.make} ${record.model} (${record.year})`} />
  </ReferenceInput>,
];

const ContractList = () => (
  <List
    filters={ContractFilters}
    sx={{
      width: '100%',
      overflowX: 'auto', // Enable horizontal scrolling
    }}
  >
    <Datagrid
      rowClick="edit"
      sx={{
        width: '100%', // Full width of the screen
        minWidth: '800px', // Ensure table doesn't collapse too much
      }}
    >
      <TextField source="number" label="Contract Number" />
      <TextField source="customer_name" label="Customer Name" />
      <DateField source="actual_out_date" label="Out Date" />
      <ReferenceField source="car" reference="car" label="Car">
        <TextField source="make" /> <TextField source="model" /> (<TextField source="year" />)
      </ReferenceField>
      <NumberField source="rent_charge" label="Rent Charge" />
      <NumberField source="fine_charge" label="Fine Charge" />
      {/* Computed Field */}
      <TotalChargeField label="Total Charge" />
    </Datagrid>
  </List>
);

export default ContractList;
