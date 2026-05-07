import { motion } from 'motion/react';
import { Cpu, Layers, Terminal, ArrowRight, MousePointer2, BookOpen } from 'lucide-react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import ScrollIndicator from '../components/ScrollIndicator';
import HeroBackground from '../components/HeroBackground';

export default function Software() {
  return (
    <div className="pt-20 bg-bg-dark text-slate-200">
      {/* Hero Component */}
      <div className="bg-bg-dark py-4 md:py-8 lg:py-12 border-b border-white/5 relative flex flex-col min-h-[40vh] overflow-hidden">
        <HeroBackground />
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Mining computational tools</span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary via-white/10 to-transparent opacity-30"></div>
            </div>
            <h1 className="heading-font text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
              Bespoke <span className="text-primary">software</span> solutions
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              Orepath provides innovative computational tools and high-fidelity simulation software that empowers mining leaders to make data-driven decisions with confidence.
            </p>
          </motion.div>
        </div>
        <ScrollIndicator />
      </div>

      {/* 3-D Stockpile Modelling */}
      <Section
        number="01"
        title="3-D Stockpile Modelling"
        subtitle="Advanced volumetric modeling for superior grade control."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="heading-font text-3xl font-bold text-white">Precision Volumetric Control</h3>
            <p className="text-white/60 leading-relaxed">
              Our software models the full 3-D formation and reclaiming of stockpiles, providing a digital twin of your inventory. Track material movement seamlessly from pit to plant, optimizing feed blends before they reach the crusher.
            </p>
            <ul className="space-y-3">
              {[
                "Tracks material movement from pit to plant",
                "Optimises feed blends to meet plant constraints",
                "Improves control of grade variability",
                "Visualises complex 3-D stacking formations"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg-panel rounded border border-white/5 overflow-hidden flex items-center justify-center min-h-[300px] lg:h-[400px] shadow-2xl group">
             <video 
               src="https://www.orepath.com/solutions-stockpiler.mp4" 
               className="w-full h-full object-cover"
               autoPlay 
               loop 
               muted 
               playsInline
             />
          </div>
        </div>
      </Section>

      {/* Mine Simulation Tool */}
      <Section
        number="02"
        title="MINE SIMULATION TOOL"
        subtitle="De-risk your mine plans by visualising challenges and testing strategies in a virtual environment."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-bg-card rounded border border-white/5 overflow-hidden flex items-center justify-center min-h-[300px] lg:h-[400px] shadow-2xl">
               <video 
                 src="https://www.orepath.com/solutions-simu.mp4" 
                 className="w-full h-full object-cover"
                 autoPlay 
                 loop 
                 muted 
                 playsInline
               />
            </div>
            <div className="space-y-6">
              <p className="text-white/60 leading-relaxed text-lg">
                Our simulation tools identify bottlenecks in haulage fleets, crushing circuits, and port logistics before they impact your bottom line.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-accent-cyan font-bold uppercase text-xs mb-2 tracking-widest">Planning</h4>
                  <p className="text-xs text-white/50">Improved resource management through data-driven operational scheduling.</p>
                </div>
                <div>
                  <h4 className="text-accent-cyan font-bold uppercase text-xs mb-2 tracking-widest">Decision-making</h4>
                  <p className="text-xs text-white/50">Visualise challenges and test multiple 'what-if' scenarios before deployment.</p>
                </div>
              </div>
            </div>
        </div>
      </Section>

      {/* Custom & Bespoke Software */}
      <Section
        number="03"
        title="Custom & Bespoke Software"
        subtitle="Tailored automation for unique mining environments."
      >
        <div className="max-w-4xl">
          <p className="text-white/60 leading-relaxed mb-8 text-lg">
            When off-the-shelf software fails to meet your specific needs, Orepath steps in. We create bespoke algorithms and scripts designed to solve specific automation or efficiency problems within your unique geological and operational landscape.
          </p>
          <div className="flex flex-wrap gap-4">
             <div className="bg-bg-panel px-6 py-4 rounded border border-white/5 flex items-center gap-3">
                <Terminal size={20} className="text-accent-magenta" />
                <span className="text-xs font-bold uppercase tracking-widest">Custom Scripts</span>
             </div>
             <div className="bg-bg-panel px-6 py-4 rounded border border-white/5 flex items-center gap-3">
                <Cpu size={20} className="text-accent-magenta" />
                <span className="text-xs font-bold uppercase tracking-widest">Bespoke Algorithms</span>
             </div>
             <div className="bg-bg-panel px-6 py-4 rounded border border-white/5 flex items-center gap-3">
                <Terminal size={20} className="text-accent-magenta" />
                <span className="text-xs font-bold uppercase tracking-widest">Automation Logic</span>
             </div>
          </div>
        </div>
      </Section>

      {/* Training & Implementation Support */}
      <section className="py-16 bg-bg-panel border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-8">
              <div className="w-16 h-1 w-16 bg-primary mb-8" />
              <h2 className="heading-font text-4xl font-bold text-white tracking-tighter uppercase">TRAINING & <br/><span className="text-primary">IMPLEMENTATION</span></h2>
              <p className="text-white/60 leading-relaxed">
                Our consultants are technical experts who combine mining and software experience to ensure you gain maximum proficiency. We provide tailored training for any software package you select.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="shrink-0 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold text-xs">1</div>
                   <div>
                     <h4 className="text-white font-bold text-sm mb-1">OODA-loop Principles</h4>
                     <p className="text-[10px] text-white/50 uppercase tracking-widest">Observe • Orient • Decide • Act</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="shrink-0 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold text-xs">2</div>
                   <div>
                     <h4 className="text-white font-bold text-sm mb-1">Specific Milestones</h4>
                     <p className="text-[10px] text-white/50 uppercase tracking-widest">Structured delivery for measurable growth</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-bg-dark p-8 md:p-12 rounded border border-white/5 shadow-2xl">
                <h3 className="heading-font text-2xl font-bold text-white mb-8 text-center">Let us help your project</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
