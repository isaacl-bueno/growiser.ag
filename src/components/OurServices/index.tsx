import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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
            justifyContent: "space-evenly",
            height: "40vh",
            backgroundImage: "url(/assets/background.png)",
            backgroundSize: "contain",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
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
              color="primary"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                fontSize: "30px",
              }}
            >
              Consulte com um de nossos profissionais sobre as possibilidades
              para o seu negócio agora mesmo!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OurServices;
