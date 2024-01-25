import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

const ParticleBackground = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(to left,#00384E, #00658d, #00384E);
  overflow: hidden;
`;

const FollowUp: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', backgroundColor: '#00384E' }}>
      <ParticleBackground>
      </ParticleBackground>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '60vh',
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          {/* https://api.whatsapp.com/send/?phone=41997626109&text=Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os!%20Pode%20me%20ajudar? */}
        </Box>
      </Container>
    </Box>
  );
}

export default FollowUp;
