import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import { QueryProvider } from "@/providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TravelTrucks",

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
          <Header />

          <main>{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
