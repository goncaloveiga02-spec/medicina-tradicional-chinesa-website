"use client"

import Image from "next/image"

interface ZenIconProps {
  iconPath: string
  alt?: string
  className?: string
}

export function ZenIcon({ iconPath, alt = "Zen Icon", className = "w-12 h-12" }: ZenIconProps) {
  // If it's a path to an SVG file, render it as an image
  if (iconPath.startsWith("/icons/") && iconPath.endsWith(".svg")) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <Image
          src={iconPath}
          alt={alt}
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
    )
  }
  
  // If it's an emoji or text, render it as text
  return (
    <div className={`flex items-center justify-center text-4xl sm:text-5xl ${className}`}>
      {iconPath}
    </div>
  )
}