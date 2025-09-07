"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingContact } from "@/components/floating-contact"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Award,
  Shield,
  Star,
  CheckCircle,
  Calendar,
  Users,
} from "lucide-react"

export default function ContatoClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Olá! Sou ${formData.name}.\n\nServiço de interesse: ${formData.service}\n\nMensagem: ${formData.message}\n\nContacto: ${formData.phone}\nEmail: ${formData.email}`,
    )
    window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation variant="overlay" />

      {/* Hero Section - 80vh height */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/zen-hero-bg.webp" 
            alt="Contacto - Medicina Tradicional Chinesa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Badge className="mb-4 sm:mb-6 bg-emerald-600/90 text-white hover:bg-emerald-700/90 backdrop-blur-sm">
            <MessageCircle className="w-3 h-3 mr-1" />
            Entre em Contacto
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight">
            Fale <span className="text-emerald-400">Connosco</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-stone-200 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
            Estamos aqui para ajudar no seu caminho para o bem-estar. Entre em contacto connosco para agendar a sua
            consulta ou esclarecer qualquer dúvida.
          </p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-medium min-h-[56px] flex items-center justify-center"
              onClick={() => window.open("https://wa.me/351910784945", "_blank")}
            >
              <span className="flex items-center">
                <MessageCircle className="mr-3 h-5 w-5 flex-shrink-0" />
                WhatsApp
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 text-lg font-medium min-h-[56px] flex items-center justify-center transition-all duration-200 bg-transparent"
              onClick={() => window.open("tel:+351910784945")}
            >
              <span className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0" />
                (+351) 910 784 945
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-6">
              Informações de <span className="text-emerald-600">Contacto</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto">
              Estamos disponíveis para o ajudar. Entre em contacto através dos meios abaixo ou preencha o formulário.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <Phone className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-3 sm:mb-4">Telefone</h3>
                <a
                  href="tel:+351910784945"
                  className="text-stone-600 hover:text-emerald-600 transition-colors text-sm sm:text-base"
                >
                  (+351) 910 784 945
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <Mail className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-3 sm:mb-4">Email</h3>
                <a
                  href="mailto:marlene.martins.mtc@gmail.com"
                  className="text-stone-600 hover:text-emerald-600 transition-colors text-sm sm:text-base break-all"
                >
                  marlene.martins.mtc@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-3 sm:mb-4">Morada</h3>
                <p className="text-stone-600 text-sm sm:text-base">
                  Azinhaga do brejo nº5 Esquerdo
                  <br />
                  2135-034 Samora Correia
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-3 sm:mb-4">Horário</h3>
                <div className="text-stone-600 text-sm sm:text-base">
                  <p>Segunda a Sexta: 9h-19h</p>
                  <p>Sábado: 9h-13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-6">
              Envie-nos uma <span className="text-emerald-600">Mensagem</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
              Preencha o formulário abaixo e entraremos em contacto consigo o mais breve possível.
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-stone-700 font-medium mb-2 block">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="O seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-stone-700 font-medium mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="o.seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-stone-700 font-medium mb-2 block">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="(+351) 9XX XXX XXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-stone-700 font-medium mb-2 block">
                      Serviço de Interesse
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:border-emerald-500 focus:ring-emerald-500 bg-white"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Acupuntura">Acupuntura</option>
                      <option value="Massagem Terapêutica">Massagem Terapêutica</option>
                      <option value="Reiki">Reiki</option>
                      <option value="Hipnose">Hipnose</option>
                      <option value="Consulta Geral">Consulta Geral</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-stone-700 font-medium mb-2 block">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Descreva como podemos ajudá-lo ou partilhe as suas questões..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 text-lg font-medium min-h-[56px] flex items-center justify-center"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                  <p className="text-sm text-stone-500 mt-4">
                    * Campos obrigatórios. A sua mensagem será enviada via WhatsApp.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-6">
              Credenciais <span className="text-emerald-600">Profissionais</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto">
              Marlene Martins é uma profissional certificada e reconhecida pelas entidades reguladoras de saúde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-3 sm:mb-4">
                  Entidade Reguladora de Saúde
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-stone-600">
                  <li>Certidão ERS - Nº E172469</li>
                  <li>Licença ERS - Nº 24514</li>
                  <li>
                    <a
                      href="https://www.ers.pt"
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      www.ers.pt
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <Award className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-3 sm:mb-4">Certificações</h3>
                <ul className="space-y-2 text-sm sm:text-base text-stone-600">
                  <li>Cédula Profissional de Acupuntura</li>
                  <li>C-0051688</li>
                  <li>Medicina Tradicional Chinesa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <Star className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-3 sm:mb-4">Experiência</h3>
                <ul className="space-y-2 text-sm sm:text-base text-stone-600">
                  <li>15+ anos de prática</li>
                  <li>500+ pacientes tratados</li>
                  <li>Formação contínua</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6">Pronto para Começar?</h2>
          <p className="text-lg sm:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Agende a sua consulta hoje mesmo e dê o primeiro passo para uma vida mais saudável e equilibrada.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Calendar className="h-8 w-8 text-emerald-200 mb-3" />
              <h3 className="font-semibold mb-2">Agende Online</h3>
              <p className="text-emerald-200 text-sm">Via WhatsApp ou telefone</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-emerald-200 mb-3" />
              <h3 className="font-semibold mb-2">Consulta Personalizada</h3>
              <p className="text-emerald-200 text-sm">Tratamento adaptado às suas necessidades</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-emerald-200 mb-3" />
              <h3 className="font-semibold mb-2">Resultados Comprovados</h3>
              <p className="text-emerald-200 text-sm">15+ anos de experiência</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center items-center max-w-2xl mx-auto px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-emerald-600 hover:bg-stone-50 px-8 py-4 text-lg font-medium min-h-[56px] flex items-center justify-center transition-all duration-200"
              onClick={() => window.open("https://wa.me/351910784945", "_blank")}
            >
              <span className="flex items-center">
                <MessageCircle className="mr-3 h-5 w-5 flex-shrink-0" />
                Agendar via WhatsApp
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-medium min-h-[56px] flex items-center justify-center transition-all duration-200 bg-transparent"
              onClick={() => window.open("tel:+351910784945")}
            >
              <span className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0" />
                (+351) 910 784 945
              </span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  )
}
