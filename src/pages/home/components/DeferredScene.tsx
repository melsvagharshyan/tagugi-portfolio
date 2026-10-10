import { Suspense, type ReactNode } from 'react';
import { SCENE_MOUNT_MARGIN } from '../utils/constants';
import { useInView } from '../utils/hooks';

interface DeferredSceneProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

export const DeferredScene = ({ children, fallback = null, rootMargin = SCENE_MOUNT_MARGIN }: DeferredSceneProps) => {
  const { ref, inView } = useInView<HTMLDivElement>(0, rootMargin);

  return (
    <div ref={ref} className="h-full w-full">
      {inView ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
};
