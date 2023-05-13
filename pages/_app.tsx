import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Roboto Mono, monospace",
        },
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    []
  );
  return (
    <>
      <Head>
        <title>Chris Stevenson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
