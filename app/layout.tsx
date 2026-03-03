import type { Metadata } from "next";
import { Abril_Fatface, Poppins, Montserrat } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
    default: "RPS Reims",
    template: "%s | RPS Reims",
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
    <html lang="fr" className={`${poppins.variable} ${montserrat.variable} ${abrilFatface.className}`}>
      <head>
        <link rel="stylesheet" href="/Styles/header.css" />
        <link rel="stylesheet" href="/Styles/main.css" />
        <link rel="stylesheet" href="/Styles/footer.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Script src="/Scripts/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
