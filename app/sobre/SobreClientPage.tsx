"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingContact } from "@/components/floating-contact"
import { HeroSection } from "@/components/hero-section"
import { OptimizedImage } from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CTAButtons } from "@/components/cta-buttons"
import {
  Star,
  CheckCircle,
  Sparkles,
  Heart,
  Shield,
  Award,
  Users,
  Quote,
  Calendar,
  ArrowRight,
  Target,
  BookOpen,
  Stethoscope,
} from "lucide-react"
import { AcupunctureIcon, MassageIcon, ReikiIcon, HypnosisIcon } from "@/components/service-icons"
import Link from "next/link"

declare global {
  interface Window {
    gtag: any
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre Marlene Martins",
  description: "Página sobre Marlene Martins, acupunturista certificada especialista em medicina tradicional chinesa",
  url: "https://marlenemartins-mtc.pt/sobre",
  mainEntity: {
    "@type": "Person",
    name: "Marlene Martins",
    jobTitle: "Acupunturista e Terapeuta de Medicina Tradicional Chinesa",
    description: "Especialista em medicina tradicional chinesa com mais de 15 anos de experiência",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Cédula Profissional de Acupuntura",
        credentialCategory: "Professional License",
        identifier: "C-0051688",
      },
    ],
    worksFor: {
      "@type": "MedicalBusiness",
      name: "Marlene Martins - Medicina Tradicional Chinesa",
    },
  },
}

export default function SobreClientPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activePhilosophy, setActivePhilosophy] = useState(0)

  const testimonials = [
    {
      name: "Maria Silva",
      age: 45,
      location: "Samora Correia",
      service: "Acupuntura",
      text: "A Marlene não apenas tratou minha dor crônica, mas me ensinou uma nova forma de viver. Através da acupuntura e fitoterapia, descobri um equilíbrio que não sabia que era possível.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=MS",
    },
    {
      name: "João Santos",
      age: 38,
      location: "Benavente",
      service: "Massagem + Reiki",
      text: "Profissional excecional! O ambiente é muito acolhedor e sinto-me sempre renovado após cada sessão. A combinação de massagem e reiki transformou completamente meu bem-estar.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=JS",
    },
    {
      name: "Ana Costa",
      age: 32,
      location: "Santarém",
      service: "Hipnose Clínica",
      text: "Estava muito stressada com o trabalho. A hipnose clínica ajudou-me a encontrar paz interior e desenvolver ferramentas para gerir melhor o stress diário.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=AC",
    },
  ]

  const qualifications = [
    {
      title: "Certificações Oficiais",
      icon: <Award className="h-6 w-6" />,
      color: "from-emerald-500 to-emerald-600",
      items: [
        "Cédula Profissional de Acupuntura - C-0051688",
        "Licença ERS - Nº 24514",
        "Certidão ERS - Nº E172469",
        "Membro da Associação Portuguesa de Acupuntura",
      ],
    },
    {
      title: "Formação Especializada",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600",
      items: [
        "Licenciatura em Medicina Tradicional Chinesa",
        "Especialização em Acupuntura Clínica",
        "Certificação em Reiki Master Usui",
        "Formação em Hipnose Clínica Ericksoniana",
      ],
    },
    {
      title: "Experiência Clínica",
      icon: <Stethoscope className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
      items: [
        "15+ anos de prática clínica",
        "500+ pacientes tratados com sucesso",
        "Formação contínua em técnicas avançadas",
        "Participação em congressos internacionais",
      ],
    },
  ]

  const philosophyPrinciples = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cuidado Personalizado",
      description: "Cada pessoa é única e merece um tratamento adaptado às suas necessidades específicas.",
      details:
        "Desenvolvo planos terapêuticos individualizados, considerando não apenas os sintomas, mas toda a história pessoal, estilo de vida e objetivos de cada paciente.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ambiente Seguro",
      description: "Proporciono um espaço acolhedor onde se pode sentir completamente à vontade.",
      details:
        "O consultório foi pensado para transmitir tranquilidade e confiança, criando um ambiente propício à cura e ao relaxamento profundo.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Abordagem Holística",
      description: "Trato a pessoa como um todo, não apenas os sintomas isolados.",
      details:
        "Combino diferentes terapias para abordar aspectos físicos, emocionais e energéticos, promovendo um bem-estar integral e duradouro.",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excelência Contínua",
      description: "Comprometo-me com a formação contínua e as melhores práticas terapêuticas.",
      details:
        "Mantenho-me sempre atualizada com as últimas descobertas e técnicas, participando regularmente em formações e congressos da área.",
    },
  ]

  const services = [
    {
      name: "Acupuntura",
      description: "Técnica milenar para equilíbrio energético e alívio de dores",
      href: "/servicos/acupuntura",
      icon: <AcupunctureIcon className="w-8 h-8 text-emerald-600" />,
      benefits: ["Alívio de dores", "Redução do stress", "Equilíbrio energético"],
    },
    {
      name: "Massagem Terapêutica",
      description: "Alívio de tensões e relaxamento profundo",
      href: "/servicos/massagem-terapeutica",
      icon: <MassageIcon className="w-8 h-8 text-emerald-600" />,
      benefits: ["Relaxamento muscular", "Melhoria da circulação", "Bem-estar geral"],
    },
    {
      name: "Reiki",
      description: "Cura energética e harmonização dos chakras",
      href: "/servicos/reiki",
      icon: <ReikiIcon className="w-8 h-8 text-emerald-600" />,
      benefits: ["Equilíbrio energético", "Paz interior", "Harmonização"],
    },
    {
      name: "Hipnose Clínica",
      description: "Transformação mental e superação de limitações",
      href: "/servicos/hipnose",
      icon: <HypnosisIcon className="w-8 h-8 text-emerald-600" />,
      benefits: ["Controlo de hábitos", "Redução da ansiedade", "Autoestima"],
    },
  ]

  const achievements = [
    { icon: <Users className="h-6 w-6" />, number: "500+", label: "Pacientes Tratados" },
    { icon: <Calendar className="h-6 w-6" />, number: "15+", label: "Anos de Experiência" },
    { icon: <Award className="h-6 w-6" />, number: "4", label: "Especialidades" },
    { icon: <Star className="h-6 w-6" />, number: "4.9", label: "Avaliação Média" },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Auto-rotate philosophy
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhilosophy((prev) => (prev + 1) % philosophyPrinciples.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [philosophyPrinciples.length])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navigation variant="overlay" />

        {/* Hero Section with Floral Background */}
        <HeroSection
          title="Marlene Martins"
          subtitle="Especialista em Medicina Tradicional Chinesa com mais de 15 anos de experiência, dedicada a promover o seu bem-estar através de terapias naturais e holísticas que harmonizam corpo, mente e espírito."
          highlightWords={["Marlene"]}
          backgroundImage="/images/cherry-blossoms-hero.png"
          backgroundOverlay="light"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sobre" }]}
          primaryCTA={{
            text: "Agendar Consulta",
            action: () => {
              if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
                window.gtag("event", "booking_intent", {
                  event_category: "conversion",
                  event_label: "hero_sobre",
                })
              }
              const message = encodeURIComponent(
                "Olá Marlene! Gostaria de conhecer melhor os seus serviços e agendar uma consulta.",
              )
              window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
            },
          }}
          secondaryCTA={{
            text: "Ver Serviços",
            action: () => (window.location.href = "/servicos"),
          }}
          showScrollIndicator={true}
          scrollIndicatorText="Conheça a minha jornada"
          variant="full"
          textAlignment="center"
        />

        {/* Introduction & Journey */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200">
                  <Sparkles className="w-4 h-4 mr-2" />A Minha Jornada
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-light text-stone-800 mb-8">
                  Uma Vida Dedicada à <span className="text-emerald-600">Arte de Curar</span>
                </h2>
                <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                  <p>
                    Há mais de 15 anos que me dedico à medicina tradicional chinesa, uma paixão que nasceu da minha
                    própria jornada de descoberta pessoal. Acredito profundamente que cada pessoa possui uma capacidade
                    natural de cura que apenas precisa ser despertada e orientada.
                  </p>
                  <p>
                    A minha abordagem combina a sabedoria milenar da medicina chinesa com técnicas modernas
                    complementares, criando um método único e personalizado para cada paciente. Não trato apenas
                    sintomas - trabalho para restaurar o equilíbrio fundamental que permite ao corpo curar-se
                    naturalmente.
                  </p>
                  <p>
                    Cada sessão é uma oportunidade de conexão profunda, onde escuto não apenas as palavras, mas também
                    os sinais subtis que o corpo e a energia transmitem. É esta atenção ao detalhe que me permite criar
                    tratamentos verdadeiramente transformadores.
                  </p>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-2 gap-6 mt-12">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-6 bg-stone-50 rounded-2xl">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 text-emerald-600">
                        {achievement.icon}
                      </div>
                      <div className="text-3xl font-light text-emerald-600 mb-2">{achievement.number}</div>
                      <div className="text-sm text-stone-500 font-medium">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <OptimizedImage
                    src="/images/marlene-martins.webp"
                    alt="Marlene Martins - Acupunturista Certificada"
                    width={600}
                    height={700}
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full opacity-60 z-0" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-50 rounded-full opacity-80 z-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-gradient-to-br from-stone-50 to-emerald-50">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-stone-800 mb-6">
                A Minha <span className="text-emerald-600">Filosofia</span>
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Quatro princípios fundamentais que guiam cada tratamento e cada momento de cuidado que proporciono.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Interactive Philosophy Cards */}
              <div className="space-y-4">
                {philosophyPrinciples.map((principle, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-300 border-0 ${
                      activePhilosophy === index
                        ? "shadow-xl bg-white scale-105"
                        : "shadow-md bg-white/80 hover:shadow-lg"
                    }`}
                    onClick={() => setActivePhilosophy(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                            activePhilosophy === index
                              ? "bg-emerald-500 text-white scale-110"
                              : "bg-emerald-100 text-emerald-600"
                          }`}
                        >
                          {principle.icon}
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`text-xl font-semibold mb-2 transition-colors ${
                              activePhilosophy === index ? "text-emerald-600" : "text-stone-800"
                            }`}
                          >
                            {principle.title}
                          </h3>
                          <p className="text-stone-600 leading-relaxed">{principle.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Active Philosophy Details */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {philosophyPrinciples[activePhilosophy].icon}
                </div>
                <h3 className="text-2xl font-semibold text-stone-800 mb-4 text-center">
                  {philosophyPrinciples[activePhilosophy].title}
                </h3>
                <p className="text-lg text-stone-600 leading-relaxed text-center">
                  {philosophyPrinciples[activePhilosophy].details}
                </p>

                {/* Philosophy Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-8">
                  {philosophyPrinciples.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActivePhilosophy(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activePhilosophy ? "bg-emerald-600 w-8" : "bg-emerald-200 hover:bg-emerald-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications & Certifications */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-stone-800 mb-6">
                Qualificações e <span className="text-emerald-600">Certificações</span>
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                A minha formação contínua garante que recebe sempre os melhores cuidados, baseados nas mais recentes
                descobertas e técnicas terapêuticas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {qualifications.map((qual, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${qual.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {qual.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-6 group-hover:text-emerald-600 transition-colors">
                      {qual.title}
                    </h3>
                    <ul className="space-y-3">
                      {qual.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm text-stone-600">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-left">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 bg-stone-50">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-stone-800 mb-6">
                Os Meus <span className="text-emerald-600">Serviços</span>
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Ofereço uma gama completa de terapias holísticas, cada uma cuidadosamente selecionada para promover o
                seu bem-estar integral.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 overflow-hidden">
                      <div className="h-32 w-full">
                        <img 
                          src={`/images/${index === 0 ? 'acupuntura01.webp' : index === 1 ? 'massagem01.webp' : index === 2 ? 'reiki.webp' : 'hipnose.webp'}`} 
                          alt={service.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-stone-800 mb-2 group-hover:text-emerald-600 transition-colors text-center">
                        {service.name}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-xs text-stone-500">
                            <CheckCircle className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent group-hover:bg-emerald-600 group-hover:text-white transition-all"
                        asChild
                      >
                        <Link href={service.href} className="flex items-center justify-center">
                          <span>Saber Mais</span>
                          <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="py-24 bg-gradient-to-br from-white to-emerald-50">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-stone-800 mb-6">
                Histórias de <span className="text-emerald-600">Transformação</span>
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Cada paciente tem uma história única. Estas são algumas das jornadas de cura que tive o privilégio de
                acompanhar.
              </p>
            </div>

            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Patient Info */}
                  <div className="bg-emerald-50 p-8 lg:p-12 text-center lg:text-left">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 rounded-full mx-auto lg:mx-0 mb-4 object-cover border-4 border-white shadow-lg"
                    />
                    <h3 className="text-xl font-medium text-stone-800 mb-1">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-stone-500 mb-2">
                      {testimonials[currentTestimonial].age} anos, {testimonials[currentTestimonial].location}
                    </p>
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                      {testimonials[currentTestimonial].service}
                    </Badge>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <Quote className="h-8 w-8 text-emerald-600 mb-6" />
                    <blockquote className="text-lg lg:text-xl text-stone-700 leading-relaxed italic mb-6">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <p className="text-stone-400 text-sm">Testemunho verificado</p>
                      <Button
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white"
                        onClick={() => {
                          const message = encodeURIComponent(
                            `Olá! Vi o testemunho sobre ${testimonials[currentTestimonial].service} e gostaria de agendar uma consulta.`,
                          )
                          window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
                        }}
                      >
                        <Calendar className="h-3 w-3 mr-2" />
                        Agendar Consulta
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-emerald-600 w-8" : "bg-emerald-200 hover:bg-emerald-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-stone-800 text-white">
          <div className="container mx-auto px-8 max-w-4xl text-center">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Pronta para <span className="text-emerald-400">Cuidar de Si</span>
            </h2>
            <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Está pronta para iniciar a sua jornada de bem-estar? Entre em contacto comigo e vamos descobrir juntas
              como posso ajudar-te a alcançar o equilíbrio que procura.
            </p>
            <CTAButtons
              variant="section"
              primaryText="Agendar Consulta Inicial"
              secondaryText="(+351) 910 784 945"
              onSecondaryClick={() => window.open("tel:+351910784945")}
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-emerald-200 text-sm mt-12">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Consulta inicial gratuita</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Tratamento personalizado</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Ambiente acolhedor</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <FloatingContact />
    </>
  )
}
