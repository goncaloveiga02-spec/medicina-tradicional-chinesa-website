import type { Metadata } from "next"
import { ResponsiveServiceLayout } from "@/components/responsive-service-layout"

export const metadata: Metadata = {
  title: "Hipnose Clínica em Samora Correia | Pare de Fumar em 1 Sessão | Marlene Martins",
  description:
    "🚭 Pare de fumar GARANTIDO em 1 sessão ✅ Hipnose certificada ✅ Elimine fobias e ansiedade ✅ 15+ anos experiência ✅ Primeira consulta €50 ✅ Ligue: 910 784 945",
  keywords: [
    "hipnose clínica Samora Correia",
    "hipnoterapia Portugal",
    "Marlene Martins hipnoterapeuta",
    "tratamento ansiedade hipnose",
    "controlo peso hipnose",
    "cessação tabágica hipnose",
    "hipnose fobias medos",
    "hipnose stress",
    "hipnoterapia clínica",
  ],
  openGraph: {
    title: "Hipnose Clínica | Marlene Martins",
    description:
      "Transforme a sua mente e liberte o seu potencial através da hipnose clínica. Tratamento eficaz para ansiedade, stress, fobias e muito mais.",
    images: ["/placeholder.svg?height=630&width=1200&text=Hipnose+Clínica+Transformação+Mental"],
    url: "https://marlenemartins-mtc.pt/servicos/hipnose",
  },
  alternates: {
    canonical: "/servicos/hipnose",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Hipnose Clínica",
  description: "Página sobre tratamentos de hipnose clínica oferecidos por Marlene Martins",
  url: "https://marlenemartins-mtc.pt/servicos/hipnose",
  mainEntity: {
    "@type": "MedicalProcedure",
    name: "Hipnose Clínica",
    description:
      "Técnica terapêutica que utiliza o estado de relaxamento profundo para aceder ao subconsciente e promover mudanças positivas",
    procedureType: "Clinical Hypnotherapy",
    bodyLocation: "Mind and consciousness",
    preparation: "Consulta inicial para avaliação dos objetivos e histórico pessoal",
    followup: "Sessões regulares conforme necessidade do paciente",
    howPerformed: "Indução hipnótica seguida de trabalho terapêutico no subconsciente",
    status: "Active",
    medicineSystem: "Complementary and Alternative Medicine",
  },
  provider: {
    "@type": "Person",
    name: "Marlene Martins",
    jobTitle: "Hipnoterapeuta Clínica",
  },
  treatedCondition: [
    "Anxiety Disorders",
    "Stress",
    "Phobias",
    "Weight Management",
    "Smoking Cessation",
    "Sleep Disorders",
    "Chronic Pain",
    "Depression",
  ],
}

export default function HipnosePage() {
  return (
    <ResponsiveServiceLayout
      title="Hipnose Clínica"
      subtitle="Transforme a sua mente e liberte o seu potencial através da hipnose clínica. Descubra uma ferramenta poderosa para superar limitações mentais, medos e comportamentos indesejados."
      metaDescription="Hipnose clínica em Samora Correia com Marlene Martins"
      keywords={["hipnose clínica", "hipnoterapia", "Samora Correia"]}
      canonicalUrl="/servicos/hipnose"
      heroImage="/images/zen-hero-bg.webp"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Serviços", href: "/servicos" },
        { label: "Hipnose Clínica" },
      ]}
      faqs={[
        {
          question: "O que é a hipnose clínica e como funciona?",
          answer: "A hipnose clínica é uma técnica terapêutica que utiliza o estado natural de relaxamento profundo para aceder ao subconsciente. Durante a sessão, permanece consciente e receptivo a sugestões positivas que promovem mudanças comportamentais e emocionais duradouras."
        },
        {
          question: "Vou estar consciente durante a hipnose?",
          answer: "Sim, permanecerá sempre consciente e no controlo durante toda a sessão. A hipnose não é sono nem perda de consciência. Pode ouvir tudo, falar se necessário e interromper a sessão a qualquer momento. É um estado de relaxamento focado onde mantém total controlo."
        },
        {
          question: "Quantas sessões de hipnose preciso?",
          answer: "O número de sessões varia conforme o objetivo e complexidade da questão. Para hábitos simples como cessação tabágica, podem ser suficientes 2-4 sessões. Para questões mais complexas como ansiedade ou fobias, recomenda-se 6-10 sessões para resultados duradouros."
        },
        {
          question: "A hipnose tem efeitos secundários?",
          answer: "A hipnose clínica é segura e não tem efeitos secundários negativos quando praticada por profissionais qualificados. Pode sentir relaxamento profundo e bem-estar após a sessão. Raramente, algumas pessoas podem sentir sonolência temporária."
        },
        {
          question: "Quanto custa uma sessão de hipnose?",
          answer: "As sessões de hipnose clínica começam desde €60. O valor pode variar conforme a duração e complexidade do tratamento. Oferecemos pacotes de múltiplas sessões com desconto. Contacte-nos para informações detalhadas sobre preços."
        },
        {
          question: "Toda a gente pode ser hipnotizada?",
          answer: "A maioria das pessoas pode beneficiar da hipnose, mas a suscetibilidade varia. Pessoas com mente aberta, capacidade de concentração e motivação para mudança respondem melhor. Condições como psicose ativa ou demência severa podem ser contraindicações."
        },
        {
          question: "A hipnose funciona para deixar de fumar?",
          answer: "Sim, a hipnose é altamente eficaz para cessação tabágica, com taxas de sucesso entre 60-80%. Trabalha as motivações subconscientes do vício, reduz a ansiedade associada e reforça a motivação para uma vida sem tabaco."
        },
        {
          question: "Como me devo preparar para uma sessão de hipnose?",
          answer: "Use roupas confortáveis, evite álcool e cafeína em excesso, tenha uma refeição ligeira 2 horas antes, e venha com mente aberta e objetivos claros. É importante estar descansado e ter expectativas realistas sobre o processo."
        }
      ]}
      serviceName="Hipnose Clínica"
      serviceDescription="A hipnose clínica é uma técnica terapêutica cientificamente validada que utiliza o estado natural de relaxamento profundo para aceder ao subconsciente e promover mudanças positivas duradouras na sua vida."
      benefits={[
        "Redução da Ansiedade: A hipnose clínica diminui significativamente os níveis de ansiedade e stress, promovendo um estado de calma e tranquilidade duradouro.",
        "Controlo de Peso: Desenvolve uma relação saudável com a alimentação, ajudando a superar compulsões alimentares e a manter um peso equilibrado.",
        "Cessação Tabágica: Método altamente eficaz para deixar de fumar definitivamente, trabalhando as motivações profundas do subconsciente.",
        "Superação de Fobias: Tratamento eficaz de medos irracionais e fobias específicas, libertando-o de limitações que afetam a sua qualidade de vida.",
        "Melhoria do Sono: Promove um sono mais reparador e tranquilo, ajudando a superar a insónia e outros distúrbios do sono.",
        "Fortalecimento da Autoestima: Desenvolve a confiança pessoal e autoestima, capacitando-o para enfrentar desafios com maior segurança.",
      ]}
      conditions={[
        "Ansiedade generalizada",
        "Ataques de pânico",
        "Stress crónico",
        "Insónia",
        "Depressão leve",
        "Fobias específicas",
        "Medo de falar em público",
        "Vícios e dependências",
        "Compulsões alimentares",
        "Tabagismo",
        "Baixa autoestima",
        "Traumas emocionais",
        "Dores crónicas",
        "Enxaquecas",
        "Problemas de concentração",
        "Procrastinação",
        "Bloqueios criativos",
        "Preparação para exames",
      ]}
      duration="60-90 minutos"
      frequency="Semanal ou quinzenal"
      pricing="Desde €60"
      aboutSection={{
        title: "O Poder da Hipnose Clínica",
        content:
          "A hipnose clínica é uma das ferramentas terapêuticas mais eficazes para promover mudanças profundas e duradouras. Ao contrário de mitos populares, a hipnose é um estado natural de relaxamento onde mantém sempre o controlo.\n\nDurante uma sessão, você permanece consciente e receptivo a sugestões positivas que o ajudam a aceder aos recursos internos para superar desafios e alcançar objetivos. A hipnose clínica é cientificamente validada e reconhecida como método eficaz para diversas condições.",
        image: "/images/hipnose.webp",
      }}
      processSteps={[
        {
          step: 1,
          title: "Consulta",
          description: "Avaliação detalhada dos seus objetivos e histórico para personalizar o tratamento",
        },
        {
          step: 2,
          title: "Indução",
          description: "Relaxamento progressivo que o conduz a um estado hipnótico natural e seguro",
        },
        {
          step: 3,
          title: "Terapia",
          description: "Aplicação de técnicas específicas para trabalhar questões no subconsciente",
        },
        {
          step: 4,
          title: "Integração",
          description: "Retorno gradual com integração das mudanças positivas realizadas",
        },
      ]}
      qualifications={[
        {
          title: "Certificações em Hipnose",
          icon: "🧠",
          items: ["Certificação em Hipnose Clínica", "Formação em Hipnoterapia Ericksoniana", "Especialização em PNL"],
        },
        {
          title: "Experiência Clínica",
          icon: "⭐",
          items: [
            "8+ anos de prática em hipnose clínica",
            "Centenas de casos de sucesso",
            "Especialização em ansiedade e fobias",
          ],
        },
        {
          title: "Formação Contínua",
          icon: "📚",
          items: ["Participação em congressos de hipnose", "Formação em novas técnicas", "Supervisão clínica regular"],
        },
      ]}
      jsonLd={jsonLd}
    />
  )
}
