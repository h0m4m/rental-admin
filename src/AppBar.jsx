import React, { useContext } from 'react';
import { AppBar } from 'react-admin';
import { Button } from '@mui/material';
import { AuthContext } from '../context/authContext';

const CustomAppBar = (props) => {
  const { signOut } = useContext(AuthContext);

  return (
    <AppBar {...props}>
      <Button
        color="inherit"
        onClick={signOut}
        style={{ marginLeft: 'auto' }}
      >
        Logout
      </Button>
    </AppBar>
  );
};

export default CustomAppBar;
