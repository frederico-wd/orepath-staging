import React from 'react';

interface HeroBackgroundProps {
  className?: string;
}

export default function HeroBackground({ className = "" }: HeroBackgroundProps) {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="absolute inset-0 opacity-[0.15] bg-cover bg-top"
        style={{ backgroundImage: 'url("https://www.orepath.com/hero-image.jpg")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% via-bg-dark/80 via-70% to-bg-dark" />
    </div>
  );
}
