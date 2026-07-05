import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import QueryProvider from "../providers/QueryProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TravelTrucks",
    template: "%s | TravelTrucks",
  },
  description: "Find and rent the perfect camper for your next adventure.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
