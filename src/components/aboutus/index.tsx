import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Image from 'next/image'
import { styled } from '@mui/system';

const ParticleBackground = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(to left,#00384E);
  overflow: hidden;
`;

const AboutUs: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', backgroundColor: '#00384E' }}>
      <ParticleBackground>
      </ParticleBackground>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '70vh',
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        ><Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            color: "#E1E5E5",
            fontWeight: 600,
            letterSpacing: ".1rem",
            textDecoration: "none",
            fontSize: "30px",
            paddingTop: "15px",
            // marginBottom: "-20vh"
          }}
        >
            Sobre nós:
          </Typography>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              color: "#E1E5E5",
              fontWeight: 500,
              letterSpacing: ".1rem",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Há 12 anos, a GROWISER começou sua jornada no mundo do marketing digital. Desde então, nossa missão tem sido simples: impulsionar o crescimento de nossos clientes. Com estratégias inovadoras e uma equipe apaixonada, transformamos desafios em oportunidades. Junte-se a nós e alcance novos patamares de sucesso!
          </Typography>
          <div style={{
            display: 'flex',
            width: "100%",
            height: "200px",
            justifyContent: "flex-end",
            color: "#E1E5E5",
            fontWeight: 600,
            fontSize: "20px",
            fontFamily: "Space Grotesk,Poppins,Roboto,sans-serif",
            alignItems: "center",
            marginBottom: "30px",
          }}>
            <div style={{
              display: 'flex',
              marginRight: "20px",
              justifyContent: "flex-end",
              width: "700px",
              flexWrap: "wrap",
              height: "55px"
            }}>
              <div>André H.Leandro Bueno</div>
              <div>Especialista em Marketing Digital | CEO & Fundador da Growiser</div>
            </div>
            <div>
              <Image
                src="/assets/Andréprofile.jpeg"
                style={{
                  borderRadius: "100px",
                }}
                width={200}
                height={200}
                alt="Andréprofile"
              />
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutUs;
