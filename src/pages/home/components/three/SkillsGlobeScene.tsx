import { Canvas } from '@react-three/fiber';
import { Suspense, type RefObject } from 'react';
import type { DragSpinState } from '../../utils/types';
import { SkillsGlobe } from './SkillsGlobe';
import { StudioLights } from './StudioLights';

interface SkillsGlobeSceneProps {
  skills: string[];
  spinRef: RefObject<DragSpinState>;
}

export const SkillsGlobeScene = ({ skills, spinRef }: SkillsGlobeSceneProps) => (
  <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
    <Suspense fallback={null}>
      <StudioLights />
      <SkillsGlobe skills={skills} spinRef={spinRef} />
    </Suspense>
  </Canvas>
);
