import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ScrollIndicator from '../components/ScrollIndicator';
import HeroBackground from '../components/HeroBackground';

const posts = [
  {
    id: 1,
    title: 'Optimising NPV via Discrete Event Simulation',
    category: 'Technical Articles',
    date: 'March 15, 2024',
    excerpt: 'How simulation models can identify non-obvious bottlenecks in the haulage circuit and increase overall project value.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: 'Case Study: PFS for the Gold Valley Expansion',
    category: 'Case Studies',
    date: 'February 28, 2024',
    excerpt: 'Detailed breakdown of how our advisory team accelerated the feasibility study for a Tier-2 gold operation in WA.',
    image: 'https://images.unsplash.com/photo-1624365169364-0640dd10e180?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: 'Digital Transformation in Mid-tier Mining',
    category: 'News',
    date: 'February 10, 2024',
    excerpt: 'Why automation and bespoke software are no longer just for the majors. Bridging the digital divide for smaller operators.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    title: 'The Future of Stockpile Grade Prediction',
    category: 'Technical Articles',
    date: 'January 22, 2024',
    excerpt: 'Leveraging machine learning to predict compositional variance in iron ore stockpiles with high confidence levels.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
  },
];

const categories = ['All', 'Case Studies', 'Technical Articles', 'News'];

export default function Blog() {
  return (
    <div className="pt-20 bg-bg-dark text-white/80">
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
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Technical Insights & News</span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary via-white/10 to-transparent opacity-30"></div>
            </div>
            <h1 className="heading-font text-5xl md:text-6xl font-bold text-white mb-8">
              Blog
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              Exploring the intersection of mining engineering and software development. Shared knowledge from our advisory and tech teams.
            </p>
          </motion.div>
        </div>
        <ScrollIndicator />
      </div>

      <section className="pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-bg-panel border border-white/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{post.category}</span>
                  <span className="w-1 h-1 bg-white/10 rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{post.date}</span>
                </div>
                <h3 className="heading-font text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:gap-4 transition-all">
                  Read More <span className="text-primary">→</span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
           <button className="border border-white/10 hover:border-primary text-white font-bold heading-font text-xs uppercase tracking-[0.3em] px-12 py-4 rounded transition-all">
             Load More Articles
           </button>
        </div>
      </div>
    </section>
  </div>
);
}
