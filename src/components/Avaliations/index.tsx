import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

const OurServices: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "80px 0",
        }}
      >
        <Box
          width="100%"
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
            fontWeight: 700,
            letterSpacing: ".1rem",
            textDecoration: "none",
            fontSize: "30px",
            marginBottom: "5px"
          }}
        >
            Alexandre aleatório
          </Typography>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              color: "#00384E",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
              fontSize: "18px",
              marginBottom: "15px"
            }}
          >
            consultor irrelevante
          </Typography>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              color: "#00384E",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
              fontSize: "18px",
              marginBottom: "px"
            }}
          >
            A GROWISER conseguiu fazer com que eu tivesse sucesso nos meus negócios que eu não sou capaz de fazer.
          </Typography></Box>
        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                color: "#00384E",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                fontSize: "30px",
                marginBottom: "5px"
              }}
            >
              Alexandre aleatório
            </Typography>
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                color: "#00384E",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                fontSize: "18px",
                marginBottom: "15px"
              }}
            >
              consultor irrelevante
            </Typography>
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                color: "#00384E",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                fontSize: "18px",
                marginBottom: "px"
              }}
            >
              A GROWISER conseguiu fazer com que eu tivesse sucesso nos meus negócios que eu não sou capaz de fazer.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OurServices;
