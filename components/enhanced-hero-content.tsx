"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Calendar, Star, Shield, ChevronDown } from "lucide-react"

export function EnhancedHeroContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleBooking = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta. Pode ajudar-me com os horários disponíveis?"
    )
    window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
  }

  const scrollToServices = () => {
    document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative z-20 flex items-center justify-center h-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Trust Badge */}
          <div 
            className={`flex justify-center mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Badge className="bg-emerald-500/90 hover:bg-emerald-600/90 text-white border-0 px-4 py-2 text-sm backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2" />
              ERS Certificado C-051688 • 15+ Anos de Experiência
            </Badge>
          </div>

          {/* Main Title */}
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-emerald-300">Medicina</span>{" "}
            <span className="text-white">Tradicional</span>
            <br />
            <span className="text-white">Chinesa</span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-lg md:text-xl lg:text-2xl font-light mb-8 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Harmonize corpo, mente e espírito através de{" "}
            <span className="text-emerald-300 font-medium">técnicas milenares</span>{" "}
            da sabedoria chinesa, adaptadas ao mundo moderno.
          </p>

          {/* Trust Elements */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center text-emerald-200">
              <Star className="w-5 h-5 mr-2 fill-current" />
              <span className="text-lg font-semibold">4.9/5</span>
              <span className="ml-2 text-white/80">• 500+ Pacientes Tratados</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              onClick={handleBooking}
              className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-medium group"
            >
              <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Agendar Consulta Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-stone-800 backdrop-blur-sm transition-all duration-300 px-8 py-4 text-lg font-medium"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Conhecer Serviços
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col items-center text-white/80 cursor-pointer" onClick={scrollToServices}>
              <span className="text-sm mb-2">Descubra como podemos ajudar</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}