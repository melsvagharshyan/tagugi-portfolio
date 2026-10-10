import { useFrame, useThree } from '@react-three/fiber';
import { useRef, type RefObject } from 'react';
import { MathUtils, type Group } from 'three';
import { CAROUSEL, SCENE_COLORS } from '../../utils/constants';
import { settleOnSteps } from '../../utils/helpers';
import type { Project } from '../../utils/types';
import { CarouselCard } from './CarouselCard';

interface CarouselRingProps {
  projects: Project[];
  progressRef: RefObject<number>;
  onSelect: (slug: string) => void;
  onHoverChange: (slug: string | null) => void;
}

export const CarouselRing = ({ projects, progressRef, onSelect, onHoverChange }: CarouselRingProps) => {
  const { width: viewportWidth, height: viewportHeight } = useThree((state) => state.viewport);
  const tiltRef = useRef<Group>(null);
  const spinRef = useRef<Group>(null);

  const count = projects.length;
  const step = (Math.PI * 2) / count;
  const isPortrait = viewportWidth < viewportHeight;
  const offsetY = viewportHeight * (isPortrait ? 0.13 : 0.08);
  const cardWidth = Math.min(viewportWidth * 0.5, (viewportHeight * (isPortrait ? 0.4 : 0.48)) / CAROUSEL.cardAspect);
  const cardHeight = cardWidth * CAROUSEL.cardAspect;
  const radius = (cardWidth * CAROUSEL.cardGap) / (2 * Math.sin(Math.PI / count));

  useFrame((state, delta) => {
    const spin = spinRef.current;
    const tilt = tiltRef.current;
    if (!spin || !tilt) return;

    const position = settleOnSteps(progressRef.current * (count - 1));
    spin.rotation.y = MathUtils.damp(spin.rotation.y, -position * step, CAROUSEL.damping, delta);
    tilt.rotation.x = MathUtils.damp(tilt.rotation.x, CAROUSEL.tilt - state.pointer.y * 0.04, 3, delta);
    tilt.rotation.z = MathUtils.damp(tilt.rotation.z, state.pointer.x * 0.02, 3, delta);
  });

  return (
    <group position={[0, offsetY + radius * Math.sin(CAROUSEL.tilt), -radius]}>
      <group ref={tiltRef} rotation={[CAROUSEL.tilt, 0, 0]}>
        <group ref={spinRef}>
          {projects.map((project, index) => (
            <CarouselCard
              key={project.slug}
              url={project.cover}
              angle={index * step}
              radius={radius}
              width={cardWidth}
              height={cardHeight}
              onSelect={() => onSelect(project.slug)}
              onHoverChange={(hovered) => onHoverChange(hovered ? project.slug : null)}
            />
          ))}
        </group>

        <mesh position={[0, -cardHeight / 2 - 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.006, 8, 200]} />
          <meshBasicMaterial color={SCENE_COLORS.champagne} transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, -cardHeight / 2 - 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius * 1.08, 0.004, 8, 200]} />
          <meshBasicMaterial color={SCENE_COLORS.rose} transparent opacity={0.35} />
        </mesh>
      </group>
    </group>
  );
};
