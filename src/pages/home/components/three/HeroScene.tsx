import { Float, Sparkles } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef, type RefObject } from 'react';
import { MathUtils, type Group } from 'three';
import { FLOATING_PEARLS, HERO_SCROLL, SCENE_COLORS } from '../../utils/constants';
import { getHeroScrollProgress } from '../../utils/helpers';
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
  const orbGroupRef = useRef<Group>(null);
  const pearlsRef = useRef<Group>(null);

  useFrame((_, delta) => {
    const progress = getHeroScrollProgress();
    const orbGroup = orbGroupRef.current;
    const pearls = pearlsRef.current;
    if (orbGroup) {
      orbGroup.position.y = MathUtils.damp(orbGroup.position.y, progress * height * HERO_SCROLL.orbLift, 6, delta);
      orbGroup.scale.setScalar(MathUtils.damp(orbGroup.scale.x, 1 - progress * HERO_SCROLL.orbShrink, 6, delta));
    }
    if (pearls) {
      pearls.scale.setScalar(MathUtils.damp(pearls.scale.x, 1 + progress * HERO_SCROLL.pearlSpread, 6, delta));
      pearls.rotation.z = MathUtils.damp(pearls.rotation.z, progress * 0.25, 6, delta);
    }
  });

  return (
    <>
      <StudioLights />
      <CameraRig strength={0.6} />

      <group ref={orbGroupRef}>
        <Float speed={1} rotationIntensity={0.15} floatIntensity={0.6}>
          <LiquidOrb position={[orbX, orbY, 0]} scale={orbScale} />
          <HaloRings position={[orbX, orbY, 0]} radius={ringRadius} />
        </Float>
      </group>

      <group ref={pearlsRef}>
        {FLOATING_PEARLS.map((pearl, index) => (
          <Pearl key={pearl.position.join(',')} seed={index} {...pearl} />
        ))}
      </group>

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
