"use client";
import "./styles/globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import Navbar from "./components/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pt">
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
