"use client";

import Header from "@/shared/header/Header";
import { createPageStore } from "@/stores/page-store";
import { theme } from "@/theme";
import { TPageStore } from "@/types/pages";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { createContext, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";

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
        <Container h={"100svh"} maxH={"100svh"} maxW={"container.lg"}>
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
