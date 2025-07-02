import React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Tkachev — Freelance UI/UX Designer",
  description: "Digital Versatile Designer based in Almaty (KZ). Currently available for Freelance Projects.",
  keywords: ["UI/UX Designer", "Freelance", "Digital Designer", "Portfolio", "Alex Tkachev"],
  authors: [{ name: "Alex Tkachev" }],
  creator: "Alex Tkachev",
  openGraph: {
    title: "Alex Tkachev — Freelance UI/UX Designer",
    description: "Digital Versatile Designer based in Almaty (KZ)",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Tkachev — Freelance UI/UX Designer",
    description: "Digital Versatile Designer based in Almaty (KZ)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="antialiased bg-white text-black min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
