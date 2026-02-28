import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tribecodeai.com"),
  title: {
    default: "TribeCode AI | AI Voice Agents & Business Automation Santa Cruz",
    template: "%s | TribeCode AI",
  },
  description:
    "TribeCode AI builds intelligent voice agents and automation systems for service businesses. 24/7 AI call answering, automated lead follow-up, appointment booking, and conversion-focused websites. Serving Santa Cruz, Monterey Bay, and the San Francisco Bay Area. Free ROI analysis and qualification.",
  keywords: [
    "AI voice agent",
    "business automation",
    "Santa Cruz AI",
    "AI answering service",
    "voice AI California",
    "automation solutions",
    "tribecode",
    "tribecodeai",
    "AI phone system",
    "24/7 call answering",
    "lead automation",
    "appointment booking AI",
    "Monterey Bay business",
    "San Francisco AI automation",
    "small business automation",
    "AI for plumbers",
    "AI for contractors",
    "AI for salons",
    "AI for restaurants",
  ],
  authors: [
    { name: "TribeCode AI", url: "https://tribecodeai.com" },
    { name: "TribeCode", url: "https://tribecodeai.com/about" },
  ],
  creator: "TribeCode AI",
  publisher: "TribeCode AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tribecodeai.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tribecodeai.com",
    siteName: "TribeCode AI",
    title: "TribeCode AI | AI Voice Agents & Business Automation",
    description:
      "Intelligent voice agents and automation for service businesses. 24/7 AI call answering, lead qualification, and appointment booking. Free ROI analysis.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TribeCode AI - Intelligent Automation Solutions",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "TribeCode AI Logo",
        type: "image/png",
      },
    ],
    emails: ["info@tribecodeai.com"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TribeCode AI | AI Voice Agents & Automation",
    description: "Intelligent solutions that scale. 24/7 AI voice agents, business automation, and conversion-focused web experiences.",
    images: ["/og-image.png"],
    creator: "@tribecodeai",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
  applicationName: "TribeCode AI",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TribeCode AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TribeCode AI" />
      </head>
      <body className="antialiased font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
