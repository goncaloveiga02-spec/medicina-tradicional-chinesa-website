"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Shield, FileText, Heart, Award } from "lucide-react"

export function Footer() {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    // Ensure scroll to top
    setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 0)
  }

  return (
    <footer className="bg-stone-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center md:text-left">
            <div className="mb-6">
              <div className="text-2xl font-light mb-2">
                <span className="text-emerald-400">M</span>ARLENE
              </div>
              <div className="text-emerald-400 text-xs tracking-widest mb-4">MEDICINA TRADICIONAL CHINESA</div>
              <p className="text-stone-300 text-sm leading-relaxed">
                Mais de 15 anos de experiência em medicina tradicional chinesa, oferecendo tratamentos personalizados
                para o seu bem-estar físico e emocional.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start text-sm text-stone-300">
                <Award className="h-4 w-4 mr-2 text-emerald-400" />
                <span>Cédula Profissional ERS</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-sm text-stone-300">
                <Shield className="h-4 w-4 mr-2 text-emerald-400" />
                <span>Certificação Internacional</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">Serviços</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li>
                <Link
                  href="/servicos/acupuntura"
                  className="text-stone-300 hover:text-emerald-400 transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/servicos/acupuntura")
                  }}
                >
                  Acupuntura
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/massagem-terapeutica"
                  className="text-stone-300 hover:text-emerald-400 transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/servicos/massagem-terapeutica")
                  }}
                >
                  Massagem Terapêutica
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/reiki"
                  className="text-stone-300 hover:text-emerald-400 transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/servicos/reiki")
                  }}
                >
                  Reiki
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/hipnose"
                  className="text-stone-300 hover:text-emerald-400 transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/servicos/hipnose")
                  }}
                >
                  Hipnose
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">Links Rápidos</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li>
                <Link
                  href="/sobre"
                  className="text-stone-300 hover:text-emerald-400 transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/sobre")
                  }}
                >
                  Sobre Marlene
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-stone-300 hover:text-emerald-400 transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/servicos")
                  }}
                >
                  Todos os Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-stone-300 hover:text-emerald-400 transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/contato")
                  }}
                >
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="https://www.livroreclamacoes.pt"
                  target="_blank"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-xs"
                  rel="noreferrer"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs">LR</span>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-xs">LIVRO DE RECLAMAÇÕES</div>
                      <div className="text-xs">FORMATO ELETRÓNICO</div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-stone-300">
                  <p>Azinhaga do brejo nº5 Esquerdo</p>
                  <p>2135-034 Samora Correia</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+351910784945" className="text-sm text-stone-300 hover:text-emerald-400 transition-colors">
                  (+351) 910 784 945
                </a>
              </div>

              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:marlene.martins.mtc@gmail.com"
                  className="text-sm text-stone-300 hover:text-emerald-400 transition-colors break-all"
                >
                  marlene.martins.mtc@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <Clock className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-stone-300">
                  <p>Segunda a Sexta: 9h - 18h</p>
                  <p>Sábado: 9h - 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-emerald-400">Siga-nos</h4>
              <div className="flex space-x-3 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/marlenemartinsmtc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/marlenemartinsmtc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-stone-400 text-center md:text-left">
              <p>&copy; 2024 Marlene Martins - Medicina Tradicional Chinesa. Todos os direitos reservados.</p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-stone-400">
              <div className="flex items-center">
                <Heart className="h-3 w-3 mr-1 text-emerald-400" />
                <span>Feito com dedicação</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-3 w-3 mr-1 text-emerald-400" />
                <span>ERS: C-051688</span>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-4 pt-4 border-t border-stone-800">
            <p className="text-xs text-stone-500 text-center leading-relaxed">
              <strong>Aviso Legal:</strong> A medicina tradicional chinesa não substitui o acompanhamento médico
              convencional. Os tratamentos oferecidos são complementares e visam promover o bem-estar geral. Consulte
              sempre o seu médico antes de iniciar qualquer tratamento alternativo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
