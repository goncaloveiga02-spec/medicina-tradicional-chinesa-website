"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingContact } from "@/components/floating-contact"
import { OptimizedImage } from "@/components/optimized-image"
import { FAQSection } from "@/components/faq-section"
import { ZenIcon } from "@/components/zen-icon"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronRight,
  Clock,
  Calendar,
  Euro,
  Star,
  Phone,
  MessageCircle,
  CheckCircle,
  Sparkles,
  Heart,
  Shield,
  Zap,
  Target,
  Trophy,
} from "lucide-react"
import Link from "next/link"

interface Breadcrumb {
  label: string
  href?: string
}

interface AboutSection {
  title: string
  content: string
  image: string
}

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface Qualification {
  title: string
  icon: string
  items: string[]
}

interface FAQItem {
  question: string
  answer: string
}

interface ResponsiveServiceLayoutProps {
  title: string
  subtitle: string
  metaDescription: string
  keywords: string[]
  canonicalUrl: string
  heroImage: string
  breadcrumbs: Breadcrumb[]
  serviceName: string
  serviceDescription: string
  benefits: string[]
  conditions: string[]
  duration: string
  frequency: string
  pricing: string
  aboutSection: AboutSection
  processSteps: ProcessStep[]
  qualifications: Qualification[]
  faqs?: FAQItem[]
  jsonLd: object
}

export function ResponsiveServiceLayout({
  title,
  subtitle,
  heroImage,
  breadcrumbs,
  serviceName,
  serviceDescription,
  benefits,
  conditions,
  duration,
  frequency,
  pricing,
  aboutSection,
  processSteps,
  qualifications,
  faqs,
  jsonLd,
}: ResponsiveServiceLayoutProps) {
  const [activeTab, setActiveTab] = useState("benefits")

  // Transform benefits into more appealing format
  const transformedBenefits = benefits.slice(0, 6).map((benefit, index) => {
    const [title, description] = benefit.split(": ")
    const icons = [
      <Heart className="h-6 w-6" key="heart" />,
      <Shield className="h-6 w-6" key="shield" />,
      <Zap className="h-6 w-6" key="zap" />,
      <Star className="h-6 w-6" key="star" />,
      <Target className="h-6 w-6" key="target" />,
      <Trophy className="h-6 w-6" key="trophy" />,
    ]
    return {
      icon: icons[index] || <CheckCircle className="h-6 w-6" key="check" />,
      title: title || benefit.substring(0, 40) + "...",
      description: description || benefit,
    }
  })

  // Transform conditions into categories
  const conditionCategories = [
    {
      title: "Stress & Ansiedade",
      conditions: conditions.filter((c) => c.toLowerCase().includes("stress") || c.toLowerCase().includes("ansiedade")),
      icon: "🧠",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Dores Físicas",
      conditions: conditions.filter((c) => c.toLowerCase().includes("dor") || c.toLowerCase().includes("lesão")),
      icon: "💪",
      color: "bg-red-50 text-red-700 border-red-200",
    },
    {
      title: "Bem-estar Geral",
      conditions: conditions.filter((c) => c.toLowerCase().includes("sono") || c.toLowerCase().includes("energia")),
      icon: "🌿",
      color: "bg-green-50 text-green-700 border-green-200",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white">
        <Navigation variant="overlay" />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img 
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-stone-900/40 via-stone-800/30 to-stone-900/35"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-stone-900/20"></div>
          </div>

          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight">{title}</h1>
            <p className="text-base sm:text-lg lg:text-xl text-stone-200 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg"
                onClick={() => {
                  const message = encodeURIComponent(
                    `Olá! Gostaria de agendar uma sessão de ${serviceName.toLowerCase()}.`,
                  )
                  window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Sessão
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 text-lg font-medium rounded-xl bg-transparent"
                onClick={() => window.open("tel:+351910784945")}
              >
                <Phone className="mr-2 h-5 w-5" />
                (+351) 910 784 945
              </Button>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-stone-50 py-3 sm:py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm text-stone-600">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mx-1 sm:mx-2 text-stone-400" />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-emerald-600 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-emerald-600 font-medium">{crumb.label}</span>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </section>

        {/* Service Overview - Desktop Layout */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-8 lg:mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-4 sm:mb-6 text-center lg:text-left">
                    O que é {serviceName}?
                  </h2>
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-center lg:text-left">{serviceDescription}</p>
                </div>

                {/* Tabs - Desktop */}
                <div className="border-b border-stone-200 mb-8">
                  <nav className="flex space-x-8">
                    {[
                      { id: "benefits", label: "Benefícios" },
                      { id: "conditions", label: "Condições" },
                      { id: "process", label: "Processo" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm sm:text-base transition-colors ${
                          activeTab === tab.id
                            ? "border-emerald-500 text-emerald-600"
                            : "border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Tab Content */}
                {activeTab === "benefits" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {transformedBenefits.map((benefit, index) => (
                      <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                              {benefit.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-medium text-stone-800 mb-2">{benefit.title}</h3>
                              <p className="text-sm text-stone-600 leading-relaxed">{benefit.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {activeTab === "conditions" && (
                  <div className="space-y-6">
                    {conditionCategories.map((category, index) => (
                      <Card key={index} className={`border ${category.color}`}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{category.icon}</span>
                              <h3 className="text-xl font-medium text-stone-800">{category.title}</h3>
                            </div>
                            <Badge variant="secondary">{category.conditions.length} condições</Badge>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {category.conditions.slice(0, 6).map((condition, condIndex) => (
                              <div key={condIndex} className="flex items-center text-sm text-stone-600">
                                <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                                {condition}
                              </div>
                            ))}
                          </div>
                          {category.conditions.length > 6 && (
                            <Button variant="ghost" size="sm" className="mt-4 text-emerald-600 hover:text-emerald-700">
                              Ver todas ({category.conditions.length})
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {activeTab === "process" && (
                  <div className="space-y-6">
                    {processSteps.map((step, index) => (
                      <Card key={index} className="border-0 shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-lg font-medium flex-shrink-0">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-medium text-stone-800 mb-2">{step.title}</h3>
                              <p className="text-stone-600 leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Session Info Card */}
                  <Card className="shadow-lg border-0">
                    <CardContent className="p-6 sm:p-8">
                      <h3 className="text-xl font-semibold text-stone-800 mb-6">Informações da Sessão</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-emerald-600 mr-3" />
                            <span className="text-stone-600">Duração</span>
                          </div>
                          <span className="font-medium text-stone-800 text-right">{duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-emerald-600 mr-3" />
                            <span className="text-stone-600">Frequência</span>
                          </div>
                          <span className="font-medium text-stone-800 text-right">{frequency}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Euro className="h-5 w-5 text-emerald-600 mr-3" />
                            <span className="text-stone-600">Preço</span>
                          </div>
                          <span className="font-medium text-emerald-600 text-lg text-right">{pricing}</span>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-stone-200 space-y-3">
                        <Button
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                          onClick={() => {
                            const message = encodeURIComponent(
                              `Olá! Gostaria de agendar uma sessão de ${serviceName.toLowerCase()}.`,
                            )
                            window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
                          }}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Agendar Agora
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                          onClick={() => window.open("tel:+351910784945")}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Ligar Agora
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <Card className="shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-emerald-100">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-stone-800 mb-4">Porquê escolher-nos?</h4>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                          <span className="text-stone-700">15+ anos de experiência</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                          <span className="text-stone-700">500+ pacientes tratados</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                          <span className="text-stone-700">Consulta inicial gratuita</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                          <span className="text-stone-700">Tratamento personalizado</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-6 text-center lg:text-left">
                  {aboutSection.title}
                </h2>
                <div className="prose prose-lg text-stone-600 leading-relaxed text-center lg:text-left">
                  {aboutSection.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>
              </div>
              <div className="relative">
                <OptimizedImage
                  src={aboutSection.image}
                  alt={aboutSection.title}
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-6">
                Qualificações e <span className="text-emerald-600">Experiência</span>
              </h2>
              <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto">
                Marlene Martins possui as certificações e experiência necessárias para oferecer tratamentos de alta
                qualidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {qualifications.map((qual, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="mb-4 sm:mb-6">
                      <ZenIcon iconPath={qual.icon} alt={qual.title} className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-4 sm:mb-6">{qual.title}</h3>
                    <ul className="space-y-3 text-left">
                      {qual.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm sm:text-base text-stone-600">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {faqs && faqs.length > 0 && (
          <FAQSection faqs={faqs} />
        )}

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-stone-50 to-stone-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-light text-stone-800 mb-4">Pronto para Começar?</h2>
              <p className="text-base sm:text-lg text-stone-600 mb-6 max-w-xl mx-auto leading-relaxed">
                Agende a sua consulta e descubra como posso ajudar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
                <Button
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-base font-medium shadow-sm"
                  onClick={() => {
                    const message = encodeURIComponent(
                      `Olá! Gostaria de agendar uma sessão de ${serviceName.toLowerCase()}.`,
                    )
                    window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
                  }}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Agendar
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border border-stone-300 text-stone-700 hover:bg-stone-50 px-6 py-3 text-base font-medium"
                  onClick={() => window.open("tel:+351910784945")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  910 784 945
                </Button>
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
