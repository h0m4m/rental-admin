import React from 'react';
import { SimpleForm, TextInput, NumberInput } from 'react-admin';

const CarForm = (props) => (
  <SimpleForm {...props}
  sx={{
    width: '100%',
    maxWidth: '100%', // Prevent fixed width
    overflowX: 'auto', // Enable horizontal scrolling
  }}
  >
    <TextInput source="model" label="Car Model" />
    <TextInput source="make" label="Car Make" />
    <NumberInput source="year" label="Year" />
    <NumberInput source="plate_numberr" label="Plate Number" />
    <TextInput source="plate_code" label="Plate Code" />
  </SimpleForm>
);

export default CarForm;
