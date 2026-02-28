import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tribecodeai.com"),
  title: {
    default: "TribeCode AI | AI Voice Agents & Business Automation Santa Cruz",
    template: "%s | TribeCode AI",
  },
  description:
    "TribeCode AI builds intelligent voice agents and automation systems for service businesses. 24/7 AI call answering, automated lead follow-up, appointment booking, and conversion-focused websites. Serving Santa Cruz, Monterey Bay, and the San Francisco Bay Area.",
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
  ],
  authors: [
    { name: "TribeCode AI", url: "https://tribecodeai.com" },
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
      "Intelligent voice agents and automation for service businesses. 24/7 AI call answering, lead qualification, and appointment booking.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TribeCode AI - Intelligent Automation Solutions",
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
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TribeCode AI",
              "description": "AI voice agents, business automation, and web development for service businesses in Santa Cruz and the Bay Area.",
              "url": "https://tribecodeai.com",
              "telephone": "+1-831-345-8935",
              "email": "info@tribecodeai.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santa Cruz",
                "addressRegion": "CA",
                "addressCountry": "US",
              },
              "areaServed": [
                { "@type": "City", "name": "Santa Cruz" },
                { "@type": "City", "name": "Monterey" },
                { "@type": "AdministrativeArea", "name": "San Francisco Bay Area" },
              ],
              "sameAs": [
                "https://linkedin.com/company/tribecode-ai",
                "https://twitter.com/tribecodeai",
                "https://instagram.com/tribecodeai",
                "https://facebook.com/tribecodeai",
                "https://github.com/tribecodeai",
              ],
              "serviceType": [
                "AI Voice Agents",
                "Business Automation",
                "Web Development",
                "AI Strategy Consulting",
              ],
              "priceRange": "$$",
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
