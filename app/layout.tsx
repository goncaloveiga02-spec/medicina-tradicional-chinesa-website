import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SkipNavigation } from "@/components/skip-navigation"
import { ScrollRestoration } from "@/components/scroll-restoration"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Marlene Martins - Medicina Tradicional Chinesa | Acupuntura, Massagem, Reiki e Hipnose",
    template: "%s | Marlene Martins - Medicina Tradicional Chinesa",
  },
  description:
    "Marlene Martins oferece tratamentos de medicina tradicional chinesa em Samora Correia. Acupuntura, massagem terapêutica, reiki e hipnose com mais de 15 anos de experiência. Agende sua consulta.",
  keywords: [
    "medicina tradicional chinesa",
    "acupuntura",
    "massagem terapêutica",
    "reiki",
    "hipnose",
    "Marlene Martins",
    "Samora Correia",
    "Portugal",
    "terapias alternativas",
    "bem-estar",
    "saúde natural",
    "equilíbrio energético",
    "dor crónica",
    "stress",
    "ansiedade",
  ],
  authors: [{ name: "Marlene Martins" }],
  creator: "Marlene Martins",
  publisher: "Marlene Martins - Medicina Tradicional Chinesa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://marlenemartins-mtc.pt"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Marlene Martins - Medicina Tradicional Chinesa",
    description:
      "Tratamentos de acupuntura, massagem terapêutica, reiki e hipnose com mais de 15 anos de experiência em Samora Correia, Portugal.",
    url: "https://marlenemartins-mtc.pt",
    siteName: "Marlene Martins - Medicina Tradicional Chinesa",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marlene Martins - Medicina Tradicional Chinesa",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marlene Martins - Medicina Tradicional Chinesa",
    description: "Tratamentos de acupuntura, massagem terapêutica, reiki e hipnose em Samora Correia, Portugal.",
    images: ["/images/twitter-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Marlene Martins - Medicina Tradicional Chinesa",
  description:
    "Clínica de medicina tradicional chinesa especializada em acupuntura, massagem terapêutica, reiki e hipnose",
  url: "https://marlenemartins-mtc.pt",
  logo: "https://marlenemartins-mtc.pt/images/logo.png",
  image: "https://marlenemartins-mtc.pt/images/clinic.jpg",
  telephone: "+351910784945",
  email: "marlene.martins.mtc@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Azinhaga do brejo nº5 Esquerdo",
    addressLocality: "Samora Correia",
    postalCode: "2135-034",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.9547,
    longitude: -8.7876,
  },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"],
  priceRange: "€€",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
  currenciesAccepted: "EUR",
  founder: {
    "@type": "Person",
    name: "Marlene Martins",
    jobTitle: "Acupunturista e Terapeuta",
    description: "Acupunturista certificada com mais de 15 anos de experiência em medicina tradicional chinesa",
    image: "https://marlenemartins-mtc.pt/images/marlene-martins.jpg",
    sameAs: ["https://www.facebook.com/marlenemartinsmtc", "https://www.instagram.com/marlenemartinsmtc"],
  },
  medicalSpecialty: ["Traditional Chinese Medicine", "Acupuncture", "Therapeutic Massage", "Reiki", "Hypnotherapy"],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 38.9547,
      longitude: -8.7876,
    },
    geoRadius: "50000",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Cédula Profissional de Acupuntura",
      credentialCategory: "Professional License",
      recognizedBy: {
        "@type": "Organization",
        name: "Entidade Reguladora de Saúde",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Maria Silva",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "A Marlene não apenas tratou minha dor crônica, mas me ensinou uma nova forma de viver. Através da acupuntura e fitoterapia, descobri um equilíbrio que não sabia que era possível.",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>
        <SkipNavigation />
        <ScrollRestoration />
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
