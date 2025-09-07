"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs: FAQItem[]
  className?: string
}

export function FAQSection({ 
  title = "Perguntas Frequentes", 
  subtitle = "Esclareça as suas principais dúvidas sobre o tratamento",
  faqs, 
  className = "" 
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      
      <section className={`py-12 sm:py-16 lg:py-20 bg-white ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <HelpCircle className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(index)
              
              return (
                <Card 
                  key={index} 
                  className="border border-stone-200 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-stone-50 transition-colors duration-200"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <h3 className="text-base sm:text-lg font-medium text-stone-800 pr-4 leading-relaxed">
                        {faq.question}
                      </h3>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-stone-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div 
                        id={`faq-answer-${index}`}
                        className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-100"
                      >
                        <div className="pt-4 transform transition-transform duration-300 ease-in-out">
                          {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                            <p key={pIndex} className="mb-3 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}