
import * as React from 'react';


import Box from '@mui/material/Box';

import Container from '@mui/material/Container';

const FollowUp: React.FC = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#571894' }}>

      <Container maxWidth="lg" sx={{}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '60vh',
            backgroundImage: 'url(/assets/backgroundFollowUp.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
          }}
        >


        </Box>
      </Container>
    </Box>
  );
}

export default FollowUp;