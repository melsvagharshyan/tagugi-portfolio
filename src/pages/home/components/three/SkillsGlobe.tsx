import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef, type RefObject } from 'react';
import { MathUtils, type Group } from 'three';
import { SCENE_COLORS, SKILLS_GLOBE } from '../../utils/constants';
import { getFibonacciSpherePoints } from '../../utils/helpers';
import type { DragSpinState } from '../../utils/types';
import { HaloRings } from './HaloRings';
import { PearlMaterial } from './PearlMaterial';
import { SkillLabel } from './SkillLabel';

interface SkillsGlobeProps {
  skills: string[];
  spinRef: RefObject<DragSpinState>;
}

export const SkillsGlobe = ({ skills, spinRef }: SkillsGlobeProps) => {
  const globeRef = useRef<Group>(null);
  const points = useMemo(() => getFibonacciSpherePoints(skills.length, SKILLS_GLOBE.radius), [skills.length]);

  useFrame(({ pointer }, delta) => {
    const globe = globeRef.current;
    const spin = spinRef.current;
    if (!globe) return;

    if (!spin.dragging) {
      spin.y += SKILLS_GLOBE.autoSpin * delta + spin.velocityY;
      spin.x = MathUtils.clamp(spin.x + spin.velocityX, -1, 1);
      spin.velocityX = MathUtils.damp(spin.velocityX, 0, SKILLS_GLOBE.inertia, delta);
      spin.velocityY = MathUtils.damp(spin.velocityY, 0, SKILLS_GLOBE.inertia, delta);
    }

    globe.rotation.y = MathUtils.damp(globe.rotation.y, spin.y + pointer.x * 0.2, 8, delta);
    globe.rotation.x = MathUtils.damp(globe.rotation.x, spin.x - pointer.y * 0.15, 8, delta);
  });

  return (
    <>
      <Float speed={1.2} floatIntensity={0.5} rotationIntensity={0.2}>
        <mesh scale={0.75}>
          <sphereGeometry args={[1, 64, 64]} />
          <PearlMaterial color={SCENE_COLORS.pearl} />
        </mesh>
        <HaloRings radius={1.05} />
      </Float>

      <group ref={globeRef}>
        {skills.map((skill, index) => (
          <SkillLabel key={skill} label={skill} position={points[index]} radius={SKILLS_GLOBE.radius} />
        ))}
      </group>
    </>
  );
};
