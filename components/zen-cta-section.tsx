"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Calendar, Clock, Star, Gift, Users, Shield } from "lucide-react"

interface ZenCTASectionProps {
  title?: string
  subtitle?: string
  pricing?: string
  urgencyText?: string
  limitedSpots?: number
}

export function ZenCTASection({
  title = "🌸 Inicie a Sua Jornada de Cura Hoje",
  subtitle = "Transforme a sua vida com a sabedoria milenar da acupuntura",
  pricing = "€40 por sessão | Pacote 5 sessões: €180 (Poupe €20!)",
  urgencyText = "Apenas 3 vagas disponíveis esta semana",
  limitedSpots = 3
}: ZenCTASectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "🌿 Olá! Gostaria de agendar uma consulta de acupuntura. Vi a oferta especial no website e tenho interesse em saber mais sobre os tratamentos disponíveis."
    )
    window.open(`https://wa.me/351912345678?text=${message}`, '_blank')
  }

  const handlePhoneClick = () => {
    window.open('tel:+351912345678', '_self')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-stone-50 relative overflow-hidden">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Urgency Banner */}
        <div className="text-center mb-8">
          <Badge variant="destructive" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm font-medium animate-pulse">
            🔥 {urgencyText}
          </Badge>
        </div>

        {/* Main CTA Card */}
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-light text-stone-800 mb-4">
                  {title}
                </h2>
                <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                  {subtitle}
                </p>

                {/* Pricing */}
                <div className="bg-emerald-50 rounded-2xl p-6 mb-8">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <Gift className="h-6 w-6 text-emerald-600 mr-2" />
                    <span className="text-lg font-semibold text-emerald-800">Oferta Especial</span>
                  </div>
                  <p className="text-2xl font-bold text-emerald-700 mb-2">{pricing}</p>
                  <p className="text-sm text-emerald-600">Válido apenas para novos pacientes</p>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <p className="text-sm text-stone-600">500+ Pacientes</p>
                  </div>
                  <div className="text-center">
                    <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm text-stone-600">4.9/5 Avaliação</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <p className="text-sm text-stone-600">Certificada</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Agendar via WhatsApp
                  </Button>
                  <Button 
                    onClick={handlePhoneClick}
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Ligar Agora
                  </Button>
                </div>
              </div>

              {/* Right Column - Countdown & Benefits */}
              <div className="space-y-8">
                {/* Countdown Timer */}
                <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-4">⏰ Oferta Termina Em:</h3>
                    <div className="flex justify-center space-x-4">
                      <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                        <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                        <div className="text-xs opacity-80">Horas</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                        <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                        <div className="text-xs opacity-80">Min</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                        <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                        <div className="text-xs opacity-80">Seg</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Benefits */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-stone-800 text-center">✨ O Que Vai Receber:</h3>
                  <div className="space-y-3">
                    {[
                      "🎋 Consulta inicial detalhada (30 min)",
                      "🧘 Tratamento personalizado (60 min)",
                      "⚡ Plano de cuidados individualizado",
                      "🌱 Acompanhamento pós-sessão",
                      "💎 Garantia de satisfação 100%"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center text-stone-700">
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4 text-center">
                    <Clock className="h-6 w-6 text-red-600 mx-auto mb-2" />
                    <p className="text-sm text-red-700 font-medium">
                      Apenas {limitedSpots} vagas disponíveis esta semana
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Reserve já para não perder esta oportunidade
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom guarantee */}
        <div className="text-center mt-8">
          <p className="text-sm text-stone-500">
            🛡️ <strong>Garantia de Satisfação:</strong> Se não ficar satisfeito com a primeira sessão, devolvemos o seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  )
}