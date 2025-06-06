"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "../lib/context/ThemeProvider";
import DefaultLayout, { LayoutProvider } from "../lib/context/DefaultLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  
  

  return (
        <ThemeProvider>
          <LayoutProvider>
            <DefaultLayout>
            {children}
            </DefaultLayout>
          </LayoutProvider>
        </ThemeProvider>
  );
}