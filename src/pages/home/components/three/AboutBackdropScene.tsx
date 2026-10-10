import { Sparkles } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef, type RefObject } from 'react';
import { MathUtils, type Group } from 'three';
import { ABOUT_PEARLS, ABOUT_SCROLL, SCENE_COLORS, SILK_RIBBONS } from '../../utils/constants';
import { Pearl } from './Pearl';
import { SilkRibbon } from './SilkRibbon';
import { StudioLights } from './StudioLights';

interface AboutBackdropProps {
  progressRef: RefObject<number>;
}

const AboutComposition = ({ progressRef }: AboutBackdropProps) => {
  const width = useThree((state) => state.viewport.width);
  const ribbonsRef = useRef<Group>(null);
  const pearlsRef = useRef<Group>(null);

  useFrame(({ pointer }, delta) => {
    const progress = progressRef.current;
    const ribbons = ribbonsRef.current;
    const pearls = pearlsRef.current;
    if (ribbons) {
      ribbons.position.x = MathUtils.damp(ribbons.position.x, (0.5 - progress) * ABOUT_SCROLL.ribbonTravel, 4, delta);
      ribbons.rotation.x = MathUtils.damp(ribbons.rotation.x, -pointer.y * 0.15, 2, delta);
      ribbons.rotation.y = MathUtils.damp(ribbons.rotation.y, pointer.x * 0.2, 2, delta);
    }
    if (pearls) {
      pearls.position.y = MathUtils.damp(pearls.position.y, (progress - 0.5) * ABOUT_SCROLL.pearlParallax, 4, delta);
    }
  });

  return (
    <>
      <StudioLights />

      <group ref={ribbonsRef}>
        {SILK_RIBBONS.map((ribbon) => (
          <SilkRibbon key={ribbon.color} length={width * 1.6} {...ribbon} />
        ))}
      </group>

      <group ref={pearlsRef}>
        {ABOUT_PEARLS.map((pearl, index) => (
          <Pearl key={pearl.position.join(',')} seed={index} {...pearl} />
        ))}
      </group>

      <Sparkles count={30} scale={[12, 8, 4]} size={2.5} speed={0.2} opacity={0.5} color={SCENE_COLORS.champagne} />
    </>
  );
};

interface AboutBackdropSceneProps extends AboutBackdropProps {
  active: boolean;
}

export const AboutBackdropScene = ({ progressRef, active }: AboutBackdropSceneProps) => (
  <Canvas
    dpr={[1, 1.5]}
    frameloop={active ? 'always' : 'never'}
    camera={{ position: [0, 0, 8], fov: 45 }}
    gl={{ antialias: true, alpha: true }}
    eventSource={document.body}
    eventPrefix="client"
  >
    <Suspense fallback={null}>
      <AboutComposition progressRef={progressRef} />
    </Suspense>
  </Canvas>
);
