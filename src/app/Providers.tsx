"use client";
import {
  ChakraProvider,
  defineStyle,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";

export const Button = defineStyleConfig({
  sizes: {
    xl: defineStyle({
      h: 16,
      w: 16,
    }),
  },
});

const theme = extendTheme({
  components: { Button },
  config: { initialColorMode: "system" },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
