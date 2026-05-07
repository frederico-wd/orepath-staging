import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Software', path: '/software' },
  { name: 'Consulting', path: '/consulting' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-panel/90 backdrop-blur-md border-b border-white/10 uppercase tracking-widest text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group/logo">
            <Logo className="h-10 w-auto group-hover/logo:scale-110 transition-transform duration-300" />
            <motion.span 
              className="heading-font text-2xl font-bold tracking-tighter text-white flex normal-case"
              whileHover="hover"
            >
              {"Orepath".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className={`relative inline-block ${i >= 3 ? 'text-primary' : ''}`}
                  variants={{
                    hover: {
                      opacity: [0, 1],
                      x: [-5, 0],
                      filter: ["blur(4px)", "blur(0px)"],
                      transition: { 
                        delay: i * 0.05, 
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative heading-font font-semibold transition-colors hover:text-primary py-1 ${
                  link.name === 'Contact' 
                    ? 'px-6 py-2 border border-white/20 rounded-full hover:border-primary' 
                    : location.pathname === link.path ? 'text-primary' : 'text-white/60'
                }`}
              >
                {link.name}
                {link.name !== 'Contact' && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/40 hover:text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg-dark border-b border-white/5"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-semibold heading-font ${
                  location.pathname === link.path ? 'text-primary' : 'text-white/40'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
