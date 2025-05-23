import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <Heading>LOGO</Heading>
    </Container>

    <Container>
      <Heading>MENU</Heading>
    </Container>
  </StrictMode>
);
