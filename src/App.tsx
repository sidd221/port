import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactFooterWrapper from './components/ContactFooterWrapper';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-blue-500/30 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Certificates />
      </main>

      <ContactFooterWrapper>
        <Contact />
        <Footer />
      </ContactFooterWrapper>
    </div>
  );
}
