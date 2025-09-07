"use client"

import { Calendar, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTAButtonsProps {
  variant?: "hero" | "section" | "inline"
  primaryText?: string
  secondaryText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  className?: string
}

declare global {
  interface Window {
    gtag: any
  }
}

export function CTAButtons({
  variant = "hero",
  primaryText = "Agendar Consulta",
  secondaryText = "Falar com Marlene",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}: CTAButtonsProps) {
  const handlePrimaryClick = () => {
    // Track conversion intent
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("event", "booking_intent", {
        event_category: "conversion",
        event_label: `cta_${variant}`,
      })
    }

    if (onPrimaryClick) {
      onPrimaryClick()
    } else {
      // Default action - scroll to contact or open booking
      const contactSection = document.getElementById("contact-section")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick()
    } else {
      // Default action - call
      window.location.href = "tel:+351910784945"
    }
  }

  if (variant === "hero") {
    return (
      <div className={`flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center ${className}`}>
        <Button
          size="lg"
          onClick={handlePrimaryClick}
          className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-xl shadow-lg hover:shadow-xl transition-all focus-visible:ring-4 focus-visible:ring-emerald-500/50"
        >
          <Calendar className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
          {primaryText}
        </Button>
        <Button
          size="lg"
          onClick={handleSecondaryClick}
          className="w-full sm:w-auto bg-white hover:bg-gray-100 text-stone-900 font-semibold border-2 border-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-xl transition-all focus-visible:ring-4 focus-visible:ring-white/50"
        >
          <Phone className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
          {secondaryText}
        </Button>
      </div>
    )
  }

  if (variant === "section") {
    return (
      <div className={`flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center ${className}`}>
        <Button
          size="lg"
          onClick={handlePrimaryClick}
          className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-xl shadow-lg hover:shadow-xl transition-all focus-visible:ring-4 focus-visible:ring-emerald-500/50"
        >
          <Calendar className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
          {primaryText}
        </Button>
        <Button
          size="lg"
          onClick={handleSecondaryClick}
          className="w-full sm:w-auto bg-white hover:bg-gray-100 text-emerald-600 font-semibold border-2 border-emerald-600 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-xl transition-all focus-visible:ring-4 focus-visible:ring-emerald-500/50"
        >
          <Phone className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
          {secondaryText}
        </Button>
      </div>
    )
  }

  // inline variant
  return (
    <div className={`flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 justify-center ${className}`}>
      <Button
        onClick={handlePrimaryClick}
        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        <Calendar className="mr-2 h-4 w-4" />
        {primaryText}
      </Button>
      <Button
        variant="outline"
        onClick={handleSecondaryClick}
        className="w-full sm:w-auto border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        <ArrowRight className="mr-2 h-4 w-4" />
        Saiba Mais
      </Button>
    </div>
  )
}
