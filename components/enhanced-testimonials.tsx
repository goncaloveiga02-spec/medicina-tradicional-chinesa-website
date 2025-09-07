"use client"

import { Star, Quote, ChevronLeft, ChevronRight, Shield, Calendar } from "lucide-react"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  age: number
  location: string
  condition: string
  treatment: string
  rating: number
  text: string
  image: string
  date: string
  verified: boolean
  beforeAfter?: {
    before: string
    after: string
  }
}

export function EnhancedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Silva",
      age: 45,
      location: "Samora Correia",
      condition: "Dores crónicas nas costas",
      treatment: "Acupuntura (8 sessões)",
      rating: 5,
      text: "Após 20 anos de dores constantes e múltiplas consultas médicas sem sucesso, finalmente encontrei alívio real com a Marlene. Em apenas 6 sessões, a minha qualidade de vida melhorou drasticamente. Consigo dormir toda a noite e voltar às minhas atividades normais. A Marlene é uma profissional excecional, muito atenciosa e conhecedora. Recomendo vivamente!",
      image: "/placeholder.svg?height=80&width=80&text=MS",
      date: "Há 2 meses",
      verified: true,
      beforeAfter: {
        before: "Dor constante 8/10",
        after: "Dor ocasional 2/10",
      },
    },
    {
      id: 2,
      name: "João Santos",
      age: 38,
      location: "Benavente",
      condition: "Ansiedade e insónia severa",
      treatment: "Acupuntura + Reiki (12 sessões)",
      rating: 5,
      text: "Sofria de ansiedade e insónia há mais de 5 anos. Tomava medicação que me deixava sonolento durante o dia. A combinação de acupuntura e reiki da Marlene transformou completamente a minha vida. Agora durmo profundamente, acordo descansado e a minha ansiedade reduziu drasticamente. Deixei a medicação gradualmente com acompanhamento médico. Sinto-me uma pessoa nova!",
      image: "/placeholder.svg?height=80&width=80&text=JS",
      date: "Há 1 mês",
      verified: true,
      beforeAfter: {
        before: "2-3h sono/noite",
        after: "7-8h sono reparador",
      },
    },
    {
      id: 3,
      name: "Ana Costa",
      age: 52,
      location: "Salvaterra de Magos",
      condition: "Enxaquecas frequentes",
      treatment: "Acupuntura (10 sessões)",
      rating: 5,
      text: "Durante anos sofri com enxaquecas debilitantes 3-4 vezes por semana. Já tinha tentado de tudo - medicamentos, dietas, fisioterapia. A acupuntura da Marlene foi a única coisa que realmente funcionou. Após 2 meses de tratamento, raramente tenho episódios e quando tenho são muito mais leves. A minha produtividade no trabalho melhorou imenso e voltei a ter qualidade de vida.",
      image: "/placeholder.svg?height=80&width=80&text=AC",
      date: "Há 3 semanas",
      verified: true,
      beforeAfter: {
        before: "3-4 enxaquecas/semana",
        after: "1 episódio leve/mês",
      },
    },
    {
      id: 4,
      name: "Pedro Oliveira",
      age: 41,
      location: "Santarém",
      condition: "Stress profissional e burnout",
      treatment: "Massagem + Hipnose (15 sessões)",
      rating: 5,
      text: "O stress do trabalho estava a destruir a minha vida pessoal e familiar. Sentia-me constantemente tenso, irritado e exausto. O tratamento holístico da Marlene, combinando massagem terapêutica e hipnose, ajudou-me a encontrar ferramentas para gerir o stress e recuperar o equilíbrio. Aprendi técnicas de relaxamento que uso diariamente. A minha família nota uma diferença enorme no meu humor e energia.",
      image: "/placeholder.svg?height=80&width=80&text=PO",
      date: "Há 1 semana",
      verified: true,
      beforeAfter: {
        before: "Stress 9/10 diário",
        after: "Stress controlado 3/10",
      },
    },
    {
      id: 5,
      name: "Carla Ferreira",
      age: 35,
      location: "Coruche",
      condition: "Dificuldades de fertilidade",
      treatment: "Acupuntura especializada (20 sessões)",
      rating: 5,
      text: "Após 3 anos tentando engravidar sem sucesso e várias tentativas de FIV falhadas, decidi experimentar a acupuntura como complemento. A Marlene explicou-me como a medicina tradicional chinesa pode ajudar na fertilidade. Após 6 meses de tratamento regular, engravidei naturalmente! Hoje tenho uma filha linda e saudável. Sou eternamente grata à Marlene por me ter dado esperança quando já não acreditava que fosse possível.",
      image: "/placeholder.svg?height=80&width=80&text=CF",
      date: "Há 6 meses",
      verified: true,
      beforeAfter: {
        before: "3 anos tentativas",
        after: "Gravidez natural",
      },
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-gradient-to-br from-white to-stone-50">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-stone-800 mb-6">
            <span className="text-emerald-600">Histórias</span> de Transformação Real
          </h2>
          <p className="text-xl text-stone-600 mb-8">
            Mais de 500 pacientes já transformaram suas vidas com nossos tratamentos
          </p>

          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-8 text-sm text-stone-500">
            <div className="flex items-center">
              <Shield className="h-4 w-4 text-green-600 mr-2" />
              <span>Testemunhos Verificados</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span>4.9/5 Avaliação Média</span>
            </div>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <Card className="border-0 shadow-2xl mb-12 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Patient Info */}
              <div className="bg-emerald-50 p-8 lg:p-12 text-center lg:text-left">
                <img
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full mx-auto lg:mx-0 mb-4 object-cover border-4 border-white shadow-lg"
                />

                <h3 className="text-xl font-medium text-stone-800 mb-1">{currentTestimonial.name}</h3>
                <p className="text-stone-500 mb-2">
                  {currentTestimonial.age} anos, {currentTestimonial.location}
                </p>

                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {currentTestimonial.verified && (
                  <div className="inline-flex items-center bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mb-4">
                    <Shield className="h-3 w-3 mr-1" />
                    Testemunho Verificado
                  </div>
                )}

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-stone-800">Condição:</span>
                    <p className="text-stone-600">{currentTestimonial.condition}</p>
                  </div>
                  <div>
                    <span className="font-medium text-stone-800">Tratamento:</span>
                    <p className="text-stone-600">{currentTestimonial.treatment}</p>
                  </div>
                  {currentTestimonial.beforeAfter && (
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xs text-stone-500 mb-1">Antes → Depois</div>
                      <div className="text-xs">
                        <span className="text-red-600">{currentTestimonial.beforeAfter.before}</span>
                        <span className="mx-2">→</span>
                        <span className="text-green-600">{currentTestimonial.beforeAfter.after}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <Quote className="h-8 w-8 text-emerald-600 mb-6" />
                <blockquote className="text-lg lg:text-xl text-stone-700 leading-relaxed italic mb-6">
                  "{currentTestimonial.text}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <p className="text-stone-400 text-sm">{currentTestimonial.date}</p>
                  <Button
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    onClick={() => {
                      const message = encodeURIComponent(
                        `Olá! Vi o testemunho sobre ${currentTestimonial.condition} e gostaria de agendar uma consulta.`,
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

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-6 mb-12">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="rounded-full w-10 h-10 p-0"
            aria-label="Testemunho anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-emerald-600 w-8" : "bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Ir para testemunho ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="rounded-full w-10 h-10 p-0"
            aria-label="Próximo testemunho"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-stone-600 text-sm">Pacientes Tratados</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
            <div className="text-stone-600 text-sm">Taxa de Satisfação</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
            <div className="text-stone-600 text-sm">Anos de Experiência</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">4.9</div>
            <div className="text-stone-600 text-sm">Avaliação Média</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-medium text-stone-800 mb-4">Pronto para a Sua Transformação?</h3>
            <p className="text-stone-600 mb-6">
              Junte-se a centenas de pacientes que já melhoraram sua qualidade de vida
            </p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
              onClick={() => {
                const message = encodeURIComponent(
                  "Olá! Vi os testemunhos no website e gostaria de agendar uma consulta inicial.",
                )
                window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
              }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta Inicial
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
