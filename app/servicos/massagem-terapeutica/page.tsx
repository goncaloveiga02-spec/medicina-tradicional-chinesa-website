import type { Metadata } from "next"
import { ResponsiveServiceLayout } from "@/components/responsive-service-layout"

export const metadata: Metadata = {
  title: "Massagem Terapêutica e Relaxamento | Marlene Martins - Samora Correia",
  description:
    "Massagem terapêutica e de relaxamento em Samora Correia com Marlene Martins. Alívio de tensões musculares, redução do stress e melhoria da circulação. Técnicas personalizadas para seu bem-estar.",
  keywords: [
    "massagem terapêutica Samora Correia",
    "massagem relaxamento Portugal",
    "Marlene Martins massagista",
    "alívio tensões musculares",
    "massagem stress ansiedade",
    "massagem terapêutica Portugal",
    "relaxamento profundo",
    "massagem Tui Na",
    "bem-estar corporal",
    "terapia manual",
  ],
  openGraph: {
    title: "Massagem Terapêutica e Relaxamento | Marlene Martins",
    description:
      "Experimente o poder da massagem terapêutica e de relaxamento para aliviar tensões, reduzir o estresse e promover um estado de equilíbrio e bem-estar.",
    images: ["/placeholder.svg?height=630&width=1200&text=Massagem+Terapêutica+e+Relaxamento"],
    url: "https://marlenemartins-mtc.pt/servicos/massagem-terapeutica",
  },
  alternates: {
    canonical: "/servicos/massagem-terapeutica",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Massagem Terapêutica e de Relaxamento",
  description: "Página sobre tratamentos de massagem terapêutica e relaxamento oferecidos por Marlene Martins",
  url: "https://marlenemartins-mtc.pt/servicos/massagem-terapeutica",
  mainEntity: {
    "@type": "MedicalProcedure",
    name: "Massagem Terapêutica e de Relaxamento",
    description:
      "Técnicas de massagem que promovem relaxamento profundo e alívio de tensões musculares através de métodos terapêuticos personalizados",
    procedureType: "Therapeutic Massage",
    bodyLocation: "Whole body",
    preparation: "Avaliação das necessidades individuais e áreas de tensão",
    followup: "Sessões regulares conforme necessidade do paciente",
    howPerformed: "Aplicação de técnicas manuais de massagem terapêutica e relaxamento",
    status: "Active",
    medicineSystem: "Complementary and Alternative Medicine",
  },
  provider: {
    "@type": "Person",
    name: "Marlene Martins",
    jobTitle: "Terapeuta de Massagem",
  },
  treatedCondition: ["Muscle Tension", "Stress", "Poor Circulation", "Fatigue", "Back Pain", "Neck Pain", "Anxiety"],
}

export default function MassagemTerapeuticaPage() {
  return (
    <ResponsiveServiceLayout
      title="Massagem Terapêutica e Relaxamento"
      subtitle="Experimente o poder da massagem terapêutica e de relaxamento para aliviar tensões, reduzir o estresse e promover um estado de equilíbrio e bem-estar através de técnicas personalizadas."
      metaDescription="Massagem terapêutica e de relaxamento em Samora Correia com Marlene Martins"
      keywords={["massagem terapêutica", "relaxamento", "Samora Correia"]}
      canonicalUrl="/servicos/massagem-terapeutica"
      heroImage="/images/zen-hero-bg.webp"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Serviços", href: "/servicos" },
        { label: "Massagem Terapêutica" },
      ]}
      serviceName="Massagem Terapêutica"
      serviceDescription="As nossas massagens são personalizadas para atender às suas necessidades individuais, combinando técnicas terapêuticas e relaxantes para uma experiência holística de cuidado e rejuvenescimento."
      benefits={[
        "Alívio Muscular: As nossas massagens são projetadas para aliviar dores e tensões musculares, ajudando a relaxar e revitalizar os músculos cansados e doloridos.",
        "Redução do Stress: Através de técnicas suaves e ritmadas, a nossa massagem terapêutica e de relaxamento ajuda a diminuir o stress e a ansiedade, promovendo uma sensação de calma e tranquilidade.",
        "Melhoria da Circulação: Ao estimular a circulação sanguínea, a nossa massagem contribui para a distribuição adequada de nutrientes e oxigénio pelo corpo, melhorando a saúde geral.",
        "Promoção do Equilíbrio: Combinando técnicas terapêuticas e relaxantes, a nossa massagem procura restabelecer o equilíbrio físico, mental e emocional, proporcionando uma sensação de bem-estar integral.",
        "Revitalização Energética: Através da manipulação dos pontos de energia do corpo, a nossa massagem terapêutica e de relaxamento estimula o fluxo de energia vital, revitalizando o corpo e a mente.",
        "Flexibilidade e Mobilidade: Melhora a flexibilidade articular e muscular, aumentando a amplitude de movimento e prevenindo lesões futuras.",
      ]}
      conditions={[
        "Tensões musculares",
        "Dores nas costas",
        "Dores cervicais",
        "Stress",
        "Ansiedade",
        "Fadiga",
        "Má circulação",
        "Insónia",
        "Dores de cabeça",
        "Rigidez articular",
        "Fibromialgia",
        "Lesões desportivas",
        "Síndrome do túnel cárpico",
        "Artrite",
        "Bursite",
        "Tendinite",
        "Espasmos musculares",
        "Contraturas",
      ]}
      duration="60-90 minutos"
      frequency="Semanal ou quinzenal"
      pricing="Desde €35"
      aboutSection={{
        title: "Tipos de Massagem",
        content:
          "Oferecemos dois tipos principais de massagem, cada uma adaptada às suas necessidades específicas.\n\nA Massagem Terapêutica foca no alívio de tensões específicas e tratamento de áreas problemáticas, enquanto a Massagem de Relaxamento promove um estado profundo de tranquilidade e bem-estar geral.",
        image: "/images/massage2.webp",
      }}
      processSteps={[
        {
          step: 1,
          title: "Consulta",
          description: "Avaliação das suas necessidades e áreas de tensão específicas",
        },
        {
          step: 2,
          title: "Preparação",
          description: "Preparação do ambiente e posicionamento confortável",
        },
        {
          step: 3,
          title: "Tratamento",
          description: "Aplicação de técnicas de massagem personalizadas",
        },
        {
          step: 4,
          title: "Relaxamento",
          description: "Período de integração e orientações pós-tratamento",
        },
      ]}
      qualifications={[
        {
          title: "Técnicas Especializadas",
          icon: "🤲",
          items: [
            "Massagem Terapêutica Clínica",
            "Massagem de Relaxamento Profundo",
            "Técnicas de Liberação Miofascial",
          ],
        },
        {
          title: "Formação Contínua",
          icon: "📚",
          items: [
            "Certificação em Massagem Terapêutica",
            "Formação em Anatomia e Fisiologia",
            "Workshops de Técnicas Avançadas",
          ],
        },
        {
          title: "Experiência Prática",
          icon: "💪",
          items: [
            "Anos de experiência em massagem",
            "Tratamento de diversas condições",
            "Abordagem personalizada para cada cliente",
          ],
        },
      ]}
      faqs={[
        {
          question: "A massagem terapêutica dói?",
          answer: "A massagem terapêutica não deve causar dor intensa. Pode sentir algum desconforto nas áreas mais tensas, especialmente se tiver contraturas ou pontos de tensão. A pressão é sempre ajustada às suas necessidades e tolerância. Comunique sempre ao terapeuta se sentir desconforto excessivo para que a pressão seja adequada ao seu nível de conforto."
        },
        {
          question: "Quantas sessões de massagem terapêutica preciso?",
          answer: "O número de sessões varia conforme a sua condição e objetivos. Para alívio de tensões agudas, 3-5 sessões podem ser suficientes. Para condições crónicas como dores lombares ou fibromialgia, recomenda-se um ciclo de 6-10 sessões. Para manutenção do bem-estar, sessões quinzenais ou mensais são ideais. Cada caso é avaliado individualmente."
        },
        {
          question: "Quais são os principais benefícios da massagem terapêutica?",
          answer: "A massagem terapêutica oferece múltiplos benefícios: alívio de dores musculares e articulares, redução significativa do stress e ansiedade, melhoria da circulação sanguínea e linfática, aumento da flexibilidade e mobilidade, melhoria da qualidade do sono, redução da fadiga, e promoção do bem-estar geral físico e mental."
        },
        {
          question: "Quanto tempo dura uma sessão de massagem?",
          answer: "As nossas sessões de massagem terapêutica têm duração entre 60 a 90 minutos. Sessões de 60 minutos são ideais para tratamentos focalizados, enquanto sessões de 90 minutos permitem um trabalho mais abrangente e relaxamento profundo. A duração é escolhida conforme as suas necessidades específicas e disponibilidade."
        },
        {
          question: "Qual é o preço de uma sessão de massagem terapêutica?",
          answer: "As nossas sessões de massagem terapêutica começam desde €35, variando conforme a duração e tipo de tratamento. Oferecemos também pacotes de múltiplas sessões com descontos especiais para tratamentos continuados. Contacte-nos para mais informações sobre preços e planos de tratamento personalizados."
        },
        {
          question: "Existem contraindicações para a massagem terapêutica?",
          answer: "Sim, existem algumas contraindicações: lesões agudas não avaliadas por especialista, gravidez de alto risco (sem autorização médica), veias varicosas severas, uso de anticoagulantes, osteoporose severa, feridas abertas, infeções ativas, ou estar sob influência de álcool/drogas. Sempre informamos sobre o seu estado de saúde antes da sessão."
        },
        {
          question: "Com que frequência devo fazer massagem terapêutica?",
          answer: "A frequência ideal varia conforme os seus objetivos: para tratamento de condições específicas, recomenda-se semanal ou quinzenalmente; para manutenção do bem-estar, mensalmente é suficiente; para atletas ou pessoas com stress elevado, pode ser semanal. Avaliamos juntos a frequência mais adequada ao seu caso."
        },
        {
          question: "Como me devo preparar para uma sessão de massagem?",
          answer: "Para se preparar: use roupa confortável, evite refeições pesadas 2 horas antes, mantenha-se bem hidratado, evite álcool no dia da sessão, chegue alguns minutos mais cedo para relaxar, e comunique qualquer desconforto ou condição de saúde. Após a sessão, beba bastante água e evite atividades intensas."
        }
      ]}
      jsonLd={jsonLd}
    />
  )
}
