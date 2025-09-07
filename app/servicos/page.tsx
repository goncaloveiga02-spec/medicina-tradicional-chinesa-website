import type { Metadata } from "next"
import ServicosClientPage from "./ServicosClientPage"

export const metadata: Metadata = {
  title: "Serviços de Medicina Tradicional Chinesa | Marlene Martins - Samora Correia",
  description:
    "Descubra os serviços especializados de Marlene Martins: Acupuntura, Massagem Terapêutica, Reiki e Hipnose. Tratamentos personalizados de medicina tradicional chinesa em Samora Correia.",
  keywords: [
    "serviços medicina tradicional chinesa",
    "acupuntura Samora Correia",
    "massagem terapêutica Portugal",
    "reiki cura energética",
    "hipnose terapêutica",
    "Marlene Martins serviços",
    "tratamentos holísticos",
    "terapias alternativas Portugal",
    "bem-estar natural",
    "medicina complementar",
  ],
  openGraph: {
    title: "Serviços Especializados | Marlene Martins",
    description:
      "Técnicas milenares cuidadosamente adaptadas para as necessidades contemporâneas. Acupuntura, Massagem Terapêutica, Reiki e Hipnose.",
    images: ["/placeholder.svg?height=630&width=1200&text=Serviços+Medicina+Tradicional+Chinesa"],
    url: "https://marlenemartins-mtc.pt/servicos",
  },
  alternates: {
    canonical: "/servicos",
  },
}

export default function ServicosPage() {
  return <ServicosClientPage />
}
