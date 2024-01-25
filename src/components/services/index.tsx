import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

const ParticleBackground = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(to left, none);
  overflow: hidden;
`;

const Services: React.FC = () => {
    return (
        <Box sx={{ position: 'relative', width: '100%', backgroundColor: 'none' }}>
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
                    {/* Seu conteúdo aqui */}
                </Box>
            </Container>
        </Box>
    );
}

export default Services;
