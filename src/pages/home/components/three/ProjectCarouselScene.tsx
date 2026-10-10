import { PerspectiveCamera } from '@react-three/drei';
import { Suspense, type RefObject } from 'react';
import type { Project } from '../../utils/types';
import { CarouselRing } from './CarouselRing';
import { SceneView } from './SceneView';

interface ProjectCarouselSceneProps {
  projects: Project[];
  progressRef: RefObject<number>;
  onSelect: (slug: string) => void;
  onHoverChange: (slug: string | null) => void;
}

export const ProjectCarouselScene = (props: ProjectCarouselSceneProps) => (
  <SceneView>
    <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
    <Suspense fallback={null}>
      <CarouselRing {...props} />
    </Suspense>
  </SceneView>
);
