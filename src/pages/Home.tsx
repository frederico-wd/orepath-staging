import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowRight, Cpu, HardHat, X, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import KPIShowcase from '../components/KPIShowcase';
import HeroBackground from '../components/HeroBackground';
import InteractiveMiningMap from '../components/InteractiveMiningMap';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const expertiseWords = [
    "3D modelling",
    "consulting",
    "simulation tools",
    "custom software",
    "estimation",
    "cost modelling",
    "auditing"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % expertiseWords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [expertiseWords.length]);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <main className="flex-1 flex flex-col lg:flex-row bg-bg-dark relative items-start">
        {/* Left Content Column */}
        <motion.div 
          layout
          initial={false}
          animate={{ width: (isSidebarOpen && !isMobile) ? '72%' : '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full flex flex-col border-r border-white/5"
        >
          {/* Top Section: Hero */}
          <div className={`px-6 md:px-12 py-8 relative overflow-hidden flex flex-col justify-center min-h-[500px] border-b border-white/5 ${isSidebarOpen ? 'lg:pl-24 xl:pl-32 lg:pr-16' : 'lg:px-20'}`}>
            <div className={!isSidebarOpen ? "max-w-7xl mx-auto w-full" : ""}>
              <HeroBackground />
              <section className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Australian-rooted, global mining proficiency</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary via-white/10 to-transparent opacity-30"></div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="heading-font text-5xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tighter text-balance">
                    Expert <br className="md:hidden" />
                    <span className="inline-block relative h-[1.1em] align-bottom overflow-hidden min-w-[280px] md:min-w-[520px]">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentIndex}
                          initial={{ y: 60, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -60, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="text-primary absolute left-0 whitespace-nowrap"
                        >
                          {expertiseWords[currentIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    <br />
                    for smarter, sustainable mining.
                  </h1>
                  <p className="text-lg md:text-xl text-white/70 max-w-xl mb-12 leading-relaxed">
                    Transforming global mining operations through high-precision technical advisory and bespoke simulation software built for the next generation of industry leaders.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/software"
                      className="bg-primary text-black px-8 py-4 rounded-full font-bold heading-font uppercase tracking-widest text-[10px] hover:bg-yellow-400 transition-all flex items-center gap-2 shadow-xl shadow-primary/10"
                    >
                      Mining Software <ArrowRight size={14} />
                    </Link>
                    <Link
                      to="/consulting"
                      className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-bold heading-font uppercase tracking-widest text-[10px] hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2"
                    >
                      Consultancy Services <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </section>
            </div>
          </div>

          {/* Bottom Section: Services & KPIs */}
          <div className={`px-6 md:px-12 py-12 flex flex-col space-y-12 bg-bg-dark ${isSidebarOpen ? 'lg:pl-24 xl:pl-32 lg:pr-16' : 'lg:px-20'}`}>
            <div className={!isSidebarOpen ? "max-w-7xl mx-auto w-full" : "w-full"}>
              {/* Feature Image Replacement */}
              <InteractiveMiningMap />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                <div>
                  <div className="flex items-center gap-3 mb-6 text-primary">
                    <div className="w-1.5 h-6 bg-primary"></div>
                    <h3 className="font-bold tracking-[0.2em] text-xs">SOFTWARE SOLUTIONS</h3>
                  </div>
                  <ul className="text-sm space-y-4 text-white/50">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>3-D Stockpile Modelling for grade variability control.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Mine Simulation tools to de-risk plans and strategies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Bespoke algorithms and scripts for custom automation.</span>
                    </li>
                  </ul>
                  <Link to="/software" className="mt-8 inline-flex items-center gap-2 text-primary font-bold heading-font text-[10px] uppercase tracking-widest hover:pl-2 transition-all">
                    Explore Software <ArrowRight size={12} />
                  </Link>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-6 text-primary">
                    <div className="w-1.5 h-6 bg-primary"></div>
                    <h3 className="font-bold tracking-[0.2em] text-xs">EXPERT ADVISORY</h3>
                  </div>
                  <ul className="text-sm space-y-4 text-white/50">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Strategic Technical Studies (Scoping, PFS & DFS).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Optimisation, design, and scheduling across all levels.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Independent technical reviews and reserve audits.</span>
                    </li>
                  </ul>
                  <Link to="/consulting" className="mt-8 inline-flex items-center gap-2 text-primary font-bold heading-font text-[10px] uppercase tracking-widest hover:pl-2 transition-all">
                    Technical Advisory <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              <div className="pt-24">
                <KPIShowcase />
              </div>
            </div>
          </div>

          {/* New Bottom Contact Section - Only shown when sidebar is closed */}
          <AnimatePresence>
            {!isSidebarOpen && (
              <motion.section 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="py-24 bg-bg-dark border-t border-white/5"
              >
                <div className="max-w-4xl mx-auto px-6">
                  <div className="text-center mb-12">
                    <h2 className="heading-font text-4xl font-bold text-white mb-4 tracking-tighter uppercase">BEGIN YOUR PROJECT</h2>
                    <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
                      Use this contact form to reach our technical team for advisory or software development inquiries.
                    </p>
                  </div>
                  <div className="bg-bg-dark/50 p-8 md:p-12 rounded border border-white/5 shadow-2xl">
                    <ContactForm />
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Sidebar Section - Hidden on Mobile */}
        <AnimatePresence>
          {isSidebarOpen && !isMobile && (
            <motion.aside 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full lg:w-[28%] bg-bg-dark px-4 pt-1 pb-4 md:px-5 md:pt-2 md:pb-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-120px)] flex flex-col justify-start overflow-y-auto z-20 border-l border-white/5 mx-auto lg:ml-auto"
            >
              <div className="flex flex-col">
                <div className="flex justify-end mb-2">
                  <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors group"
                    aria-label="Close sidebar"
                  >
                    <span>Close form</span>
                    <X size={14} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
                
                {/* Contact Form Container */}
                <div className="flex-1 mb-6 flex flex-col">
                  <ContactForm />
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </main>

      {/* Sticky Accents Bar */}
      <div className="sticky-accent-bar fixed bottom-0 left-0">
        <div className="bg-primary"></div>
        <div className="bg-accent-cyan"></div>
        <div className="bg-accent-magenta"></div>
        <div className="bg-accent-green"></div>
      </div>
    </div>
  );
}
