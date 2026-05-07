import { motion } from 'motion/react';
import { HardHat, Compass, Ruler, Calendar, Users, BarChart3, Search, PlayCircle, Settings, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import ScrollIndicator from '../components/ScrollIndicator';
import HeroBackground from '../components/HeroBackground';

export default function Consulting() {
  const commodities = ["Iron Ore", "Gold", "Copper", "Bauxite", "Mineral Sands", "Nickel", "Lithium", "Manganese"];
  
  const services = [
    { icon: Search, title: 'Technical Studies', desc: 'Expert Scoping, Pre-Feasibility (PFS), and Feasibility (DFS) studies. We provide in-depth analysis, risk assessment, and strategic recommendations.' },
    { icon: BarChart3, title: 'Reserve Estimation & Audits', desc: 'Accurate ore reserve estimations and comprehensive audits that comply with all major international reporting codes.' },
    { icon: Settings, title: 'Optimisation & Design', desc: 'Pit optimisation, pit/dump design, and mine scheduling. Integrated financial modelling to maximize project NPV.' },
    { icon: Search, title: 'Technical Due Diligence', desc: 'Dual-sided technical reviews or vendor due-diligence to identify key risks and value drivers for acquisitions.' },
    { icon: BarChart3, title: 'ITAR (Independent Review)', desc: 'Independent Technical Assessment Reviews (ITAR). Thorough third-party assessments to identify risks and improvements.' },
    { icon: PlayCircle, title: 'Mine Plan Review', desc: 'Simulation-driven sensitivity analysis to validate and de-risk mine plans before key capital commitments.' },
    { icon: Compass, title: 'Workflow Improvement', desc: 'Review and revise the Basis of Design to optimize efficiency, automate workflows, and reduce operational costs.' },
  ];

  return (
    <div className="pt-20 bg-bg-dark text-slate-200">
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
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Expert mining advisory services</span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary via-white/10 to-transparent opacity-30"></div>
            </div>
            <h1 className="heading-font text-5xl md:text-6xl font-bold text-white mb-8">
              Expert advisory for <br/><span className="text-primary">smarter mining.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              From early scoping studies to active operations, our principal consultants provide world-class expertise across multiple commodities and geographies.
            </p>
          </motion.div>
        </div>
        <ScrollIndicator />
      </div>

      {/* Core Services Section */}
      <Section
        number="01"
        title="Core Advisory Services"
        subtitle="A multidisciplinary team delivering technical excellence."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-bg-panel border border-white/5 rounded-sm group hover:border-primary/50 transition-all"
            >
              <item.icon className="text-primary mb-6" size={32} />
              <h3 className="heading-font font-bold text-white mb-4 text-sm tracking-wider uppercase">{item.title}</h3>
              <p className="text-[11px] text-white/50 leading-relaxed mb-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-bg-card border border-white/5 rounded-sm">
           <h4 className="heading-font text-white font-bold uppercase tracking-widest text-xs mb-4">Additional Services</h4>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-8 text-[11px] text-white/40">
              <div className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"/> Open-pit optimisation & shell generation</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"/> Road, dump & rehab designs</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"/> Scoping, PFS & DFS technical chapters</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"/> Schedule reforecasting & sensitivity</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"/> Operational cost modelling & reduction</div>
              <div className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"/> Landform designs & mining approvals</div>
           </div>
        </div>
      </Section>

      {/* Experience & Credentials Section */}
      <Section
        number="02"
        title="DECADES OF COMBINED EXPERIENCE"
        subtitle="A multidisciplinary team delivering technical excellence."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-white/60 leading-relaxed text-lg">
                Orepath brings a lineage of technical leadership to every partnership. Our multidisciplinary team works on projects across multiple commodities worldwide, assisting at all study and operational levels.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/5">
                 <div>
                    <h4 className="text-white font-bold heading-font uppercase text-xs mb-2">Global Commodities</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Active projects across 5 continents</p>
                 </div>
                 <div>
                    <h4 className="text-white font-bold heading-font uppercase text-xs mb-2">Flexible Roles</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Global advisory and project support</p>
                 </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-8">
               <div className="bg-bg-card p-6 border border-white/5 rounded-sm">
                  <div className="text-3xl font-bold text-primary mb-2">87K+</div>
                  <div className="text-[9px] uppercase tracking-widest font-bold text-white/40">Technical Hours</div>
               </div>
               <div className="bg-bg-card p-6 border border-white/5 rounded-sm">
                  <div className="text-3xl font-bold text-accent-cyan mb-2">45+</div>
                  <div className="text-[9px] uppercase tracking-widest font-bold text-white/40">Mines Audited</div>
               </div>
               <div className="bg-bg-card p-6 border border-white/5 rounded-sm">
                  <div className="text-3xl font-bold text-accent-magenta mb-2">12+</div>
                  <div className="text-[9px] uppercase tracking-widest font-bold text-white/40">Study Leads</div>
               </div>
               <div className="bg-bg-card p-6 border border-white/5 rounded-sm">
                  <div className="text-3xl font-bold text-accent-green mb-2">100%</div>
                  <div className="text-[9px] uppercase tracking-widest font-bold text-white/40">Report Compliance</div>
               </div>
            </div>
        </div>
      </Section>

      {/* Projects & Reputation Section */}
      <Section
        number="03"
        title="Reputation"
        subtitle="Trusted by industry leaders to deliver results on tight schedules."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              quote: "Orepath redesigned 4–5 pits for us in just 2.5 months, resolving significant technical debt that had stalled the project for over a year.",
              author: "Project Manager",
              client: "Mid-tier Gold Operation"
            },
            {
              quote: "The contract tender validation and operational cost management provided by the Orepath team allowed us to fine-tune our waste dump strategies and save millions in capital.",
              author: "Commercial Director",
              client: "Iron Ore Major"
            },
            {
              quote: "A seamless deployment of custom software solutions combined with on-site training. Our engineering team gained confidence in record time.",
              author: "Technical Lead",
              client: "Diversified Mining Services"
            },
            {
              quote: "Excellent help with rehabilitation landform designs and complex mining approvals. Their models were audit-ready and buildable.",
              author: "Approvals Principal",
              client: "Copper Expansion Project"
            }
          ].map((item, i) => (
            <motion.div key={i} className="bg-bg-panel p-10 border border-white/5 rounded-sm relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-primary/10 transition-all"/>
               <p className="text-white/80 italic mb-8 leading-relaxed text-sm relative z-10 font-sans">"{item.quote}"</p>
               <div className="relative z-10 border-l border-primary pl-4">
                  <span className="block text-white font-bold uppercase text-[10px] tracking-widest mb-1">{item.author}</span>
                  <span className="block text-primary text-[9px] uppercase tracking-widest font-bold">{item.client}</span>
               </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-bg-panel border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
           <div className="max-w-3xl mx-auto bg-bg-dark p-8 md:p-12 border border-white/5 rounded shadow-2xl relative">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary via-accent-cyan to-transparent"/>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-8 text-center">Let us help your project</h2>
              <ContactForm />
           </div>
        </div>
      </section>
    </div>
  );
}

// Fixed missing ShieldCheck or other custom icons from previous turn if needed
