
import type { Metadata } from "next";

import { ReactNode } from "react";
import "./globals.css";
import CustomizeAppBar from "../components/CustomizeAppBar";
import { ThemeProvider } from '@mui/material'
import { LightTheme } from "@shared/themes";



export const metadata: Metadata = {
  title: 'Web',
  description: 'Web',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={LightTheme}>
          <CustomizeAppBar />
          {children}
        </ThemeProvider>
      </body>
    </html >
  )
}