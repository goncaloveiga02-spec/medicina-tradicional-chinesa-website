"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, Clock, Star, CheckCircle } from "lucide-react"

const trustIndicators = [
  {
    icon: Shield,
    title: "ERS Certificado",
    subtitle: "C-051688",
    description: "Certificação profissional oficial",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Award,
    title: "15+ Anos",
    subtitle: "Experiência",
    description: "Dedicação à medicina tradicional",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Users,
    title: "500+",
    subtitle: "Pacientes",
    description: "Tratados com sucesso",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Star,
    title: "4.9/5",
    subtitle: "Avaliação",
    description: "Satisfação dos pacientes",
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  }
]

const certifications = [
  "Acupuntura Tradicional Chinesa",
  "Massagem Terapêutica",
  "Reiki Master",
  "Hipnose Clínica Certificada"
]

export function TrustIndicators() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-4">
        {/* Trust Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustIndicators.map((indicator, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${indicator.bgColor} mb-4`}>
                  <indicator.icon className={`w-6 h-6 ${indicator.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-1">{indicator.title}</h3>
                <p className={`text-sm font-medium ${indicator.color} mb-2`}>{indicator.subtitle}</p>
                <p className="text-xs text-stone-600">{indicator.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-stone-800 mb-6">Certificações Profissionais</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors px-4 py-2"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}