import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8 w-auto" }: LogoProps) {
  return (
    <img 
      src="https://www.orepath.com/logo.svg" 
      alt="Orepath Logo" 
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}
