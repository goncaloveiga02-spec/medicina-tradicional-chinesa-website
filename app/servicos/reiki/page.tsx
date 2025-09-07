import type { Metadata } from "next"
import { ResponsiveServiceLayout } from "@/components/responsive-service-layout"

export const metadata: Metadata = {
  title: "Reiki - Cura Energética | Marlene Martins - Samora Correia",
  description:
    "Sessões de Reiki em Samora Correia com Marlene Martins. Técnica japonesa de cura energética para equilíbrio dos chakras, redução do stress e harmonização da energia vital. Master Reiki certificada.",
  keywords: [
    "reiki Samora Correia",
    "cura energética Portugal",
    "Marlene Martins reiki master",
    "equilíbrio chakras",
    "harmonização energética",
    "reiki Portugal",
    "energia universal",
    "terapia energética",
    "bem-estar espiritual",
    "medicina alternativa",
  ],
  openGraph: {
    title: "Reiki - Cura Energética | Marlene Martins",
    description:
      "O Reiki é uma técnica japonesa de cura energética que promove o equilíbrio e harmonização dos centros energéticos, canalizando energia universal para restaurar o bem-estar.",
    images: ["/placeholder.svg?height=630&width=1200&text=Reiki+Cura+Energética+Chakras"],
    url: "https://marlenemartins-mtc.pt/servicos/reiki",
  },
  alternates: {
    canonical: "/servicos/reiki",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Reiki - Cura Energética",
  description: "Página sobre tratamentos de Reiki oferecidos por Marlene Martins",
  url: "https://marlenemartins-mtc.pt/servicos/reiki",
  mainEntity: {
    "@type": "MedicalProcedure",
    name: "Reiki",
    description:
      "Técnica japonesa de cura energética que promove o equilíbrio e harmonização dos centros energéticos através da canalização de energia universal",
    procedureType: "Energy Healing",
    bodyLocation: "Energy centers (chakras)",
    preparation: "Ambiente tranquilo e relaxante para facilitar o fluxo energético",
    followup: "Sessões regulares para manutenção do equilíbrio energético",
    howPerformed: "Imposição das mãos e canalização da energia universal",
    status: "Active",
    medicineSystem: "Complementary and Alternative Medicine",
  },
  provider: {
    "@type": "Person",
    name: "Marlene Martins",
    jobTitle: "Reiki Master",
  },
  treatedCondition: ["Stress", "Anxiety", "Energy Imbalance", "Emotional Distress", "Fatigue", "Spiritual Imbalance"],
}

export default function ReikiPage() {
  return (
    <ResponsiveServiceLayout
      title="Reiki - Cura Energética"
      subtitle="O Reiki é uma técnica japonesa de cura energética que promove o equilíbrio e harmonização dos centros energéticos, canalizando energia universal para restaurar o bem-estar físico, mental e espiritual."
      metaDescription="Sessões de Reiki em Samora Correia com Marlene Martins"
      keywords={["reiki", "cura energética", "Samora Correia"]}
      canonicalUrl="/servicos/reiki"
      heroImage="/images/zen-hero-bg.webp"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Reiki" }]}
      serviceName="Reiki"
      serviceDescription="O Reiki é uma prática de cura energética desenvolvida no Japão que trabalha com a energia vital universal (Ki) para promover o equilíbrio e a cura natural do corpo, mente e espírito."
      benefits={[
        "Equilíbrio Energético: Harmoniza os chakras e restaura o fluxo natural de energia vital",
        "Redução do Stress: Promove relaxamento profundo e reduz os níveis de stress e ansiedade",
        "Paz Interior: Desenvolve sensação de calma, serenidade e conexão espiritual",
        "Fortalecimento da Energia Vital: Aumenta a vitalidade e a capacidade natural de autocura",
        "Harmonização dos Chakras: Equilibra os centros energéticos para melhor funcionamento do organismo",
        "Bem-estar Emocional: Promove estabilidade emocional e clareza mental",
      ]}
      faqs={[
        {
          question: "O que é o Reiki e como funciona?",
          answer: "O Reiki é uma técnica japonesa de cura energética que canaliza a energia universal (Ki) através das mãos do terapeuta para harmonizar os centros energéticos do corpo. Funciona através da imposição das mãos em pontos específicos, promovendo o equilíbrio natural e a autocura."
        },
        {
          question: "O Reiki dói ou tem efeitos secundários?",
          answer: "O Reiki é uma terapia completamente não invasiva e indolor. Pode sentir sensações de calor, formigueiro ou relaxamento profundo. Raramente ocorrem efeitos secundários, podendo apenas haver uma sensação temporária de cansaço após a sessão devido ao processo de limpeza energética."
        },
        {
          question: "Quantas sessões de Reiki preciso?",
          answer: "O número de sessões varia conforme as necessidades individuais. Para questões agudas, 3-4 sessões podem ser suficientes. Para problemas crónicos ou desenvolvimento espiritual, recomenda-se um tratamento mais prolongado com sessões semanais ou quinzenais."
        },
        {
          question: "Quais são os principais benefícios do Reiki?",
          answer: "O Reiki promove relaxamento profundo, reduz stress e ansiedade, alivia dores físicas e emocionais, melhora a qualidade do sono, fortalece o sistema imunitário, equilibra os chakras e promove bem-estar geral físico, mental e espiritual."
        },
        {
          question: "Quanto custa uma sessão de Reiki?",
          answer: "As sessões de Reiki começam desde €35. O valor pode variar conforme a duração e tipo de tratamento. Oferecemos também pacotes de múltiplas sessões com desconto. Contacte-nos para mais informações sobre preços e promoções."
        },
        {
          question: "O Reiki tem contraindicações?",
          answer: "O Reiki é seguro para a maioria das pessoas, incluindo crianças e idosos. Não há contraindicações específicas, mas é importante informar sobre condições médicas graves. O Reiki complementa tratamentos médicos convencionais, nunca os substituindo."
        },
        {
          question: "O Reiki está relacionado com alguma religião?",
          answer: "Não, o Reiki é uma técnica energética universal que não está ligada a nenhuma religião específica. Pessoas de todas as crenças podem beneficiar do Reiki, pois trabalha com a energia natural do corpo e não requer fé ou crenças particulares."
        },
        {
          question: "Como me devo preparar para uma sessão de Reiki?",
          answer: "Use roupas confortáveis, evite refeições pesadas 2 horas antes, mantenha-se hidratado e venha com mente aberta. Não é necessária preparação especial - apenas disponibilidade para relaxar e receber a energia curativa."
        }
      ]}
      conditions={[
        "Stress",
        "Ansiedade",
        "Depressão",
        "Insónia",
        "Fadiga crónica",
        "Burnout",
        "Desequilíbrios energéticos",
        "Bloqueios emocionais",
        "Trauma emocional",
        "Baixa autoestima",
        "Medos",
        "Fobias",
        "Dores crónicas",
        "Problemas digestivos",
        "Dores de cabeça",
        "Tensão muscular",
        "Problemas de concentração",
        "Irritabilidade",
      ]}
      duration="45-60 minutos"
      frequency="Semanal ou quinzenal"
      pricing="Desde €35"
      aboutSection={{
        title: "Sobre o Tratamento",
        content:
          "Uma abordagem terapêutica holística que canaliza a energia vital universal (Ki) para restaurar o equilíbrio natural do seu corpo e mente. Através de técnicas suaves e não invasivas, o Reiki promove relaxamento profundo, reduz o stress e ansiedade, alivia dores físicas e emocionais, e fortalece o sistema imunitário.\n\nCada sessão é personalizada às suas necessidades específicas, proporcionando uma experiência de cura profunda que trabalha tanto a nível físico como energético, ajudando-o a reconectar-se consigo mesmo e encontrar paz interior duradoura.",
        image: "/images/reiki.webp",
      }}
      processSteps={[
        {
          step: 1,
          title: "Preparação",
          description: "Conversa inicial sobre suas necessidades e preparação do ambiente tranquilo",
        },
        {
          step: 2,
          title: "Relaxamento",
          description: "Posicionamento confortável e início do processo de relaxamento profundo",
        },
        {
          step: 3,
          title: "Canalização",
          description: "Imposição das mãos e canalização da energia universal para harmonização",
        },
        {
          step: 4,
          title: "Integração",
          description: "Momento de integração da energia e partilha da experiência vivenciada",
        },
      ]}
      qualifications={[
        {
          title: "Certificação Reiki",
          icon: "🌟",
          items: ["Reiki Master Certification", "Formação em Reiki Tradicional Japonês", "Certificação em Reiki Usui"],
        },
        {
          title: "Técnicas Energéticas",
          icon: "⚡",
          items: ["Canalização de Energia Universal", "Harmonização dos Chakras", "Limpeza Energética"],
        },
        {
          title: "Experiência Espiritual",
          icon: "🌿",
          items: [
            "Anos de prática em cura energética",
            "Desenvolvimento espiritual contínuo",
            "Abordagem holística do bem-estar",
          ],
        },
      ]}
      jsonLd={jsonLd}
    />
  )
}
