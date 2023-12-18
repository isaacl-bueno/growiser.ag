import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const OutDoor: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
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
      >
        <Box maxWidth="511px">
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
            Software feito pra você e sua empresa.
          </Typography>
        </Box>
        <Box maxWidth="500px">
          <Typography
            component="label"
            sx={{
              fontWeight: "regular",
              letterSpacing: "0.4rem",
              textDecoration: "none",
              color: "#000000",
              fontSize: "18px",
            }}
          >
            Descubra o software perfeito para você. Personalizado sob medida
            para atender às suas necessidades. Experimente agora!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default OutDoor;
