"use client"

import { useEffect, useState } from "react"
import { Star, Users, Clock, MapPin } from "lucide-react"

interface RecentBooking {
  name: string
  location: string
  timeAgo: string
  service: string
}

interface LiveStats {
  totalPatients: number
  averageRating: number
  totalReviews: number
  patientsThisWeek: number
}

export function LiveSocialProof() {
  const [currentBooking, setCurrentBooking] = useState(0)
  const [stats, setStats] = useState<LiveStats>({
    totalPatients: 847,
    averageRating: 4.9,
    totalReviews: 156,
    patientsThisWeek: 23
  })

  const recentBookings: RecentBooking[] = [
    {
      name: "Maria S.",
      location: "Samora Correia",
      timeAgo: "há 12 minutos",
      service: "Acupuntura para dores nas costas"
    },
    {
      name: "João P.",
      location: "Benavente",
      timeAgo: "há 28 minutos",
      service: "Tratamento de ansiedade"
    },
    {
      name: "Ana R.",
      location: "Salvaterra de Magos",
      timeAgo: "há 45 minutos",
      service: "Acupuntura para enxaquecas"
    },
    {
      name: "Carlos M.",
      location: "Coruche",
      timeAgo: "há 1 hora",
      service: "Tratamento de stress"
    },
    {
      name: "Sofia L.",
      location: "Samora Correia",
      timeAgo: "há 2 horas",
      service: "Acupuntura para insónia"
    }
  ]

  useEffect(() => {
    // Rotate through recent bookings
    const interval = setInterval(() => {
      setCurrentBooking((prev) => (prev + 1) % recentBookings.length)
    }, 4000)

    // Simulate live stats updates
    const statsInterval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalPatients: prev.totalPatients + Math.floor(Math.random() * 2),
        patientsThisWeek: prev.patientsThisWeek + Math.floor(Math.random() * 2)
      }))
    }, 30000)

    return () => {
      clearInterval(interval)
      clearInterval(statsInterval)
    }
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-3 max-w-sm">
      {/* Recent Booking Notification */}
      <div className="bg-white/95 backdrop-blur-sm border border-emerald-200 rounded-lg p-4 shadow-lg animate-slide-in-left">
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mt-2"></div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <Users className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-gray-900">
                {recentBookings[currentBooking].name}
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-1">
              Marcou: {recentBookings[currentBooking].service}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{recentBookings[currentBooking].location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{recentBookings[currentBooking].timeAgo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Stats */}
      <div className="bg-emerald-50/95 backdrop-blur-sm border border-emerald-200 rounded-lg p-4 shadow-lg">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${
                    i < Math.floor(stats.averageRating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">
              {stats.averageRating}
            </span>
          </div>
          <p className="text-xs text-gray-600 mb-3">
            {stats.totalReviews} avaliações verificadas
          </p>
          
          <div className="grid grid-cols-2 gap-3 text-center">
            <div>
              <div className="text-lg font-bold text-emerald-600">
                {stats.totalPatients.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600">Pacientes tratados</div>
            </div>
            <div>
              <div className="text-lg font-bold text-emerald-600">
                +{stats.patientsThisWeek}
              </div>
              <div className="text-xs text-gray-600">Esta semana</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white/95 backdrop-blur-sm border border-emerald-200 rounded-lg p-3 shadow-lg">
        <div className="flex items-center justify-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Certificada</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Segura</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-600">Garantida</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}

// Floating Review Component
export function FloatingReview() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      name: "Teresa M.",
      rating: 5,
      text: "Incrível! As minhas dores de cabeça desapareceram completamente após 3 sessões.",
      condition: "Enxaquecas crónicas"
    },
    {
      name: "Manuel R.",
      rating: 5,
      text: "Profissional excecional. Sinto-me muito mais calmo e equilibrado.",
      condition: "Ansiedade e stress"
    },
    {
      name: "Carla S.",
      rating: 5,
      text: "Finalmente consigo dormir bem! Recomendo vivamente.",
      condition: "Insónia"
    }
  ]

  useEffect(() => {
    const showReview = () => {
      setIsVisible(true)
      setTimeout(() => setIsVisible(false), 6000)
    }

    // Show first review after 10 seconds
    const initialTimeout = setTimeout(showReview, 10000)
    
    // Then show reviews every 25 seconds
    const interval = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % reviews.length)
      showReview()
    }, 25000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  if (!isVisible) return null

  const review = reviews[currentReview]

  return (
    <div className="fixed top-20 right-4 z-50 max-w-xs animate-slide-in-right">
      <div className="bg-white/95 backdrop-blur-sm border border-emerald-200 rounded-lg p-4 shadow-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-emerald-600">
              {review.name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="font-medium text-sm text-gray-900">{review.name}</div>
            <div className="flex">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-2 italic">"{review.text}"</p>
        <div className="text-xs text-emerald-600 font-medium">
          Tratamento: {review.condition}
        </div>
        <div className="absolute -top-2 -right-2">
          <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
          <div className="absolute top-0 w-4 h-4 bg-emerald-500 rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}