"use client"

import Image from 'next/image';

// Custom Icons for Services using WebP images
export const AcupunctureIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <Image
    src="/images/acupunture (1).webp"
    alt="Acupuntura"
    width={32}
    height={32}
    className={`${className} object-contain`}
  />
);

export const MassageIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <Image
    src="/images/massage (1).webp"
    alt="Massagem Terapêutica"
    width={32}
    height={32}
    className={`${className} object-contain`}
  />
);

export const ReikiIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <Image
    src="/images/reiki (1).webp"
    alt="Reiki"
    width={32}
    height={32}
    className={`${className} object-contain`}
  />
);

export const HypnosisIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <Image
    src="/images/hypnotism.webp"
    alt="Hipnose"
    width={32}
    height={32}
    className={`${className} object-contain`}
  />
);

// Helper function to get service icon by name
export const getServiceIcon = (serviceName: string, className?: string) => {
  const normalizedName = serviceName.toLowerCase();
  
  if (normalizedName.includes('acupuntura')) {
    return <AcupunctureIcon className={className} />;
  }
  if (normalizedName.includes('massagem')) {
    return <MassageIcon className={className} />;
  }
  if (normalizedName.includes('reiki')) {
    return <ReikiIcon className={className} />;
  }
  if (normalizedName.includes('hipnose')) {
    return <HypnosisIcon className={className} />;
  }
  
  // Default fallback
  return <AcupunctureIcon className={className} />;
};