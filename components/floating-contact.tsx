"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PhoneCall, MessageCircle, Phone, Mail, Calendar, X } from "lucide-react"

declare global {
  interface Window {
    gtag: any
  }
}

export function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Overlay */}
      {isExpanded && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setIsExpanded(false)} />}

      {/* Floating Contact Widget */}
      <div className="fixed bottom-6 right-6 lg:left-6 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto lg:right-auto z-50">
        {/* Pulse Ring Animation */}
        {!isExpanded && (
          <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20"></div>
        )}
        
        {/* Main Contact Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`relative w-16 h-16 lg:w-18 lg:h-18 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus-visible:ring-4 focus-visible:ring-emerald-500/50 ${
            isExpanded ? "bg-red-500 hover:bg-red-600" : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
          } text-white border-4 border-white`}
          aria-label={isExpanded ? "Fechar opções de contato" : "Abrir opções de contato"}
          aria-expanded={isExpanded}
        >
          {isExpanded ? <X className="h-6 w-6 lg:h-7 lg:w-7" /> : <PhoneCall className="h-6 w-6 lg:h-7 lg:w-7" />}
          
          {/* Badge for availability */}
          {!isExpanded && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          )}
        </Button>

        {/* Contact Options */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 lg:left-20 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto lg:right-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 min-w-[280px] lg:min-w-[320px] animate-in slide-in-from-bottom-4 lg:slide-in-from-left-4 duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-stone-800">Entre em Contato</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(false)}
                    className="lg:hidden"
                    aria-label="Fechar"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Primary CTA - Booking */}
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-4 text-white text-center mb-4">
                  <h4 className="font-semibold mb-2">Consulta Gratuita</h4>
                  <p className="text-sm text-emerald-100 mb-3">Avaliação inicial de 30 minutos</p>
                  <Button
                    className="w-full bg-white text-emerald-600 hover:bg-emerald-50 py-2 text-sm font-semibold"
                    onClick={() => {
                      // Track conversion intent
                      if (typeof window.gtag !== "undefined") {
                        window.gtag("event", "booking_intent", {
                          event_category: "conversion",
                          event_label: "floating_cta",
                        })
                      }
                      const message = encodeURIComponent(
                        "Olá! Gostaria de agendar uma consulta gratuita de 30 minutos."
                      )
                      window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
                      setIsExpanded(false)
                    }}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar Agora
                  </Button>
                </div>

                <div className="border-t border-stone-200 pt-4">
                  <p className="text-sm text-stone-600 mb-3">Ou contacte diretamente:</p>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/351910784945?text=Olá, gostaria de agendar uma consulta"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 transition-colors group focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={() => setIsExpanded(false)}
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-800 group-hover:text-green-600">WhatsApp</p>
                      <p className="text-sm text-stone-500">(+351) 910 784 945</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+351910784945"
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setIsExpanded(false)}
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-800 group-hover:text-blue-600">Telefone</p>
                      <p className="text-sm text-stone-500">(+351) 910 784 945</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:marlene.martins.mtc@gmail.com?subject=Pedido de Consulta"
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-emerald-50 transition-colors group focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                    onClick={() => setIsExpanded(false)}
                  >
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-800 group-hover:text-emerald-600">Email</p>
                      <p className="text-sm text-stone-500">marlene.martins.mtc@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Arrow pointing to button - Desktop only */}
              <div className="hidden lg:block absolute right-full top-1/2 transform -translate-y-1/2">
                <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
