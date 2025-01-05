import React from 'react';
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom'; // Import Route from react-router-dom


import dataProvider from './components/providers/dataProvider';
import authProvider from './components/providers/authProvider';

import LoginPage from './components/auth/LoginPage';
import SignUpPage from './components/auth/SignupPage';

import theme from './theme';  

import CarCreate from './components/resources/Car/CarCreate';
import CarEdit from './components/resources/Car/CarEdit';
import ContractCreate from './components/resources/Contract/ContractCreate';
import ContractEdit from './components/resources/Contract/ContractEdit';
import ContractList from './components/resources/Contract/ContractList';
import CarList from './components/resources/Car/CarList';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AssignmentIcon from '@mui/icons-material/Assignment';

const App = () => (
  <Admin 
  theme={theme} 
  dataProvider={dataProvider}
  authProvider={authProvider}
  loginPage={LoginPage} // Use custom login page
  requireAuth
  // Pass the authProvider here
  >
        <CustomRoutes noLayout>
      <Route path="/signup" element={<SignUpPage />} /> {/* Signup page */}
    </CustomRoutes>
    <Resource
      name="car"
      list={CarList}
      create={CarCreate}
      edit={CarEdit}
      icon={DirectionsCarIcon}
    />
    <Resource
      name="contract"
      list={ContractList}
      create={ContractCreate}
      edit={ContractEdit}
      icon={AssignmentIcon}
    />
  </Admin>
);

export default App;
