import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';
import { SCENE_COLORS } from '../../utils/constants';

interface HaloRingsProps {
  position?: [number, number, number];
  radius?: number;
}

const RINGS = [
  { tilt: [1.2, 0.2, 0], speed: 0.18, thickness: 0.012, scale: 1 },
  { tilt: [0.4, -0.9, 0.3], speed: -0.12, thickness: 0.008, scale: 1.18 },
] as const;

export const HaloRings = ({ position = [0, 0, 0], radius = 1.6 }: HaloRingsProps) => {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    group.current?.children.forEach((ring, index) => {
      ring.rotation.z += delta * RINGS[index].speed;
    });
  });

  return (
    <group ref={group} position={position}>
      {RINGS.map((ring) => (
        <mesh key={ring.scale} rotation={[...ring.tilt]} scale={ring.scale}>
          <torusGeometry args={[radius, ring.thickness * radius, 24, 160]} />
          <meshStandardMaterial color={SCENE_COLORS.champagne} metalness={1} roughness={0.22} />
        </mesh>
      ))}
    </group>
  );
};
