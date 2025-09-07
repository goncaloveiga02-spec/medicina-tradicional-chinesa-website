"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "./optimized-image"

interface ZenHeroSectionProps {
  backgroundImage?: string
}

export function ZenHeroSection({ backgroundImage = "/images/zen-hero-bg.jpg" }: ZenHeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleAgendarConsulta = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta. Pode ajudar-me com os horários disponíveis?"
    )
    window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
  }

  const handleSaberMais = () => {
    window.location.href = "/servicos"
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
        
        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/60 to-gray-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        
        {/* Zen Stone Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-900/20 to-yellow-800/10 backdrop-blur-md rounded-full border border-amber-700/30 animate-pulse shadow-2xl shadow-amber-900/20" style={{animationDelay: '0s'}} />
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-stone-800/30 to-gray-700/20 backdrop-blur-md rounded-full border border-stone-600/40 animate-pulse shadow-xl shadow-stone-800/30" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-amber-800/25 to-orange-900/15 backdrop-blur-md rounded-full border border-amber-600/35 animate-bounce shadow-lg shadow-amber-800/25" style={{animationDelay: '1s'}} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-30 flex items-center justify-center min-h-screen py-16">
        <div className="container mx-auto px-4 lg:px-20 max-w-4xl">
          <div className="text-center">
            
            {/* Main Content - Centered */}
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Main Title */}
              <div
                className={`space-y-2 transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-wide">
                  <span className="block bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-100 bg-clip-text text-transparent drop-shadow-2xl filter brightness-110 font-extralight">
                    MEDICINA TRADICIONAL
                  </span>
                  <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl filter brightness-125 mt-2 font-light">
                    CHINESA
                  </span>
                </h1>
                <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mt-6 shadow-lg shadow-amber-400/50"></div>
              </div>

              {/* Subtitle */}
              <div
                className={`space-y-6 transition-all duration-1000 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="max-w-2xl mx-auto">
                  <p className="text-lg md:text-xl leading-relaxed font-light mb-8 text-amber-100/90 drop-shadow-lg tracking-wide">
                    Equilibre corpo, mente e espírito através de técnicas milenares da medicina tradicional chinesa.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm font-light">
                    <span className="text-amber-200/80 flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                      Acupuntura
                    </span>
                    <span className="text-amber-200/80 flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                      Fitoterapia
                    </span>
                    <span className="text-amber-200/80 flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                      Massagem Terapêutica
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button - Single Primary Action */}
              <div
                className={`flex justify-center transition-all duration-1000 delay-600 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative group">
                  {/* Subtle golden glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 via-yellow-500/20 to-amber-600/30 rounded-lg blur-md opacity-50 group-hover:opacity-70 transition duration-500"></div>
                  
                  <Button
                    onClick={handleAgendarConsulta}
                    className="relative text-black px-10 py-4 rounded-lg font-light text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl border border-amber-400/50 backdrop-blur-sm overflow-hidden tracking-wide"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)'
                    }}
                  >
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    <span className="relative flex items-center gap-3">
                      AGENDAR CONSULTA
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zen Floating Elements */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        {/* Subtle golden particles */}
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-gradient-to-r from-amber-400/60 to-yellow-400/40 rounded-full animate-pulse shadow-md shadow-amber-400/30"></div>
        <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-gradient-to-r from-yellow-400/50 to-amber-300/30 rounded-full animate-bounce shadow-sm shadow-yellow-400/20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-12 left-1/2 w-1 h-1 bg-gradient-to-r from-amber-300/40 to-yellow-300/20 rounded-full animate-pulse shadow-sm shadow-amber-300/20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-gradient-to-r from-yellow-300/30 to-amber-200/20 rounded-full animate-bounce shadow-sm shadow-yellow-300/15" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-gradient-to-r from-amber-200/30 to-yellow-200/20 rounded-full animate-pulse shadow-sm shadow-amber-200/10" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-amber-400/10 backdrop-blur-sm border border-amber-400/20 rounded-full flex items-center justify-center mb-3 shadow-md hover:bg-amber-400/20 transition-all duration-500">
            <ChevronDown className="w-4 h-4 animate-bounce text-amber-200/80 drop-shadow-sm" />
          </div>
          <span className="text-xs text-amber-200/60 font-light drop-shadow-sm tracking-wider">EXPLORE</span>
        </div>
      </div>
    </section>
  )
}