import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import MouseTracker from "@/components/MouseTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastian Patrici Gil | Full Stack Developer",
  description:
    "Full Stack Developer based in Germany specializing in modern web technologies and solutions.",
  keywords: [
    "developer",
    "full stack",
    "web development",
    "Germany",
    "React",
    "NextJS",
  ],
  openGraph: {
    title: "Sebastian Patrici Gil | Full Stack Developer",
    description:
      "Full Stack Developer based in Germany specializing in modern web technologies and solutions.",
    url: "https://patrici.de",
    siteName: "Sebastian Patrici Gil",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sebastian Patrici Gil",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MouseTracker>{children}</MouseTracker>
      </body>
    </html>
  );
}
