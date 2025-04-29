import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import MouseTracker from "@/components/MouseTracker";
import Glow from "@/components/Glow";

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
        url: "/image.png",
        width: 1317,
        height: 471, //image.png
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
        <MouseTracker>
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 ">
            <div className="relative">
              <Glow />
              <div
                id="scroll-container"
                className="relative h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth z-30 w-full "
              >
                {children}
              </div>
            </div>
          </div>
        </MouseTracker>
      </body>
    </html>
  );
}
