import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollingMarquee from './components/ScrollingMarquee';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-blue-500/30 text-slate-900 dark:text-slate-50">
      <Navbar />
      
      <main>
        <Hero />
        <ScrollingMarquee />
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
          <About />
          <Services />
          <Projects />
          <Certificates />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
