"use client"
import { Calendar, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FloatingContact } from "@/components/floating-contact"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { CTAButtons } from "@/components/cta-buttons"

declare global {
  interface Window {
    gtag: any
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Serviços de Medicina Tradicional Chinesa",
  description: "Página com todos os serviços oferecidos por Marlene Martins",
  url: "https://marlenemartins-mtc.pt/servicos",
  mainEntity: {
    "@type": "ItemList",
    name: "Serviços Especializados",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "MedicalProcedure",
          name: "Acupuntura",
          description:
            "Estimulação precisa de pontos energéticos através de agulhas ultrafinas, restaurando o fluxo natural de energia vital",
          url: "https://marlenemartins-mtc.pt/servicos/acupuntura",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "MedicalProcedure",
          name: "Massagem Terapêutica e Relaxamento",
          description: "Técnicas de massagem que promovem relaxamento profundo e alívio de tensões musculares",
          url: "https://marlenemartins-mtc.pt/servicos/massagem-terapeutica",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "MedicalProcedure",
          name: "Reiki",
          description: "Técnica de cura energética que promove o equilíbrio e harmonização dos centros energéticos",
          url: "https://marlenemartins-mtc.pt/servicos/reiki",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "MedicalProcedure",
          name: "Hipnose",
          description:
            "Técnica terapêutica que utiliza o estado de relaxamento profundo para promover mudanças positivas",
          url: "https://marlenemartins-mtc.pt/servicos/hipnose",
        },
      },
    ],
  },
  provider: {
    "@type": "Person",
    name: "Marlene Martins",
    jobTitle: "Acupunturista e Terapeuta",
  },
}

export default function ServicosClientPage() {
  const services = [
    {
      id: "acupuntura",
      title: "Acupuntura",
      description:
        "Técnica milenar que utiliza agulhas finas para estimular pontos específicos do corpo, restaurando o equilíbrio energético.",
      benefits: [
        "Alívio de dores crônicas",
        "Redução do stress e ansiedade",
        "Melhora da qualidade do sono",
        "Fortalecimento do sistema imunológico",
        "Tratamento de enxaquecas",
        "Equilíbrio hormonal",
      ],
      duration: "60 minutos",
      price: "Consulte valores",
      image: "/images/acupuntura01.webp",
    },
    {
      id: "massagem-terapeutica",
      title: "Massagem Terapêutica ou Relaxamento",
      description: "Técnicas de massagem que promovem relaxamento profundo e alívio de tensões musculares.",
      benefits: [
        "Relaxamento muscular profundo",
        "Melhora da circulação sanguínea",
        "Redução do stress",
        "Alívio de tensões",
        "Melhora da flexibilidade",
        "Bem-estar geral",
      ],
      duration: "60-90 minutos",
      price: "Consulte valores",
      image: "/images/massagem01.webp",
    },
    {
      id: "reiki",
      title: "Reiki",
      description: "Técnica de cura energética que promove o equilíbrio e harmonização dos centros energéticos.",
      benefits: [
        "Equilíbrio energético",
        "Redução do stress",
        "Promoção da paz interior",
        "Fortalecimento da energia vital",
        "Harmonização dos chakras",
        "Bem-estar emocional",
      ],
      duration: "45-60 minutos",
      price: "Consulte valores",
      image: "/images/reiki.webp",
    },
    {
      id: "hipnose",
      title: "Hipnose",
      description: "Técnica terapêutica que utiliza o estado de relaxamento profundo para promover mudanças positivas.",
      benefits: [
        "Controle de hábitos",
        "Redução da ansiedade",
        "Melhora da autoestima",
        "Gestão do stress",
        "Superação de medos",
        "Desenvolvimento pessoal",
      ],
      duration: "60-90 minutos",
      price: "Consulte valores",
      image: "/images/hipnose.webp",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navigation variant="overlay" />

        {/* Hero Section with Spa Wellness Background */}
        <HeroSection
          title="Serviços Especializados"
          subtitle="Descubra nossos tratamentos personalizados baseados na medicina tradicional chinesa e técnicas complementares que harmonizam corpo, mente e espírito através de terapias naturais."
          highlightWords={["Serviços"]}
          backgroundImage="/images/spa-wellness-hero.png"
          backgroundOverlay="medium"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Serviços" }]}
          primaryCTA={{
            text: "Ver Todos os Serviços",
            action: () => {
              document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth" })
            },
          }}
          secondaryCTA={{
            text: "Agendar Consulta",
            action: () => (window.location.href = "tel:+351910784945"),
          }}
          showScrollIndicator={true}
          scrollIndicatorText="Explore nossos serviços"
          variant="full"
          textAlignment="center"
        />

        {/* Services Grid */}
        <section id="services-grid" className="py-24 bg-stone-50">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16">
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="text-3xl font-light text-stone-800 mb-4">{service.title}</h3>
                    <p className="text-stone-600 mb-6 leading-relaxed text-lg">{service.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8 flex-1">
                      <div>
                        <h4 className="font-medium text-stone-800 mb-3">Benefícios:</h4>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, i) => (
                            <li key={i} className="flex items-start text-stone-600">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-stone-500">Duração:</span>
                            <p className="font-medium text-stone-800">{service.duration}</p>
                          </div>
                          <div>
                            <span className="text-sm text-stone-500">Investimento:</span>
                            <p className="font-medium text-stone-800">{service.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <Link href={`/servicos/${service.id}`} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-500 bg-transparent"
                        >
                          Saiba Mais
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white focus-visible:ring-2 focus-visible:ring-emerald-500"
                        onClick={() => {
                          if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
                            window.gtag("event", "booking_intent", {
                              event_category: "conversion",
                              event_label: `service_${service.id}`,
                            })
                          }
                          window.location.href = "tel:+351910784945"
                        }}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Agendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-stone-800 text-white">
          <div className="container mx-auto px-8 max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Pronto para começar sua <span className="text-emerald-400">jornada de cura</span>?
            </h2>
            <p className="text-xl text-stone-300 mb-8">Entre em contato para agendar sua consulta personalizada</p>
            <CTAButtons
              variant="section"
              primaryText="Agendar Consulta"
              secondaryText="(+351) 910 784 945"
              onSecondaryClick={() => (window.location.href = "tel:+351910784945")}
            />
          </div>
        </section>

        <Footer />
      </div>

      {/* Floating Contact Button */}
      <FloatingContact />
    </>
  )
}
