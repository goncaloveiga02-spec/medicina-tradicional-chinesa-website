"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { FloatingContact } from "@/components/floating-contact";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";
import { MessageCircle, Star, Award, Users, Clock, Sparkles } from "lucide-react";
import { AcupunctureIcon, MassageIcon, ReikiIcon, HypnosisIcon } from "@/components/service-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingContact />

      {/* Hero Section */}
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" role="banner" aria-labelledby="hero-title">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/zen-hero-bg.webp" 
              alt="Zen background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-stone-900/40 via-stone-800/30 to-stone-900/35"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-stone-900/20"></div>
          </div>
          

          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
          
              <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 leading-tight">
                Marlene Martins
                <br />
                <span className="text-emerald-300 font-light text-2xl md:text-4xl lg:text-5xl">Medicina Tradicional Chinesa</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                Acupuntura • Massagem Terapêutica • Reiki • Hipnose
                <br />
                <span className="text-lg md:text-xl text-white mt-2 block font-semibold">
                  Descubra o equilíbrio perfeito entre corpo e mente
                </span>
              </p>
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-light px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Olá! Gostaria de agendar uma consulta. Pode ajudar-me com os horários disponíveis?"
                  );
                  window.open(`https://wa.me/351910784945?text=${message}`, "_blank");
                }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                AGENDAR CONSULTA
              </Button>
            </div>
          </div>
          
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-to-b from-stone-50 to-white" aria-labelledby="about-title">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <h2 id="about-title" className="text-4xl md:text-5xl font-light text-stone-800 mb-8 leading-tight">
                  Sobre Marlene Martins
                  <br />
                  <span className="text-emerald-600 text-2xl md:text-3xl">Médica de Medicina Tradicional Chinesa</span>
                </h2>
                
                {/* Badge de Experiência */}
                <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                  <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    +15 Anos de Experiência
                  </div>
                  <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Avaliação 5★ Google
                  </div>
                </div>
                
                <div className="space-y-6 text-stone-600 leading-relaxed">
                  <p className="text-lg">
                    <strong>Marlene Martins</strong> é uma acupunturista certificada especializada em medicina tradicional chinesa, dedicando-se a tratamentos personalizados que respeitam a individualidade de cada pessoa.
                  </p>
                  <p className="hidden md:block text-base">
                    A sua abordagem combina técnicas ancestrais milenares com conhecimento moderno, criando um ambiente de cura que promove o equilíbrio natural do corpo e da mente através de <strong>acupuntura</strong>, <strong>massagem terapêutica</strong>, <strong>reiki</strong> e <strong>hipnose</strong>.
                  </p>
                  <p className="text-base">
                    Cada sessão é cuidadosamente planeada para suas necessidades específicas, proporcionando uma experiência transformadora em <strong>Samora Correia</strong>.
                  </p>
                </div>
              </div>
              
              {/* Imagem da Marlene Martins */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src="/images/marlene3.webp" 
                    alt="Marlene Martins - Acupunturista Certificada"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border-2 border-stone-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-800 mb-1">15+</div>
                  <div className="text-sm text-stone-600 font-medium uppercase tracking-wide">Anos</div>
                  <div className="text-xs text-amber-600 mt-1">Experiência</div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white" aria-labelledby="services-title">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-emerald-600 text-lg font-light tracking-wider uppercase mb-4 block">
                Nossos Serviços
              </span>
              <h2 id="services-title" className="text-4xl md:text-5xl font-light text-stone-800 mb-8">
                Tratamentos Especializados
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a href="/servicos/acupuntura" className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200 hover:border-emerald-300 cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <AcupunctureIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-4">Acupuntura</h3>
                    <p className="text-stone-600">Técnica milenar para equilibrar a energia vital e promover a cura natural.</p>
                  </CardContent>
                </Card>
              </a>
              
              <a href="/servicos/massagem-terapeutica" className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200 hover:border-emerald-300 cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <MassageIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-4">Massagem Terapêutica</h3>
                    <p className="text-stone-600">Relaxamento profundo e alívio de tensões musculares.</p>
                  </CardContent>
                </Card>
              </a>
              
              <a href="/servicos/reiki" className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200 hover:border-emerald-300 cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <ReikiIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-4">Reiki</h3>
                    <p className="text-stone-600">Canalização de energia universal para harmonizar corpo e mente.</p>
                  </CardContent>
                </Card>
              </a>
              
              <a href="/servicos/hipnose" className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200 hover:border-emerald-300 cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <HypnosisIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-4">Hipnose</h3>
                    <p className="text-stone-600">Técnica para acessar o subconsciente e promover mudanças positivas.</p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Perguntas Frequentes sobre a Dra. Marlene Martins
              </h2>
              <p className="text-xl text-gray-600">
                Esclareça as suas dúvidas sobre medicina tradicional chinesa e acupuntura
              </p>
            </div>
            <FAQSection faqs={[
              {
                question: "Qual é a formação da Dra. Marlene Martins?",
                answer: "A Dra. Marlene Martins é médica especializada em Medicina Tradicional Chinesa com formação académica rigorosa. Possui certificação em acupuntura e anos de experiência clínica, seguindo as diretrizes da Organização Mundial da Saúde para formação em MTC."
              },
              {
                question: "A acupuntura é segura quando praticada por um médico?",
                answer: "Sim, a acupuntura praticada por médicos qualificados é extremamente segura. A Dra. Marlene utiliza agulhas estéreis descartáveis e segue todos os protocolos de segurança médica, garantindo um tratamento sem riscos para os pacientes."
              },
              {
                question: "Como é feito o diagnóstico na consulta?",
                answer: "O diagnóstico combina métodos da medicina ocidental e tradicional chinesa. A Dra. Marlene realiza anamnese completa, exame físico, palpação do pulso, inspeção da língua e, quando necessário, solicita exames complementares para confirmação diagnóstica."
              },
              {
                question: "Que condições podem ser tratadas?",
                answer: "A Medicina Tradicional Chinesa trata uma ampla variedade de condições: dores crónicas, ansiedade, depressão, enxaquecas, insónia, problemas digestivos, distúrbios hormonais e muitas outras patologias reconhecidas pela OMS."
              },
              {
                question: "Quantas sessões são necessárias?",
                answer: "O número de sessões varia conforme a condição e resposta individual. Condições agudas podem melhorar em 3-5 sessões, enquanto problemas crónicos podem necessitar de 10-15 sessões. A Dra. Marlene avalia cada caso individualmente."
              },
              {
                question: "A acupuntura dói?",
                answer: "A acupuntura geralmente não causa dor significativa. As agulhas são muito finas e a inserção é suave. Alguns pacientes sentem uma ligeira sensação de formigueiro ou peso, que é normal e indica que o ponto foi ativado corretamente."
              },
              {
                question: "Posso combinar com outros tratamentos médicos?",
                answer: "Sim, a Medicina Tradicional Chinesa é complementar à medicina convencional. A Dra. Marlene trabalha em colaboração com outros profissionais de saúde, garantindo uma abordagem integrada e segura para cada paciente."
              },
              {
                question: "Como me preparar para a primeira consulta?",
                answer: "Traga todos os exames médicos recentes, lista de medicamentos em uso e histórico médico completo. Vista roupas confortáveis que permitam acesso aos pontos de acupuntura. Evite refeições pesadas antes da consulta."
              }
            ]} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-stone-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-8">
              Pronto para começar a sua jornada de bem-estar?
            </h2>
            <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">
              Agende a sua consulta hoje e descubra como a medicina tradicional chinesa pode transformar a sua vida.
            </p>
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                const message = encodeURIComponent(
                  "Olá! Gostaria de agendar uma consulta. Pode ajudar-me com os horários disponíveis?"
                );
                window.open(`https://wa.me/351910784945?text=${message}`, "_blank");
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              AGENDAR CONSULTA AGORA
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
