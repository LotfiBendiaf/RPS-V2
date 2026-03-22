import type { Metadata } from "next";
import { Poppins, Montserrat, Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "RPS",
    template: "%s | RPS",
  },
  description:
    "Située en coeur de Reims, RPS Entreprise met son professionnalisme et son dynamisme à votre service pour la prise en charge de vos travaux de rénovation immobilière pour les particuliers et les professionnels",
  openGraph: {
    siteName: "RPS",
    type: "website",
    url: "https://rps-reims.com/",
    title: "RPS : Renovation Peinture Service, Entreprise de bâtiment spécialisée dans la construction et la renovation",
    description:
      "Située en coeur de Reims, RPS Entreprise met son professionnalisme et son dynamisme à votre service pour la prise en charge de vos travaux de rénovation immobilière pour les particuliers et les professionnels",
    images: [{ url: "https://rps-reims.com/Images/og_image.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={cn(poppins.variable, montserrat.variable, "font-sans", geist.variable)}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
