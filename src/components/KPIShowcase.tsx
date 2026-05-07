import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const kpis = [
  { value: '87,000+', label: 'Combined Project Hours', color: 'text-primary' },
  { value: '12+', label: 'Proprietary Tech Tools', color: 'text-accent-cyan' },
  { value: '45+', label: 'Mines Optimized Globally', color: 'text-accent-magenta' },
  { value: '100%', label: 'Delivery Track Record', color: 'text-accent-green' },
];

export default function KPIShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-t border-white/5">
      {kpis.map((kpi, i) => (
        <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className={`text-3xl md:text-4xl font-bold heading-font mb-2 ${kpi.color}`}>
            {kpi.value}
          </div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold leading-tight">
            {kpi.label}
          </div>
        </div>
      ))}
    </div>
  );
}
