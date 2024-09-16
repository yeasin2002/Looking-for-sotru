import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "@/components/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cruip",
  description: "SaSS Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container transition-all ${inter.className}`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
