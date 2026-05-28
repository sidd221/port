import { motion } from 'motion/react';
import { Download, Loader2 } from 'lucide-react';
import { Suspense, lazy, useState, useEffect } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    // Delay the heavy 3D scene initialization until the page has visually rendered
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center pt-24 md:pt-32 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {loadSpline ? (
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center bg-transparent">
              <Loader2 className="w-10 h-10 text-indigo-500/50 animate-spin" />
            </div>
          }>
            <Spline scene="https://prod.spline.design/MYBV0d6tZsu5lF36/scene.splinecode" />
          </Suspense>
        ) : null}
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/30 dark:bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 -left-10 w-72 h-72 bg-purple-500/30 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500/30 dark:bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 shadow-sm backdrop-blur-sm">
            Available for new opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter mb-6 drop-shadow-sm">
            Hi, I'm <span className="text-gradient">Siddhant Sinha</span>
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-8 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:gap-x-4 drop-shadow-sm">
            <span>SEO Expert</span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>
            <span>Web Developer</span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>
            <span>AI Solutions</span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>
            <span>Technical Support</span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>
            <span>Customer Support</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            I craft visually stunning, high-performing websites powered by modern tech and intelligent AI automation, helping progressive brands grow and dominate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
            <a href="/SiddhantSinhag.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40">
              Download Resume
              <Download className="group-hover:translate-y-1 transition-transform" size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
