"use client"
import { ReactNode } from "react";
import "./globals.css";
import CustomizeAppBar from "../components/CustomizeAppBar";
import { ThemeProvider } from '@mui/material'
import { LightTheme } from "@shared/themes";
import OurServices from "../components/Avaliations";
import FollowUp from "../components/Contact";
import Clients from "../components/Clients";
import AboutUs from "../components/aboutus";
import Services from "../components/services";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Growiser | Marketing Digital</title>
        <link rel="shortcut icon" href="/assets/favicon.png" />
      </head>
      <body>
        <ThemeProvider theme={LightTheme}>
          <CustomizeAppBar />
          <OurServices />
          <Clients />
          <AboutUs />
          <Services />
          <FollowUp />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
