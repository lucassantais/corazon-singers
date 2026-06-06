import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Les Corazon Singers | Chorale du Collège Clos Jouvin – Jarrie",
  description:
    "Les Corazon Singers sont une chorale de collégiens du Collège Clos Jouvin à Jarrie. Chant, danse, théâtre et comédie musicale depuis 2005. Spectacles vivants d'exception en Isère.",
  keywords:
    "Corazon Singers, chorale, collège Clos Jouvin, Jarrie, Isère, spectacle vivant, comédie musicale, jeunes artistes, chant, danse, théâtre",
  openGraph: {
    title: "Les Corazon Singers | Chorale artistique – Jarrie, Isère",
    description:
      "Chorale de collégiens alliant chant, danse et théâtre depuis 2005. Des spectacles vibrants qui touchent le cœur.",
    url: "https://corazonsingers.com",
    siteName: "Les Corazon Singers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Les Corazon Singers",
    description:
      "Chorale artistique de collégiens à Jarrie – spectacles vivants d'exception",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://corazonsingers.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Nunito:wght@300;400;600;700;800;900&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain bg-stage-dark text-white overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
