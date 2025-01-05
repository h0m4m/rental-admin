import React from 'react';
import { Create, useNotify, useRedirect } from 'react-admin';
import CarForm from './CarForm';

const CarCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  return (
    <Create
      redirect="list" // Automatically redirects to the list view
      transform={(data) => ({
        ...data, // Modify or validate the data if needed
      })}
      mutationOptions={{
        onSuccess: () => {
          notify('Car created successfully', { type: 'success' });
          redirect('list', 'Car');
        },
      }}
    >
      <CarForm />
    </Create>
  );
};

export default CarCreate;
