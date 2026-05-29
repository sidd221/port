import { Suspense, lazy, useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function ContactFooterWrapper({ children }: { children: React.ReactNode }) {
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-black dark text-slate-200">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sticky top-0 h-screen w-full pointer-events-auto overflow-hidden">
          {loadSpline ? (
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center bg-transparent">
                <Loader2 className="w-10 h-10 text-indigo-500/50 animate-spin" />
              </div>
            }>
              <Spline scene="https://prod.spline.design/2vxxSzctZoUBjT0Y/scene.splinecode" />
            </Suspense>
          ) : null}
        </div>
      </div>
      
      {/* Content wrapper that allows clicks to pass through empty space */}
      <div className="relative z-10 pointer-events-none">
        {children}
      </div>
    </div>
  );
}
