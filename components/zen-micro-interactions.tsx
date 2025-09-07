"use client"

import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
}

export function ZenMicroInteractions() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Create floating zen elements
    const newElements: FloatingElement[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      opacity: Math.random() * 0.3 + 0.1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    }))
    setElements(newElements)

    // Mouse tracking for subtle parallax
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating zen symbols */}
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        >
          {/* Zen symbols rotation */}
          <div className="w-full h-full flex items-center justify-center text-emerald-200 animate-spin-slow">
            {element.id % 4 === 0 && '☯'}
            {element.id % 4 === 1 && '🌸'}
            {element.id % 4 === 2 && '🎋'}
            {element.id % 4 === 3 && '🍃'}
          </div>
        </div>
      ))}

      {/* Gradient orbs with mouse parallax */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-stone-200/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-stone-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
          animationDelay: '2s'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-emerald-300/10 to-stone-300/10 rounded-full blur-2xl animate-pulse"
        style={{
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          animationDelay: '4s'
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          75% {
            transform: translateY(-10px) rotate(270deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-float {
          animation: float var(--duration, 20s) ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

// Scroll-triggered animations component
export function ZenScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    // Observe all elements with zen-animate class
    const elements = document.querySelectorAll('.zen-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <style jsx global>{`
      .zen-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .animate-fade-in-up {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Stagger animation delays */
      .zen-animate:nth-child(1) { transition-delay: 0.1s; }
      .zen-animate:nth-child(2) { transition-delay: 0.2s; }
      .zen-animate:nth-child(3) { transition-delay: 0.3s; }
      .zen-animate:nth-child(4) { transition-delay: 0.4s; }
      .zen-animate:nth-child(5) { transition-delay: 0.5s; }
      .zen-animate:nth-child(6) { transition-delay: 0.6s; }
      
      /* Hover effects for cards */
      .zen-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .zen-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }
      
      /* Breathing animation for important elements */
      .zen-breathe {
        animation: breathe 4s ease-in-out infinite;
      }
      
      @keyframes breathe {
        0%, 100% {
          transform: scale(1);
          opacity: 0.8;
        }
        50% {
          transform: scale(1.05);
          opacity: 1;
        }
      }
      
      /* Zen button hover effects */
      .zen-button {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      
      .zen-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
      }
      
      .zen-button:hover::before {
        left: 100%;
      }
    `}</style>
  )
}