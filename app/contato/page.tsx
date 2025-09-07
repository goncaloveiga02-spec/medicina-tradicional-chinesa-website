import type { Metadata } from "next"
import ContatoClientPage from "./ContatoClientPage"

export const metadata: Metadata = {
  title: "Contacto | Marlene Martins - Medicina Tradicional Chinesa",
  description:
    "Entre em contacto com Marlene Martins para agendar sua consulta de medicina tradicional chinesa em Samora Correia. Telefone, email, morada e horários de funcionamento.",
  keywords: [
    "contacto Marlene Martins",
    "agendar consulta acupuntura",
    "telefone Samora Correia",
    "medicina tradicional chinesa contacto",
    "marcar consulta",
    "horários funcionamento",
    "morada consultório",
  ],
  openGraph: {
    title: "Contacto | Marlene Martins",
    description: "Entre em contacto para agendar sua consulta de medicina tradicional chinesa",
    url: "https://marlenemartins-mtc.pt/contato",
  },
}

export default function ContatoPage() {
  return <ContatoClientPage />
}
