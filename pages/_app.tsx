import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Roboto Mono, monospace",
        },
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
