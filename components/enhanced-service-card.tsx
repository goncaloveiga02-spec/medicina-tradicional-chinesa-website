"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
  benefits: string[]
  duration?: string
  popularity?: "popular" | "recommended" | null
}

export function EnhancedServiceCard({ 
  title, 
  description, 
  icon, 
  href, 
  benefits,
  duration = "60 min",
  popularity 
}: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-stone-50 hover:from-emerald-50 hover:to-white">
      {/* Popularity Badge */}
      {popularity && (
        <div className="absolute top-4 right-4 z-10">
          <Badge 
            variant="secondary" 
            className={`
              ${popularity === 'popular' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'}
              shadow-lg
            `}
          >
            {popularity === 'popular' ? '🔥 Popular' : '⭐ Recomendado'}
          </Badge>
        </div>
      )}

      {/* Floating Background Element */}
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-emerald-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />

      <CardContent className="p-8 relative z-10">
        {/* Icon Section */}
        <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl">{icon}</span>
        </div>

        {/* Title and Duration */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-stone-800 mb-2 group-hover:text-emerald-700 transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-sm text-stone-500 mb-3">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
        </div>

        {/* Description */}
        <p className="text-stone-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Benefits List */}
        <div className="mb-6">
          <ul className="space-y-2">
            {benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start text-sm text-stone-600">
                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="w-full bg-transparent border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white group-hover:shadow-lg transition-all duration-300"
        >
          <Link href={href} className="flex items-center justify-center">
            Saber Mais
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}