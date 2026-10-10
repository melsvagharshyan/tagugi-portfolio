import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';
import { SCENE_COLORS } from '../../utils/constants';
import { PearlMaterial } from './PearlMaterial';

const ORBIT = [SCENE_COLORS.pearl, SCENE_COLORS.blush, SCENE_COLORS.champagne, SCENE_COLORS.pearl, SCENE_COLORS.blush];

interface OrbitingPearlsProps {
  radius?: number;
}

export const OrbitingPearls = ({ radius = 2.2 }: OrbitingPearlsProps) => {
  const group = useRef<Group>(null);

  useFrame(({ clock }, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.25;
    group.current.rotation.x = 0.45 + Math.sin(clock.getElapsedTime() * 0.3) * 0.08;
  });

  return (
    <group ref={group}>
      {ORBIT.map((color, index) => {
        const angle = (index / ORBIT.length) * Math.PI * 2;
        return (
          <mesh
            key={`${color}-${index}`}
            position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
            scale={0.12 + (index % 3) * 0.04}
          >
            <sphereGeometry args={[1, 32, 32]} />
            <PearlMaterial color={color} />
          </mesh>
        );
      })}
    </group>
  );
};
