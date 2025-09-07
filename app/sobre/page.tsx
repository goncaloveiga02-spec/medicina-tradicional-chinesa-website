import type { Metadata } from "next"
import SobreClientPage from "./SobreClientPage"

export const metadata: Metadata = {
  title: "Sobre Marlene Martins - Acupunturista Certificada",
  description:
    "Conheça Marlene Martins, acupunturista certificada com mais de 15 anos de experiência em medicina tradicional chinesa. Especialista em acupuntura, massagem terapêutica, reiki e hipnose em Samora Correia.",
  keywords: [
    "Marlene Martins",
    "acupunturista certificada",
    "medicina tradicional chinesa",
    "experiência",
    "qualificações",
    "Samora Correia",
    "terapeuta",
    "cédula profissional",
    "ERS",
  ],
  openGraph: {
    title: "Sobre Marlene Martins - Acupunturista Certificada",
    description: "Conheça a experiência e qualificações de Marlene Martins em medicina tradicional chinesa.",
    images: [
      {
        url: "/images/marlene-martins-about.jpg",
        width: 1200,
        height: 630,
        alt: "Marlene Martins - Acupunturista",
      },
    ],
  },
}

export default function SobrePage() {
  return <SobreClientPage />
}
