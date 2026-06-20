import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'portfolio', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 md:top-4 w-full md:max-w-6xl md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 px-6 shadow-sm rounded-none md:rounded-2xl' : 'py-6 px-6 bg-transparent md:dark:bg-white/5 md:dark:backdrop-blur-md md:dark:border md:dark:border-white/10 md:rounded-2xl'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2 text-2xl font-display font-bold text-gradient">
              <img src="/my-logo.png" alt="Logo" loading="eager" fetchPriority="high" className="h-8 w-auto object-contain" />
              Siddhant Sinha
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`relative py-1 text-sm font-medium transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-slate-50">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl z-50 rounded-b-2xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800'}`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
