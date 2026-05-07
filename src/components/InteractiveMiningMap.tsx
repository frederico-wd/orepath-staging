import { motion } from 'motion/react';
import { useState } from 'react';

export default function InteractiveMiningMap() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full relative bg-bg-dark rounded border border-white/5 overflow-hidden shadow-2xl mb-8 group cursor-pointer aspect-[21/9]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100 opacity-80'}`}
      >
        <source src="https://www.orepath.com/solutions-simu.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative Technical UI elements */}
        <div className="absolute top-4 left-4 flex gap-2 items-center z-10">
          <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-primary animate-pulse' : 'bg-white/20'}`} />
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">MINE SIMULATION #BR_4Z_1L</span>
        </div>
        
        <div className="absolute bottom-4 right-4 text-[8px] font-mono text-white/20 text-right z-10 leading-tight">
          LAT: -31.9505<br />
          LONG: 115.8605<br />
          STATUS: {isHovered ? 'ACTIVE_SIM_LIVE' : 'STANDBY'}
        </div>

        <div className="absolute top-4 right-4 text-[8px] font-bold uppercase tracking-widest text-white/20 z-10">
          Perspective: Isometric Technical
        </div>

        {/* Framing Corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10" />
      </div>
    </motion.div>
  );
}
