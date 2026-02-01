import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roast My Side Project – Brutally Honest AI Feedback",
  description:
    "An AI-powered tool that brutally roasts your side project like a senior developer. Mild, professional, and apocalypse modes.",
  keywords: [
    "side project roast",
    "AI project feedback",
    "developer tools",
    "Next.js AI app",
  ],
  openGraph: {
    title: "Roast My Side Project 🔥",
    description:
      "Get your side project roasted by AI like a senior developer. Apocalypse mode has no mercy.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
