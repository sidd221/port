import { Suspense, lazy, useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

// Pre-warm Spline bundle on desktop immediately without blocking main execution
const splineLoader = typeof window !== 'undefined' && window.innerWidth >= 768
  ? import('@splinetool/react-spline')
  : null;

const Spline = lazy(() => splineLoader || import('@splinetool/react-spline'));

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 768 : false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 768 : false);
  const [isRobotLoaded, setIsRobotLoaded] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) {
        setShouldLoadSpline(true);
      }
    };
    
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Pause Spline rendering when user scrolls down to avoid laptop GPU throttling
  useEffect(() => {
    const el = heroRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Green dot starts blinking strictly 5 seconds after proper loading of the website & hero visual
  useEffect(() => {
    let blinkTimer: ReturnType<typeof setTimeout>;
    let fallbackTimer: ReturnType<typeof setTimeout>;
    let countdownStarted = false;

    const startCountdown = () => {
      if (countdownStarted) return;
      countdownStarted = true;
      blinkTimer = setTimeout(() => {
        setIsBlinking(true);
      }, 5000);
    };

    const onProperHeroLoad = () => {
      const img = heroImgRef.current;
      if (img && !img.complete) {
        const onImgDone = () => startCountdown();
        img.addEventListener('load', onImgDone, { once: true });
        img.addEventListener('error', onImgDone, { once: true });
      } else {
        startCountdown();
      }
    };

    if (document.readyState === 'complete') {
      onProperHeroLoad();
    } else {
      window.addEventListener('load', onProperHeroLoad, { once: true });
    }

    // Safety fallback: in case window load event was already settled before listener
    fallbackTimer = setTimeout(onProperHeroLoad, 2500);

    return () => {
      countdownStarted = true;
      clearTimeout(blinkTimer);
      clearTimeout(fallbackTimer);
      window.removeEventListener('load', onProperHeroLoad);
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-[100dvh] flex items-center justify-center pt-24 md:pt-32 relative overflow-hidden">
      
      {/* Optimized 3D Spline Scene Background - Strictly desktop only, paused when off-screen */}
      {isDesktop && (
        <div 
          className={`hidden md:flex absolute inset-0 w-full h-full z-0 transition-opacity duration-700 items-center justify-center pointer-events-none ${
            isRobotLoaded ? 'opacity-90 dark:opacity-75' : 'opacity-0'
          }`}
          style={{ display: isHeroInView ? 'flex' : 'none' }}
        >
          {shouldLoadSpline && (
            <Suspense fallback={null}>
              <Spline 
                scene="https://prod.spline.design/Wr4lqNmLMy1ficxr/scene.splinecode" 
                onLoad={(app) => {
                  try {
                    if (app && typeof app.setPixelRatio === 'function') {
                      app.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
                    }
                  } catch (e) {}
                  setIsRobotLoaded(true);
                }}
              />
            </Suspense>
          )}
        </div>
      )}

      {/* Background decoration - Lightweight and non-blocking */}
      <div className="pointer-events-none hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full filter blur-[90px]"></div>
      <div className="pointer-events-none hidden md:block absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full filter blur-[80px]"></div>
      <div className="pointer-events-none hidden md:block absolute top-1/3 -left-10 w-72 h-72 bg-purple-500/20 dark:bg-purple-500/10 rounded-full filter blur-[80px]"></div>
      <div className="pointer-events-none hidden md:block absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full filter blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Mobile Coding & Freelance Hero Visual - Visible on mobile only */}
          <div className="md:hidden flex flex-col items-center mb-6 relative">
            <div className="relative group max-w-[260px] xs:max-w-[290px] mx-auto">
              {/* Static vibrant ambient glow (no continuous GPU repaint) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-2xl blur-md opacity-40"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 shadow-xl bg-slate-900/60">
                <img 
                  ref={heroImgRef}
                  src="/hero-mobile.jpg" 
                  alt="Freelance Developer & Coding" 
                  className="w-full h-auto aspect-square object-cover rounded-2xl"
                  width={300}
                  height={300}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-300 rounded-full flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                  <span className="relative flex h-2 w-2 items-center justify-center">
                    {isBlinking && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    )}
                    <span 
                      className={`relative inline-flex rounded-full h-2 w-2 bg-emerald-400 transition-all duration-300 ${
                        isBlinking ? 'animate-dot-blink' : ''
                      }`} 
                    />
                  </span>
                  <span>Freelance Dev & AI</span>
                </div>
              </div>
            </div>
          </div>

          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 shadow-sm">
            Available for new opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter mb-6">
            Hi, I'm <span className="text-gradient">Siddhant Sinha</span>
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-8 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:gap-x-4">
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
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I craft visually stunning, high-performing websites powered by modern tech and intelligent AI automation, helping progressive brands grow and dominate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
