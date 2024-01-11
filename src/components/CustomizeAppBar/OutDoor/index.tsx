import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { StyledContainer, Particle } from "./styles"


const OutDoor: React.FC = () => {
  return (
    <StyledContainer>
      <Box maxWidth="511px">
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: ".1rem",
            textDecoration: "none",
            fontSize: "30px",
            color: "#FFFFFF",
            marginBottom: "15px",
          }}
        >
          TEXTO H5 que o andré quer!
        </Typography>
      </Box>
      <Box maxWidth="800px">
        <Typography
          component="label"
          sx={{
            fontWeight: "regular",
            letterSpacing: "0.4rem",
            textDecoration: "none",
            color: "#ffffff",
            fontSize: "18px",
          }}
        >
          esse texto é só um texto não tem tagamento logo se quiser me avisa que ja coloco. ta bom!
        </Typography>
      </Box>
      <div>
        <Particle />
      </div>
    </StyledContainer>
  );
};

export default OutDoor;
