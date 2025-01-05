import React from 'react';
import { Create, useNotify, useRedirect } from 'react-admin';
import ContractForm from './ContractForm';
import { transformData } from '../../../utils/transformData';

const ContractCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const transform = (data) =>
    transformData(data, {
      actual_out_date: 'date', // Transform to YYYY-MM-DD
      actual_out_time: 'time', // Transform to HH:mm:ss
    });

  return (
    <Create
      redirect="list"
      transform={transform}
      mutationOptions={{
        onSuccess: () => {
          notify('Contract created successfully', { type: 'success' });
          redirect('list', 'Contract');
        },
      }}
    >
      <ContractForm />
    </Create>
  );
};

export default ContractCreate;
