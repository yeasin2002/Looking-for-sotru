import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "@/components/client";
import { Noice } from "@/components/shared";
import { hindSiliguriFont } from "@/fonts";

export const metadata: Metadata = {
  title: "লুৎফুজ্জামান বাবর",
  description:
    "লুৎফুজ্জামান বাবর (জন্ম: ১০ অক্টোবর ১৯৫৮) একজন বাংলাদেশি রাজনীতিবিদ। তিনি খালেদা জিয়ার মন্ত্রীসভায় নেত্রকোণা-৪ আসনের সংসদ সদস্য ও স্বরাষ্ট্র প্রতিমন্ত্রী ছিলেন ১০ অক্টোবর ২০০১ থেকে ২৯ অক্টোবর ২০০৬ পর্যন্ত।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`scroll-smooth transition-all ${hindSiliguriFont.className}`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
