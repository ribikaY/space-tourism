import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const barlow = localFont({
  src: "./fonts/Barlow-Regular.ttf",
  variable: "--font-barlow",
  weight: "400",
});

const barlowCondensed = localFont({
  src: "./fonts/BarlowCondensed-Regular.ttf",
  variable: "--font-barlow-condensed",
  weight: "400",
});
const bellefair = localFont({
  src: "./fonts/Bellefair-Regular.ttf",
  variable: "--font-bellefair",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
