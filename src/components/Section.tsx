import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  number?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ number, title, subtitle, children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`relative py-16 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-16">
          {number && <span className="section-number select-none">{number}</span>}
          <div className="flex flex-col gap-2">
            <h2 className="heading-font text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">
              {title}
            </h2>
            <div className="gradient-line w-24 mb-4" />
            {subtitle && (
              <p className="text-slate-400 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}
