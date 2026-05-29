import { Suspense, lazy, useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineBackground() {
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    // Delay the heavy 3D scene initialization until the page has visually rendered
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sticky top-0 h-screen w-full -z-10 overflow-hidden pointer-events-none">
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
  );
}
