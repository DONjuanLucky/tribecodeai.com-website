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
  metadataBase: new URL("https://tribecodeai.com"),
  title: {
    default: "TribeCode AI | Intelligent Automation Solutions",
    template: "%s | TribeCode AI",
  },
  description:
    "Santa Cruz-based AI automation company. We build intelligent voice agents, business automation, and conversion-focused web experiences. Free qualification & ROI analysis.",
  keywords: [
    "AI voice agent",
    "business automation",
    "Santa Cruz",
    "AI consulting",
    "voice AI",
    "automation solutions",
    "tribecode",
    "tribecodeai",
  ],
  authors: [{ name: "TribeCode AI", url: "https://tribecodeai.com" }],
  creator: "TribeCode AI",
  publisher: "TribeCode AI",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tribecodeai.com",
    siteName: "TribeCode AI",
    title: "TribeCode AI | Intelligent Solutions",
    description: "AI voice agents, automation, and web experiences for modern businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TribeCode AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TribeCode AI",
    description: "Intelligent solutions that scale.",
    images: ["/og-image.png"],
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
