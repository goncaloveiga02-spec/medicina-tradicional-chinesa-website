"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Leaf, Clock, Users, Award } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Abordagem Holística",
    description: "Tratamos a pessoa como um todo, não apenas os sintomas",
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Brain,
    title: "Técnicas Integradas",
    description: "Combinamos medicina tradicional chinesa com métodos modernos",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Leaf,
    title: "Métodos Naturais",
    description: "Soluções naturais que respeitam o ritmo do seu corpo",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Consultas adaptadas ao seu horário, incluindo fins de semana",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Users,
    title: "Acompanhamento Personalizado",
    description: "Plano de tratamento único para cada paciente",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Award,
    title: "Resultados Comprovados",
    description: "15 anos de experiência com resultados documentados",
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
            Porquê Escolher a{" "}
            <span className="text-emerald-600 font-medium">Marlene Martins</span>?
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Mais do que tratamentos, oferecemos uma jornada de transformação pessoal 
            baseada em conhecimento ancestral e cuidado individualizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Pronta para Começar a Sua Transformação?
            </h3>
            <p className="text-emerald-100 mb-6">
              Agende uma consulta gratuita de 30 minutos para descobrir como podemos ajudar.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  "Olá! Gostaria de agendar uma consulta gratuita de 30 minutos."
                )
                window.open(`https://wa.me/351910784945?text=${message}`, "_blank")
              }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}