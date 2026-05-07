import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Phone } from 'lucide-react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import HeroBackground from '../components/HeroBackground';

export default function Contact() {
  return (
    <div className="pt-20 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none">
        <HeroBackground />
      </div>
      <div className="relative z-10">
        <Section
        number="01"
        title="get in touch"
        subtitle="Our team is ready to discuss your mining challenges. Whether you need immediate site relief or a multi-year digital transformation strategy, we are here to help."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h4 className="heading-font text-xl font-bold text-white mb-6 uppercase tracking-wider">Project Inquiries</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email</p>
                    <a href="mailto:projects@orepath.com" className="text-white hover:text-primary transition-colors">projects@orepath.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Phone</p>
                    <a href="tel:+61812345678" className="text-white hover:text-primary transition-colors">+61 (0) 8 1234 5678</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded">
                    <Linkedin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Networking</p>
                    <a href="#" className="text-white hover:text-primary transition-colors">LinkedIn Profile</a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="heading-font text-xl font-bold text-white mb-6 uppercase tracking-wider">Our Headquarters</h4>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Level 12, Mining Tower<br />
                    101 St Georges Terrace<br />
                    Perth, WA 6000<br />
                    Australia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Section>
      
      {/* Map Placeholder */}
      <div className="w-full h-[400px] bg-slate-900 border-t border-slate-800 relative overflow-hidden flex items-center justify-center group">
         <div className="absolute inset-0 grayscale opacity-20 group-hover:opacity-40 transition-opacity">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
              alt="Map" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
         </div>
         <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-sm rotate-45 mx-auto mb-6">
              <MapPin size={24} className="text-slate-900 -rotate-45" />
            </div>
            <p className="heading-font text-white font-bold uppercase tracking-widest">Global Reach • Australian Rooted</p>
         </div>
        </div>
      </div>
    </div>
  );
}
