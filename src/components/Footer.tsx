import { useState, useEffect, useRef } from 'react';
import { Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollTop(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer ref={footerRef} className="border-t border-white/5 bg-transparent py-12 relative pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-slate-200 dark:border-white/5 pb-8">
          <a href="#home" className="flex items-center gap-2 cursor-pointer pointer-events-auto">
            <span className="text-2xl font-display font-bold text-slate-900 dark:text-white text-gradient">Siddhant Sinha</span>
          </a>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-600 dark:text-slate-400 pointer-events-auto">
            <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Portfolio</a>
          </div>

          <div className="flex gap-4 pointer-events-auto">
            <a aria-label="GitHub" href="https://github.com/sidd221" target="_blank" rel="noreferrer" className="p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:bg-slate-50 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              <Github size={20} />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/siddhant-sinha-06a337b3/" target="_blank" rel="noreferrer" className="p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:bg-slate-50 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Linkedin size={20} />
            </a>
            <a aria-label="Twitter" href="https://x.com/siddhantsinha91" target="_blank" rel="noreferrer" className="p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:bg-slate-50 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300 hover:text-indigo-400 dark:hover:text-indigo-400">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-500 font-medium">
          <p className="pointer-events-auto">&copy; {currentYear} Siddhant Sinha. All rights reserved.</p>
          <p className="pointer-events-auto">Designed By: Siddhant Sinha</p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 z-50 flex items-center justify-center pointer-events-auto ${
          showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
