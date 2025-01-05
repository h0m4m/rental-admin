import React from 'react';
import { List, Datagrid, TextField, NumberField, TextInput } from 'react-admin';

const CarFilters = [
  <TextInput label="Make" source="make" />,
  <TextInput label="Model" source="model" />,
  <NumberField label="Year" source="year" />,
  <TextInput label="Plate Number" source="plate_numberr" />,
];

const CarList = () => (
  <List filters={CarFilters}
  sx={{
    width: '100%',
    overflowX: 'auto', // Enable horizontal scrolling
  }}>
    <Datagrid rowClick="edit"
              sx={{
                width: '100%', // Full width of the screen
                minWidth: '800px', // Ensure table doesn't collapse too much
              }}
              >
      <TextField source="make" label="Make" />
      <TextField source="model" label="Model" />
      <NumberField source="year" label="Year" />
      <TextField source="plate_numberr" label="Plate Number" />
      <TextField source="plate_code" label="Plate Code" />
    </Datagrid>
  </List>
);

export default CarList;
