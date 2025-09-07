"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, ChevronDown } from "lucide-react"

interface NavigationProps {
  variant?: "overlay" | "solid"
}

export function Navigation({ variant = "overlay" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  // Handle scroll for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change and ensure scroll to top
  useEffect(() => {
    setIsOpen(false)
    // Force scroll to top on route change
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  const navItems = [
    { href: "/", label: "Home" },
    {
      href: "/sobre",
      label: "Sobre",
      description: "Conheça Marlene Martins",
    },
  ]

  const contactItem = {
    href: "/contato",
    label: "Contacto",
    description: "Agende sua consulta",
  }

  const servicosItems = [
    { href: "/servicos/acupuntura", label: "Acupuntura" },
    { href: "/servicos/massagem-terapeutica", label: "Massagem Terapêutica" },
    { href: "/servicos/reiki", label: "Reiki" },
    { href: "/servicos/hipnose", label: "Hipnose" },
  ]

  const [showServicosDropdown, setShowServicosDropdown] = useState(false)
  const [showMobileServicos, setShowMobileServicos] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const baseClasses = variant === "overlay" 
    ? `fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-stone-200 shadow-lg" 
          : "bg-transparent"
      } px-6 py-4`
    : "sticky top-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-stone-200 px-6 py-4 shadow-lg transition-all duration-500"

  const textColor = isScrolled ? "text-stone-700" : "text-white"
  const logoAccent = isScrolled ? "text-emerald-600" : "text-white"

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    // Use router.push for programmatic navigation with scroll reset
    router.push(href)
    // Ensure scroll to top
    setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 0)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const searchTerms = searchQuery.toLowerCase()
      let targetUrl = "/servicos"

      if (searchTerms.includes("acupuntura")) {
        targetUrl = "/servicos/acupuntura"
      } else if (searchTerms.includes("massagem")) {
        targetUrl = "/servicos/massagem-terapeutica"
      } else if (searchTerms.includes("reiki")) {
        targetUrl = "/servicos/reiki"
      } else if (searchTerms.includes("hipnose")) {
        targetUrl = "/servicos/hipnose"
      }

      handleNavigation(targetUrl)
      setSearchQuery("")
      setShowSearch(false)
    }
  }

  return (
    <header role="banner">
      <nav className={baseClasses} role="navigation" aria-label="Navegação principal">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="group transition-all duration-300" 
            onClick={() => handleNavigation("/")}
            aria-label="Marlene Martins - Medicina Tradicional Chinesa - Página inicial"
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center">
                <img 
                  src="/images/logommmtc.webp" 
                  alt="Logo Marlene Martins MTC" 
                  className="w-12 h-12 object-contain hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-light text-lg ${logoAccent} tracking-wide drop-shadow-sm`}>MARLENE MARTINS</span>
                <span className={`text-xs ${isScrolled ? 'text-stone-500' : 'text-emerald-300/70'} font-light tracking-wider uppercase`}>Medicina Tradicional Chinesa</span>
              </div>
            </div>
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6" role="menubar">
          {navItems.map((item) => (
            <div key={item.href} className="relative group" role="none">
              <Link
                href={item.href}
                className={`font-light text-sm tracking-wider relative flex items-center transition-all duration-300 py-2 px-3 rounded-lg hover:bg-emerald-50 hover:shadow-md hover:scale-[1.02] ${
                  isActive(item.href) 
                    ? isScrolled ? "text-emerald-600" : "text-emerald-300"
                    : isScrolled ? "text-stone-600 hover:text-emerald-600" : "text-white/80 hover:text-emerald-200"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation(item.href)
                }}
                role="menuitem"
                aria-current={isActive(item.href) ? "page" : undefined}
                title={item.description || `Navegar para ${item.label}`}
              >
                <span className="drop-shadow-sm">{item.label}</span>
                {isActive(item.href) && <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-500 rounded-full shadow-sm" aria-hidden="true"></div>}
              </Link>
            </div>
          ))}

          {/* Serviços Dropdown */}
          <div 
            className="relative group" 
            role="none"
            onMouseEnter={() => setShowServicosDropdown(true)}
            onMouseLeave={() => setShowServicosDropdown(false)}
          >
            <button
              className={`font-light text-sm tracking-wider relative flex items-center transition-all duration-300 py-2 px-3 rounded-lg hover:bg-emerald-50 hover:shadow-md hover:scale-[1.02] ${
                pathname.startsWith('/servicos')
                  ? isScrolled ? "text-emerald-600" : "text-emerald-300"
                  : isScrolled ? "text-stone-600 hover:text-emerald-600" : "text-white/80 hover:text-emerald-200"
              }`}
              role="menuitem"
              aria-expanded={showServicosDropdown}
              aria-haspopup="true"
            >
              <span className="drop-shadow-sm">Serviços</span>
              <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${showServicosDropdown ? 'rotate-180' : ''}`} />
              {pathname.startsWith('/servicos') && <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-500 rounded-full shadow-sm" aria-hidden="true"></div>}
            </button>

            {/* Dropdown Menu */}
            {showServicosDropdown && (
              <div className="absolute top-full left-0 pt-2 w-56 z-[200]">
                <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-stone-200 py-2">
                  {servicosItems.map((servico) => (
                    <Link
                      key={servico.href}
                      href={servico.href}
                      className={`block px-4 py-3 text-sm font-light tracking-wide transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600 ${
                        isActive(servico.href) ? 'text-emerald-600 bg-emerald-50' : 'text-stone-600'
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavigation(servico.href)
                        setShowServicosDropdown(false)
                      }}
                    >
                      {servico.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contacto Item */}
          <div className="relative group" role="none">
            <Link
              href="/contato"
              className={`font-light text-sm tracking-wider relative flex items-center transition-all duration-300 py-2 px-3 rounded-lg hover:bg-emerald-50 hover:shadow-md hover:scale-[1.02] ${
                isActive('/contato') 
                  ? isScrolled ? "text-emerald-600" : "text-emerald-300"
                  : isScrolled ? "text-stone-600 hover:text-emerald-600" : "text-white/80 hover:text-emerald-200"
              }`}
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/contato')
              }}
              role="menuitem"
              aria-current={isActive('/contato') ? "page" : undefined}
              title="Agende sua consulta"
            >
              <span className="drop-shadow-sm">Contacto</span>
              {isActive('/contato') && <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-500 rounded-full shadow-sm" aria-hidden="true"></div>}
            </Link>
          </div>

          {/* CTA Button */}
          <Button
            className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 overflow-hidden group px-6 py-2.5 font-light text-sm tracking-wider transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            onClick={() => {
              const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta.")
              window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
            }}
            aria-label="Agendar consulta via WhatsApp"
          >
            <span className="relative z-10 drop-shadow-sm flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              AGENDAR
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="sm"
          className={`lg:hidden transition-all focus-visible:ring-2 focus-visible:ring-emerald-500 ${
            isScrolled 
              ? "text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 border border-emerald-200 hover:border-emerald-300" 
              : "text-white hover:text-emerald-200 hover:bg-white/10 border border-white/20 hover:border-white/40"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="lg:hidden mt-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-stone-200"
          role="menu"
          aria-label="Menu de navegação mobile"
        >
          <div className="space-y-8">
            {/* Navigation Items */}
            {navItems.map((item) => (
              <div key={item.href} role="none">
                <Link
                  href={item.href}
                  className={`block font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${
                    isActive(item.href) 
                      ? "text-emerald-700 bg-emerald-50 border-l-4 border-emerald-500" 
                      : "text-stone-600 hover:text-emerald-600 hover:bg-emerald-50"
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(item.href)
                  }}
                  role="menuitem"
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  <span className="drop-shadow-sm">{item.label}</span>
                </Link>
              </div>
            ))}

            {/* Mobile Serviços Section */}
            <div role="none">
              <button
                className={`w-full flex items-center justify-between font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${
                  pathname.startsWith('/servicos')
                    ? "text-emerald-700 bg-emerald-50 border-l-4 border-emerald-500" 
                    : "text-stone-600 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
                onClick={() => setShowMobileServicos(!showMobileServicos)}
                role="menuitem"
                aria-expanded={showMobileServicos}
                aria-haspopup="true"
              >
                <span className="drop-shadow-sm">Serviços</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  showMobileServicos ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Mobile Serviços Dropdown */}
              {showMobileServicos && (
                <div className="mt-2 ml-4 space-y-2">
                  {servicosItems.map((servico) => (
                    <Link
                      key={servico.href}
                      href={servico.href}
                      className={`block font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-sm hover:scale-[1.01] ${
                        isActive(servico.href)
                          ? "text-emerald-600 bg-emerald-50" 
                          : "text-stone-500 hover:text-emerald-600 hover:bg-emerald-50"
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavigation(servico.href)
                      }}
                      role="menuitem"
                    >
                      <span className="drop-shadow-sm text-sm">{servico.label}</span>
                    </Link>
                  ))}
                </div>
              )}
             </div>

            {/* Contact Item */}
            <div role="none">
              <Link
                href={contactItem.href}
                className={`block font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${
                  isActive(contactItem.href) 
                    ? "text-emerald-700 bg-emerald-50 border-l-4 border-emerald-500" 
                    : "text-stone-600 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation(contactItem.href)
                }}
                role="menuitem"
                aria-current={isActive(contactItem.href) ? "page" : undefined}
              >
                <span className="drop-shadow-sm">{contactItem.label}</span>
              </Link>
            </div>

            {/* Primary CTA */}
            <div className="pt-6 border-t border-stone-200">
              <Button
                className="w-full relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3.5 font-light text-sm tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] overflow-hidden group"
                onClick={() => {
                  const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta.")
                  window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
                  setIsOpen(false)
                }}
                aria-label="Agendar consulta via WhatsApp"
              >
                <span className="relative z-10 drop-shadow-sm flex items-center justify-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  AGENDAR CONSULTA
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
    </header>
  )
}
