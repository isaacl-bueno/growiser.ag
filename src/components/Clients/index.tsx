import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';
import Typography from "@mui/material/Typography";

const ParticleBackground = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: #ECEEEE;
  
  color:#ffffff;
  overflow: hidden;
`;

const Clients: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', backgroundColor: '#00384E' }}>
      <ParticleBackground>

      </ParticleBackground>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, marginTop: '15px'}}>
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
          <Box
            width="100%"
            height="100%"
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundSize: "contain",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
          ><Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              color: "#00384E",
              fontWeight: 600,
              letterSpacing: ".1rem",
              textDecoration: "none",
              fontSize: "30px",
              paddingTop: "15px",
              borderTop: "2px solid #00384E",
            }}
          >
              Alguns dos nossos clientes:
            </Typography></Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Clients;
