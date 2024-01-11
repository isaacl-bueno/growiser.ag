import styled from "@emotion/styled";
import Container from "@mui/material/Container";

export const StyledContainer = styled(Container)`
    z-index:4;
`;

export const Particle = styled.div`
  position: absolute;
  margin-top: 300px;
  width: 100%;
  height: 3px; 
  z-index: 3;
  background-color: #daa520;
  opacity: 0;
  animation: particleAnimation 5s linear infinite;

  @keyframes particleAnimation {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    10% {
      opacity: 0.7;
      transform: translateX(0);
    }
    90% {
      opacity: 0.7;
    }
    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;