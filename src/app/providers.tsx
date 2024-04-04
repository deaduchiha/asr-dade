"use client";

import { createContext, useContext, useRef } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "@/theme";

import { TPageStore } from "@/types/pages";
import { createPageStore } from "@/stores/page-store";
import { StoreApi, useStore } from "zustand";

import Header from "@/shared/header/Header";

export const PageStoreContext = createContext<StoreApi<TPageStore> | null>(
  null
);

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<StoreApi<TPageStore>>();
  if (!storeRef.current) {
    storeRef.current = createPageStore();
  }

  return (
    <PageStoreContext.Provider value={storeRef.current}>
      <ChakraProvider theme={theme}>
        <Container
          h={"100svh"}
          p={0}
          maxH={"100svh"}
          overflow={"hidden"}
          maxW={"full"}
          pos={"relative"}
          bg={"#f8f9fa"}
        >
          <Header />
          {children}
        </Container>
      </ChakraProvider>
    </PageStoreContext.Provider>
  );
}

export const usePageStore = <T,>(selector: (store: TPageStore) => T): T => {
  const pageStoreContext = useContext(PageStoreContext);

  if (!pageStoreContext) {
    throw new Error(`usePageStore must be use within PageStoreProvider`);
  }

  return useStore(pageStoreContext, selector);
};
