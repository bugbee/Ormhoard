import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "@/components/layout/Navigation";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ormhoard - Fantasy World & RPG Tools",
  description: "Explore the world of Ormhoard with worldbuilding content and RPG tool generators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 min-h-screen`}
      >
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
