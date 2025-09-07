import type { Metadata } from "next"
import { ResponsiveServiceLayout } from "@/components/responsive-service-layout"

import { ZenScrollAnimations } from "@/components/zen-micro-interactions"

export const metadata: Metadata = {
  title: "Acupuntura Samora Correia - Medicina Tradicional Chinesa | Marlene Martins",
  description:
    "Tratamentos de acupuntura tradicional chinesa em Samora Correia. Alívio natural para dores crónicas, stress e desequilíbrios energéticos. Consultas com terapeuta certificada.",
  keywords: [
    "acupuntura Samora Correia",
    "acupunturista certificada Samora Correia",
    "alívio dor crónica acupuntura",
    "tratamento enxaqueca acupuntura",
    "acupuntura ansiedade stress",
    "acupuntura fibromialgia",
    "medicina tradicional chinesa Portugal",
    "acupuntura preço Samora Correia",
    "Marlene Martins acupunturista",
    "acupuntura dores costas",
  ],
  openGraph: {
    title: "Acupuntura em Samora Correia | Alívio Natural da Dor",
    description:
      "Tratamentos de acupuntura tradicional chinesa com terapeuta certificada. Alívio natural para dores crónicas, stress e desequilíbrios energéticos em Samora Correia.",
    images: ["/images/acupuntura01.webp"],
    url: "https://marlenemartins-mtc.pt/servicos/acupuntura",
  },
  alternates: {
    canonical: "/servicos/acupuntura",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Acupuntura Tradicional Chinesa",
  description: "Página sobre tratamentos de acupuntura oferecidos por Marlene Martins",
  url: "https://marlenemartins-mtc.pt/servicos/acupuntura",
  mainEntity: {
    "@type": "MedicalProcedure",
    name: "Acupuntura Tradicional Chinesa",
    description:
      "Estimulação precisa de pontos energéticos através de agulhas ultrafinas para restaurar o equilíbrio energético",
    procedureType: "Traditional Chinese Medicine",
    bodyLocation: "Whole body",
    preparation: "Consulta inicial para avaliação das necessidades individuais",
    followup: "Sessões regulares conforme necessidade do paciente",
    howPerformed: "Inserção de agulhas finas em pontos específicos do corpo",
    status: "Active",
    medicineSystem: "Traditional Chinese Medicine",
  },
  provider: {
    "@type": "Person",
    name: "Marlene Martins",
    jobTitle: "Acupunturista Certificada",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Cédula Profissional de Acupuntura C-0051688",
    },
  },
  treatedCondition: ["Chronic Pain", "Stress", "Anxiety", "Insomnia", "Headaches", "Back Pain", "Arthritis"],
}



export default function AcupunturaPage() {
  return (
    <>
    <ZenScrollAnimations />
    <ResponsiveServiceLayout
      title="Acupuntura Samora Correia - Tratamento Natural de Dores Crónicas"
        subtitle="Descubra o poder milenar da acupuntura tradicional chinesa. Tratamento personalizado para alívio natural da dor, stress e desequilíbrios energéticos. Consultas com terapeuta certificada em Samora Correia."
      metaDescription="Tratamentos de acupuntura tradicional chinesa com Marlene Martins em Samora Correia"
      keywords={["acupuntura", "medicina tradicional chinesa", "Samora Correia"]}
      canonicalUrl="/servicos/acupuntura"
      heroImage="/images/zen-hero-bg.webp"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Acupuntura" }]}
      serviceName="Acupuntura"
      serviceDescription="🌿 HARMONIA E CURA NATURAL: Descubra o equilíbrio através da acupuntura tradicional chinesa. Técnica milenar que restaura o fluxo energético natural do seu corpo, promovendo cura profunda e duradoura. Experimente a serenidade de um tratamento sem dor, sem químicos, apenas pura medicina natural."
      benefits={[
        "🎋 ALÍVIO NATURAL DA DOR: Restaure o equilíbrio energético e sinta o alívio profundo das dores crónicas através de pontos de acupuntura precisos",
        "🧘 SERENIDADE MENTAL: Dissolva o stress e ansiedade, reconectando-se com a sua paz interior através da medicina tradicional chinesa",
        "⚡ VITALIDADE RENOVADA: Desperte a sua energia natural e sinta-se revigorado com o fluxo harmonioso do Qi pelo seu corpo",
        "🛡️ IMUNIDADE FORTALECIDA: Fortaleça as suas defesas naturais e promova a saúde integral através do reequilíbrio energético",
        "🌱 CURA SEM QUÍMICOS: Tratamento 100% natural que trabalha com a sabedoria do seu próprio corpo para promover a autocura",
        "💎 INVESTIMENTO NA SUA SAÚDE: Cuide de si de forma holística e sustentável, tratando as causas e não apenas os sintomas",
      ]}
      conditions={[
        "Dores nas costas",
        "Dores cervicais",
        "Artrite e artrose",
        "Fibromialgia",
        "Enxaquecas",
        "Lesões desportivas",
        "Ansiedade",
        "Depressão",
        "Stress",
        "Insónia",
        "Síndrome do pânico",
        "Burnout",
        "Irregularidades menstruais",
        "Síndrome pré-menstrual",
        "Menopausa",
        "Infertilidade",
        "Gravidez",
        "Pós-parto",
      ]}
      duration="60 minutos"
      frequency="1-2 sessões por semana"
      pricing="€40 por sessão | Pacote 5 sessões: €180 (Poupe €20!)"
      aboutSection={{
        title: "Porquê Escolher Marlene Martins?",
        content:
          "🏮 <strong>MESTRE EM MEDICINA TRADICIONAL CHINESA</strong> com Cédula Profissional C-0051688, dedicada à arte milenar da acupuntura e ao bem-estar integral dos seus pacientes.\n\n🌸 Especializada na <strong>HARMONIZAÇÃO ENERGÉTICA</strong> através de técnicas ancestrais, tratando dores crónicas, desequilíbrios emocionais e promovendo a vitalidade natural.\n\n🎯 <strong>CUIDADO PERSONALIZADO</strong>: Cada sessão é uma jornada única de cura, respeitando a sua constituição energética e necessidades individuais.\n\n🏯 <strong>SANTUÁRIO DE CURA</strong>: Espaço sagrado em Samora Correia, onde a tradição chinesa encontra o conforto moderno para a sua transformação interior.",
        image: "/images/acupuntura2.webp",
      }}
      processSteps={[
        {
          step: 1,
          title: "Preparação",
          description: "Conversa inicial sobre suas necessidades e preparação do ambiente tranquilo",
        },
        {
          step: 2,
          title: "Diagnóstico",
          description: "Avaliação energética e identificação dos pontos de acupuntura adequados",
        },
        {
          step: 3,
          title: "Tratamento",
          description: "Inserção precisa das agulhas nos pontos energéticos selecionados",
        },
        {
          step: 4,
          title: "Relaxamento",
          description: "Período de relaxamento para permitir o reequilíbrio energético",
        },
      ]}
      qualifications={[
        {
          title: "Certificações Oficiais",
          icon: "/icons/yin-yang.svg",
          items: [
            "Cédula Profissional de Acupuntura - C-0051688",
            "Licença ERS - Nº 24514",
            "Certidão ERS - Nº E172469",
          ],
        },
        {
          title: "Formação Académica",
          icon: "/icons/lotus.svg",
          items: [
            "Licenciatura em Medicina Tradicional Chinesa",
            "Especialização em Acupuntura Clínica",
            "Formação em Acupuntura Estética",
          ],
        },
        {
          title: "Experiência",
          icon: "/icons/bamboo.svg",
          items: ["Mais de 15 anos de dedicação à medicina tradicional chinesa", "Centenas de vidas transformadas através da acupuntura", "Formação contínua em técnicas ancestrais e modernas"],
        },
      ]}

      faqs={[
        {
          question: "A acupuntura dói? Tenho medo de agulhas...",
          answer: "A acupuntura é um tratamento muito suave. As agulhas são extremamente finas - mais finas que um fio de cabelo - e a maioria dos pacientes fica surpreendida com a ausência de desconforto. A sensação é como um ligeiro formigueiro, e muitos pacientes relaxam tanto que adormecem durante o tratamento. Para pessoas mais sensíveis, adaptamos a técnica para garantir máximo conforto."
        },
        {
          question: "Quantas sessões preciso? Quando vou ver resultados?",
          answer: "Cada pessoa responde de forma única à acupuntura. Muitos pacientes sentem melhoria já na primeira sessão, especialmente para dores agudas. Para condições crónicas, recomendamos normalmente entre 6 a 10 sessões para resultados duradouros. O plano de tratamento é sempre personalizado às suas necessidades específicas, e acompanhamos a sua evolução em cada consulta."
        },
        {
          question: "Quais são os benefícios da acupuntura?",
          answer: "A acupuntura oferece múltiplos benefícios: alívio eficaz de dores crónicas e agudas, redução do stress e ansiedade, melhoria da qualidade do sono, fortalecimento do sistema imunitário, regulação hormonal, melhoria da digestão e aumento dos níveis de energia. É uma terapia natural sem efeitos secundários significativos."
        },
        {
          question: "A acupuntura tem efeitos secundários?",
          answer: "A acupuntura é geralmente muito segura quando realizada por um profissional qualificado. Os efeitos secundários são raros e ligeiros, podendo incluir pequenos hematomas no local da inserção, ligeira sonolência após o tratamento ou sensação temporária de tontura. Estes efeitos desaparecem rapidamente."
        },
        {
          question: "Quanto custa? Vale mesmo a pena o investimento?",
          answer: "🌟 **OFERTA ESPECIAL**: Consultas de acupuntura por apenas €40 (valor normal €50). Pacote promocional de 5 sessões por €180 - poupe €20 e garanta um acompanhamento completo. Esta é uma oportunidade única de investir na sua saúde com desconto. A acupuntura trata as causas profundas dos problemas, proporcionando resultados duradouros e poupança a longo prazo em medicamentos."
        },
        {
          question: "Posso fazer acupuntura se estiver a tomar medicamentos?",
          answer: "Sim, a acupuntura é compatível com a maioria dos medicamentos e pode até ajudar a reduzir a dependência de alguns fármacos. No entanto, é importante informar o acupunctor sobre todos os medicamentos que está a tomar. A acupuntura pode complementar o tratamento médico convencional, mas nunca deve substituir medicação prescrita sem orientação médica."
        },
        {
          question: "Que condições podem ser tratadas com acupuntura?",
          answer: "A acupuntura é eficaz no tratamento de uma vasta gama de condições: dores musculares e articulares, enxaquecas e cefaleias, stress e ansiedade, insónia, problemas digestivos, alergias, problemas menstruais, infertilidade, depressão ligeira, e muito mais. A OMS reconhece mais de 40 condições que podem beneficiar da acupuntura."
        },
        {
          question: "Como devo preparar-me para uma sessão de acupuntura?",
          answer: "Para se preparar para uma sessão: use roupa confortável e folgada, evite refeições pesadas 2 horas antes, mantenha-se hidratado, evite álcool e cafeína em excesso, e chegue alguns minutos mais cedo para relaxar. Traga uma lista dos seus medicamentos e sintomas para discussão com o terapeuta."
        }
      ]}
      jsonLd={jsonLd}
    />

    </>
  )
}
