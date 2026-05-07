import { motion } from 'motion/react';
import Section from '../components/Section';
import ScrollIndicator from '../components/ScrollIndicator';
import HeroBackground from '../components/HeroBackground';

const team = [
  { name: 'Dr. Michael Chen', role: 'Principal Mining Engineer', exp: '22 Years', bio: 'Specialist in open-pit optimisation and technical studies.' },
  { name: 'Sarah Williams', role: 'Lead Software Architect', exp: '15 Years', bio: 'Driving bespoke algorithm development for mining Industry 4.0.' },
  { name: 'James Henderson', role: 'Director of Advisory', exp: '25 Years', bio: 'Strategic advisor for multi-billion dollar mining capital projects.' },
  { name: 'Elena Rodriguez', role: 'Simulation Specialist', exp: '12 Years', bio: 'Expert in discrete event modelling and port logistics.' },
  { name: 'David Smith', role: 'Senior Mine Planner', exp: '18 Years', bio: 'Practical mine design and production scheduling veteran.' },
  { name: 'Linda Zhang', role: 'ML Engineer', exp: '10 Years', bio: 'Developed proprietary grade prediction and blending models.' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-bg-dark py-4 md:py-8 lg:py-12 border-b border-white/5 relative flex flex-col min-h-[40vh] overflow-hidden">
        <HeroBackground />
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Multi-disciplinary team</span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary via-white/10 to-transparent opacity-30"></div>
            </div>
            <h1 className="heading-font text-5xl md:text-6xl font-bold text-white mb-8">
              Mining expertise meets <br/><span className="text-primary">software innovation.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              Orepath was founded on the belief that traditional mining expertise and cutting-edge software development are not mutually exclusive.
            </p>
          </motion.div>
        </div>
        <ScrollIndicator />
      </div>

      <Section
        number="01"
        title="OUR MISSION"
        subtitle="Bridging the gap between the pit and the code."
      >
        <div className="max-w-3xl space-y-6 text-white/60 group">
          <p className="leading-relaxed">
            Orepath was founded on the belief that traditional mining expertise and cutting-edge software development are not mutually exclusive. We focus on delivering high-impact, targeted solutions that provide immediate value. Whether it's a small miner needing a cost-effective PFS or a tier-1 major seeking a bespoke simulation tool, we approach every task with the same technical rigour.
          </p>
          <div className="pt-6 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-primary font-bold heading-font uppercase text-xs mb-2">Expert Advisory</h4>
              <p className="text-xs">Precision planning and strategic studies.</p>
            </div>
            <div>
              <h4 className="text-accent-cyan font-bold heading-font uppercase text-xs mb-2">Innovative Tech</h4>
              <p className="text-xs">Bespoke software for complex data environments.</p>
            </div>
          </div>
        </div>
      </Section>

      <section className="py-16 bg-bg-panel border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-font text-3xl font-bold text-white mb-4 uppercase">THE CORE TEAM</h2>
            <div className="gradient-line w-24 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-bg-card p-8 rounded-lg border border-white/5 flex flex-col items-center text-center group transition-colors hover:border-primary/50"
              >
                <div className="w-24 h-24 bg-bg-panel rounded-full mb-6 overflow-hidden border-2 border-white/10 group-hover:border-primary transition-colors">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-white font-bold heading-font mb-1 uppercase tracking-wider">{member.name}</h4>
                <p className="text-primary text-xs font-bold uppercase mb-4 tracking-widest">{member.role}</p>
                <div className="text-white/40 text-xs mb-4 uppercase font-bold tracking-widest bg-bg-panel px-3 py-1 rounded">Exp: {member.exp}</div>
                <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 border-t border-white/5 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-12">Accreditations & Partners</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {/* Dummy Logos */}
            {[
              { name: 'AUSIMM', letter: 'A', class: 'rounded-full italic' },
              { name: 'PEXA', letter: 'P', class: 'rounded' },
              { name: 'IEEE', letter: 'I', class: 'rotate-45', innerClass: '-rotate-45' },
              { name: 'SITE SAFE', letter: 'S', class: 'rounded-lg' }
            ].map((partner, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.15, color: '#FFD700' }}
                className="flex flex-col items-center gap-2 group cursor-pointer text-white/30 transition-colors"
              >
                <div className={`w-12 h-12 border-2 border-current flex items-center justify-center font-bold text-lg ${partner.class}`}>
                  <div className={partner.innerClass}>{partner.letter}</div>
                </div>
                <span className="text-[10px] font-bold tracking-widest">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
