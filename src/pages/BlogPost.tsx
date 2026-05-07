import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import Section from '../components/Section';
import HeroBackground from '../components/HeroBackground';

const posts = [
  {
    id: 1,
    title: 'Optimising NPV via Discrete Event Simulation',
    category: 'Technical Articles',
    date: 'March 15, 2024',
    author: 'Elena Rodriguez',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>In the complex environment of modern mining, simple linear models often fail to capture the dynamic interactions between various operational components. Discrete Event Simulation (DES) provides a powerful sandbox for engineers to test and validate operational changes before they are implemented on-site.</p>
      
      <h3>The Challenge</h3>
      <p>Our client was facing unexpected bottlenecks in their primary haulage circuit, despite fleet size increases. Traditional spreadsheet-based planning suggested that capacity should be sufficient, but real-world throughput was lagging by 15%.</p>
      
      <h3>The Simulation Approach</h3>
      <p>By building a high-fidelity DES model, we were able to visualize the interactions between shovel wait times, crusher queues, and seasonal weather impacts. The simulation revealed that the bottleneck wasn't the truck count, but rather the bunching effect at the primary crusher during operator shift changes.</p>
      
      <blockquote>
        "Simulation-driven optimization allowed us to find hidden capacity without a single dollar of additional capital expenditure."
      </blockquote>
      
      <h3>Results</h3>
      <p>By implementing a staggered shift change strategy identified through the model, the operation saw a 12% increase in total moved tonnes within the first quarter. This translated to an estimated NPV uplift of $8.5M over the life of the project phase.</p>
    `,
  },
  {
    id: 2,
    title: 'Case Study: PFS for the Gold Valley Expansion',
    category: 'Case Studies',
    date: 'February 28, 2024',
    author: 'James Henderson',
    image: 'https://images.unsplash.com/photo-1574689232150-0448100589d9?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>The Gold Valley Expansion project required a rigorous Pre-Feasibility Study (PFS) to secure board approval for a secondary decline development. Orepath was contracted to lead the mining engineering chapters of the study.</p>
      
      <h3>Scope of Work</h3>
      <p>Our mandate included geotechnical integration, pit-to-underground transition optimization, and multi-scenario financial modeling. We focused on identifying the optimal crossover point where underground development became more value-accretive than continued open-pit expansion.</p>
      
      <h3>Innovative Methodologies</h3>
      <p>Using our proprietary optimization scripts, we modeled 24 different production rates and development sequences. This level of granularity allowed the client to present a robust, risk-adjusted case to their investment committee.</p>
      
      <h3>Outcome</h3>
      <p>The PFS was delivered two weeks ahead of schedule and under budget. The project received full funding approval, and Gold Valley is now on track for first ore from the decline in Q4 2025.</p>
    `,
  },
  {
    id: 3,
    title: 'Digital Transformation in Mid-tier Mining',
    category: 'News',
    date: 'February 10, 2024',
    author: 'Sarah Williams',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Digital transformation is often viewed as the exclusive playground of tier-1 mining majors with massive innovation budgets. However, Orepath is proving that smaller, mid-tier operators can reap significant rewards from targeted digital investments.</p>
      
      <h3>The Democratization of Tech</h3>
      <p>Cloud computing and flexible software architectures are lowering the entry barrier for advanced analytics. Mid-tier miners often have the advantage of being more agile, allowing them to implement and see results from new technology much faster than their larger counterparts.</p>
      
      <h3>Focus on ROI</h3>
      <p>For smaller miners, every dollar must count. We advocate for a 'modular transformation' approach—starting with high-impact, low-complexity tools like real-time stockpile monitors before moving to full-site automation.</p>
      
      <h3>Conclusion</h3>
      <p>The digital divide is closing. In the next 5 years, operational efficiency driven by bespoke software will be the primary differentiator in the mid-tier mining space.</p>
    `,
  },
  {
    id: 4,
    title: 'The Future of Stockpile Grade Prediction',
    category: 'Technical Articles',
    date: 'January 22, 2024',
    author: 'Dr. Linda Zhang',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Controlling grade variability at the plant feed is one of the most significant challenges in iron ore and bulk commodity operations. Traditional stockpile management relies on simplistic averaging, which can lead to costly plant upsets.</p>
      
      <h3>Enter Machine Learning</h3>
      <p>By integrating historical assay data, real-time belt scanners, and 3-D volumetric models, we can now predict stockpile compositions with over 94% confidence. This level of foresight allows for much more aggressive reclaim strategies and superior product consistency.</p>
      
      <h3>3-D Volumetric Advantage</h3>
      <p>Our software tracks the age and origin of every tonne on the pad. When combined with reclaim sequence models, we can provide the control room with a real-time 'expected grade' dashboard that updates as the reclaim wheels turn.</p>
      
      <h3>Impact on Value</h3>
      <p>Reducing variance doesn't just improve plant recovery; it allows operations to blend lower-grade marginal material much more effectively, ultimately extending Mine Life and increasing the overall resource payoff.</p>
    `,
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="heading-font text-4xl font-bold text-white mb-8">Post not found</h1>
        <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-bg-dark text-slate-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none">
        <HeroBackground />
      </div>
      <article className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={12} /> Back to Insights
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-6 mb-6 text-[10px] uppercase tracking-[0.2em] font-bold">
              <div className="flex items-center gap-2 text-primary"><Tag size={12} /> {post.category}</div>
              <div className="flex items-center gap-2 text-white/40"><Calendar size={12} /> {post.date}</div>
              <div className="flex items-center gap-2 text-white/40"><User size={12} /> {post.author}</div>
            </div>
            <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="aspect-[21/9] rounded-lg overflow-hidden border border-white/10 mb-12">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 blog-content">
              <div 
                className="prose prose-invert prose-slate max-w-none prose-headings:heading-font prose-h3:text-white prose-blockquote:border-primary prose-blockquote:text-white/80 prose-blockquote:bg-bg-panel prose-blockquote:p-6 prose-blockquote:rounded-r font-sans leading-loose text-white/70"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
              
              <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors">
                       <Share2 size={14} /> Share Post
                    </button>
                 </div>
              </div>
            </div>
            
            <aside className="lg:col-span-4 space-y-12">
               <div className="space-y-6">
                  <h4 className="heading-font text-white font-bold uppercase tracking-widest text-xs mb-2">Related Topics</h4>
                  <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-white/40">NPV Optimisation</span>
                     <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-white/40">Simulation</span>
                     <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-white/40">Mining 4.0</span>
                  </div>
               </div>
            </aside>
          </div>
        </motion.div>
      </article>

      <section className="bg-bg-panel py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="heading-font text-3xl font-bold text-white mb-6">Ready to optimize your operation?</h2>
           <p className="text-white/60 mb-10">Our advisory team is ready to help you navigate your technical challenges with data-driven precision.</p>
           <Link to="/contact" className="inline-block bg-primary text-black px-10 py-5 rounded-sm font-bold heading-font uppercase tracking-widest text-[10px] hover:brightness-110 shadow-xl shadow-primary/10">
             Get Specialist Advisory
           </Link>
        </div>
      </section>
    </div>
  );
}
