import React from 'react';
import { Box } from '@mui/material';
import TenantDetails from './recentBookingComponent/tenantDetails';
import TabComponent from './tabComponent';

const ManageTenants = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100px',
        padding: 2,
      }}
    >
      <Box
        sx={{
          marginBottom: '-10px',
          width: '100%',
          height: '280px',
          borderRadius: '10px',
        }}
      >
        <TenantDetails />
      </Box>

      <Box sx={{ mt: '32px', borderTop: '1px dashed #BEBEBE' }}>
        <TabComponent />
      </Box>
    </Box>
  );
};

export default ManageTenants;
