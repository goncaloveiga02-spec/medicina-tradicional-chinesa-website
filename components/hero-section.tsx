"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "./optimized-image"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage: string
  height?: "screen" | "80vh" | "60vh" | "50vh"
  overlayOpacity?: number
  textAlignment?: "left" | "center" | "right"
  contentMaxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  showScrollIndicator?: boolean
  scrollIndicatorText?: string
  breadcrumbs?: Array<{ label: string; href?: string }>
  primaryCTA?: {
    text: string
    action: () => void
  }
  secondaryCTA?: {
    text: string
    action: () => void
  }
  variant?: "full" | "compact"
  highlightWords?: string[]
  backgroundOverlay?: "light" | "medium" | "dark"
  ctaButtons?: Array<{
    text: string
    href?: string
    variant?: "primary" | "secondary" | "outline"
    icon?: React.ReactNode
    onClick?: () => void
  }>
}

const heightClasses = {
  screen: "h-screen",
  "80vh": "h-[80vh]",
  "60vh": "h-[60vh]",
  "50vh": "h-[50vh]",
}

const overlayClasses = {
  light: "bg-black/30",
  medium: "bg-black/50",
  dark: "bg-black/70",
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  height = "screen",
  overlayOpacity = 0.6,
  textAlignment = "center",
  contentMaxWidth = "2xl",
  showScrollIndicator = true,
  scrollIndicatorText = "Descubra os nossos serviços",
  breadcrumbs,
  primaryCTA,
  secondaryCTA,
  variant = "full",
  highlightWords = [],
  backgroundOverlay = "medium",
  ctaButtons,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const defaultCtaButtons = [
    {
      text: "Agendar Consulta",
      variant: "primary" as const,
      icon: <MessageCircle className="w-4 h-4" />,
      onClick: () => {
        const message = encodeURIComponent(
          "Olá! Gostaria de agendar uma consulta. Pode ajudar-me com os horários disponíveis?",
        )
        window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
      },
    },
    {
      text: "Conhecer Serviços",
      variant: "outline" as const,
      onClick: () => (window.location.href = "/servicos"),
    },
  ]

  // Use custom CTA buttons if provided, otherwise use primaryCTA/secondaryCTA, otherwise use defaults
  let buttonsToShow = ctaButtons || defaultCtaButtons

  if (primaryCTA || secondaryCTA) {
    buttonsToShow = []
    if (primaryCTA) {
      buttonsToShow.push({
        text: primaryCTA.text,
        variant: "primary" as const,
        onClick: primaryCTA.action,
      })
    }
    if (secondaryCTA) {
      buttonsToShow.push({
        text: secondaryCTA.text,
        variant: "outline" as const,
        onClick: secondaryCTA.action,
      })
    }
  }

  const renderTitle = () => {
    if (highlightWords.length === 0) {
      return title
    }

    let processedTitle = title
    highlightWords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi")
      processedTitle = processedTitle.replace(regex, `<span class="text-emerald-300">$1</span>`)
    })

    return <span dangerouslySetInnerHTML={{ __html: processedTitle }} />
  }

  return (
    <section className={`relative ${heightClasses[height]} overflow-hidden`}>
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
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 z-10 ${overlayClasses[backgroundOverlay]}`} />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center text-white`}>
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav className="flex justify-center items-center space-x-2 text-sm text-white/80 mb-6">
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2">/</span>}
                    {crumb.href ? (
                      <a href={crumb.href} className="hover:text-white transition-colors">
                        {crumb.label}
                      </a>
                    ) : (
                      <span>{crumb.label}</span>
                    )}
                  </div>
                ))}
              </nav>
            )}

            {/* Title */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {renderTitle()}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p
                className={`text-lg md:text-xl lg:text-2xl font-light mb-8 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {subtitle}
              </p>
            )}

            {/* CTA Buttons */}
            {buttonsToShow && buttonsToShow.length > 0 && (
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {buttonsToShow.map((button, index) => (
                  <Button
                    key={index}
                    size="lg"
                    className={`px-8 py-3 text-lg font-medium transition-all duration-300 ${
                      button.variant === "primary"
                        ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl"
                        : button.variant === "outline"
                          ? "border-2 border-white text-white bg-transparent hover:bg-white hover:text-stone-800"
                          : "bg-white text-stone-800 hover:bg-stone-100"
                    }`}
                    onClick={button.onClick}
                    asChild={!!button.href}
                  >
                    {button.href ? (
                      <a href={button.href} className="flex items-center space-x-2">
                        {button.icon}
                        <span>{button.text}</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-2">
                        {button.icon}
                        <span>{button.text}</span>
                      </div>
                    )}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2">{scrollIndicatorText}</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </div>
      )}
    </section>
  )
}
