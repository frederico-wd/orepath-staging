import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <Logo className="h-10 w-auto" />
              <span className="heading-font text-xl font-bold tracking-tighter text-white">
                Ore<span className="text-primary">path</span>
              </span>
            </Link>
            <p className="text-white/40 text-xs leading-relaxed uppercase tracking-widest font-bold">
              Engineering the Future of Mining Operations.
              <br className="mt-2" />
              ACN 663 774 785
            </p>
          </div>

          <div>
            <h4 className="heading-font text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/software" className="hover:text-primary transition-colors">Software Solutions</Link></li>
              <li><Link to="/consulting" className="hover:text-primary transition-colors">Expert Advisory</Link></li>
              <li><Link to="/software" className="hover:text-primary transition-colors">Mine Simulation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="heading-font text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Technical Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="heading-font text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:info@orepath.com" className="hover:text-primary">info@orepath.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={18} className="text-primary" />
                <a href="https://linkedin.com/company/orepath" target="_blank" rel="noreferrer" className="hover:text-primary">linked.in/Orepath</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-xs">Level 12 / 197 St Georges Terrace<br/>Perth WA 6000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Orepath Pty Ltd. ACN 663 774 785. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white/60">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/60">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
