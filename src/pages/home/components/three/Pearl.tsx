import { Float } from '@react-three/drei';
import type { PearlConfig } from '../../utils/types';
import { PearlMaterial } from './PearlMaterial';

interface PearlProps extends PearlConfig {
  seed: number;
}

export const Pearl = ({ position, scale, color, seed }: PearlProps) => (
  <Float speed={0.8 + (seed % 4) * 0.2} rotationIntensity={0.2} floatIntensity={0.9}>
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 48, 48]} />
      <PearlMaterial color={color} />
    </mesh>
  </Float>
);
