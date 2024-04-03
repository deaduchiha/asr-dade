"use client";

import Header from "@/shared/header/Header";
import { theme } from "@/theme";
import { ChakraProvider, Container } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Container maxW={"container.lg"}>
          <Header />
          {children}
        </Container>
      </ChakraProvider>
    </>
  );
}
