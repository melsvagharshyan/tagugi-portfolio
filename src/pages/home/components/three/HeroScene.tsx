import { Float, Sparkles } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense, type RefObject } from 'react';
import { FLOATING_PEARLS, SCENE_COLORS } from '../../utils/constants';
import { CameraRig } from './CameraRig';
import { HaloRings } from './HaloRings';
import { LiquidOrb } from './LiquidOrb';
import { Pearl } from './Pearl';
import { StudioLights } from './StudioLights';

const HeroComposition = () => {
  const { width, height } = useThree((state) => state.viewport);
  const isPortrait = width <= height;

  const orbX = isPortrait ? width * 0.12 : width * 0.22;
  const orbY = isPortrait ? -height * 0.31 : 0;
  const orbScale = isPortrait ? Math.min(width * 0.2, height * 0.09) : Math.min(1.3, width / 8.5);
  const ringRadius = orbScale * (isPortrait ? 1.3 : 1.45);

  return (
    <>
      <StudioLights />
      <CameraRig strength={0.6} />

      <Float speed={1} rotationIntensity={0.15} floatIntensity={0.6}>
        <LiquidOrb position={[orbX, orbY, 0]} scale={orbScale} />
        <HaloRings position={[orbX, orbY, 0]} radius={ringRadius} />
      </Float>

      {FLOATING_PEARLS.map((pearl, index) => (
        <Pearl key={pearl.position.join(',')} seed={index} {...pearl} />
      ))}

      <Sparkles count={40} scale={[14, 8, 4]} size={2.5} speed={0.2} opacity={0.6} color={SCENE_COLORS.champagne} />
    </>
  );
};

interface HeroSceneProps {
  eventSource: RefObject<HTMLElement | null>;
}

export const HeroScene = ({ eventSource }: HeroSceneProps) => (
  <Canvas
    dpr={[1, 2]}
    camera={{ position: [0, 0, 8], fov: 45 }}
    gl={{ antialias: true, alpha: true }}
    eventSource={eventSource as RefObject<HTMLElement>}
    eventPrefix="client"
  >
    <Suspense fallback={null}>
      <HeroComposition />
    </Suspense>
  </Canvas>
);
