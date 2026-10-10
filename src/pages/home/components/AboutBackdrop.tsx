import { lazy, Suspense } from 'react';
import { useScrollScene } from '../utils/hooks';

const AboutBackdropScene = lazy(() =>
  import('./three/AboutBackdropScene').then((module) => ({ default: module.AboutBackdropScene })),
);

export const AboutBackdrop = () => {
  const { containerRef, progressRef, visible } = useScrollScene<HTMLDivElement>();

  return (
    <div ref={containerRef} aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="sticky top-0 h-svh">
        <Suspense fallback={null}>
          <AboutBackdropScene progressRef={progressRef} active={visible} />
        </Suspense>
      </div>
    </div>
  );
};
