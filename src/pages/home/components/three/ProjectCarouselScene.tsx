import { Canvas } from '@react-three/fiber';
import { Suspense, type RefObject } from 'react';
import type { Project } from '../../utils/types';
import { CarouselRing } from './CarouselRing';

interface ProjectCarouselSceneProps {
  projects: Project[];
  progressRef: RefObject<number>;
  onSelect: (slug: string) => void;
  onHoverChange: (slug: string | null) => void;
}

export const ProjectCarouselScene = (props: ProjectCarouselSceneProps) => (
  <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 40 }} gl={{ antialias: true, alpha: true }}>
    <Suspense fallback={null}>
      <CarouselRing {...props} />
    </Suspense>
  </Canvas>
);
