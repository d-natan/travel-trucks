import { FavoritesProvider } from "@/context/FavoritesContext";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import { QueryProvider } from "@/providers";

import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TravelTrucks",
    template: "%s | TravelTrucks",
  },
  description: "Camper rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <FavoritesProvider>
            <Header />

            <main>{children}</main>
          </FavoritesProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
