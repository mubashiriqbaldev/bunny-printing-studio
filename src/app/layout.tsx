import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";

export const metadata: Metadata = {
  title: {
    default: "Bunny Printing Studio — Premium Custom Packaging in Pakistan",
    template: "%s | Bunny Printing Studio",
  },
  description:
    "Custom packaging boxes, bags, and labels for brands across Pakistan. Free design, free shipping, 100% quality guaranteed. Request a quote today.",
  keywords: ["custom packaging Pakistan", "custom boxes Lahore", "mailer boxes", "rigid boxes", "bunny printing studio"],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://bunnyprintingstudio.com",
    siteName: "Bunny Printing Studio",
    title: "Bunny Printing Studio — Premium Custom Packaging in Pakistan",
    description: "Custom packaging boxes, bags, and labels for brands across Pakistan.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
