import { Canvas } from '@react-three/fiber';
import type { RefObject } from 'react';
import { SCENE_COLORS } from '../../utils/constants';
import type { TimelineLayout } from '../../utils/types';
import { PearlThread } from './PearlThread';

interface PearlThreadSceneProps {
  layout: TimelineLayout;
  progressRef: RefObject<number>;
  active: boolean;
}

export const PearlThreadScene = ({ layout, progressRef, active }: PearlThreadSceneProps) => (
  <Canvas
    dpr={[1, 2]}
    orthographic
    frameloop={active ? 'always' : 'never'}
    camera={{ position: [0, 0, 100], zoom: 1 }}
    gl={{ antialias: true, alpha: true }}
  >
    <ambientLight intensity={0.9} />
    <directionalLight position={[40, 80, 100]} intensity={1.6} color="#fff6f0" />
    <pointLight position={[-30, 0, 40]} intensity={4000} color={SCENE_COLORS.blush} />
    {layout.height > 0 && <PearlThread layout={layout} progressRef={progressRef} />}
  </Canvas>
);
