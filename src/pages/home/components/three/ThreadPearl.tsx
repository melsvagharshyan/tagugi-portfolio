import { useFrame } from '@react-three/fiber';
import { useRef, type RefObject } from 'react';
import { MathUtils, type Group, type Mesh, type MeshBasicMaterial } from 'three';
import { SCENE_COLORS, TIMELINE } from '../../utils/constants';
import { PearlMaterial } from './PearlMaterial';

interface ThreadPearlProps {
  y: number;
  threshold: number;
  progressRef: RefObject<number>;
}

export const ThreadPearl = ({ y, threshold, progressRef }: ThreadPearlProps) => {
  const pearlRef = useRef<Mesh>(null);
  const haloRef = useRef<Group>(null);
  const haloMaterialRef = useRef<MeshBasicMaterial>(null);

  useFrame(({ clock }, delta) => {
    const pearl = pearlRef.current;
    const halo = haloRef.current;
    const haloMaterial = haloMaterialRef.current;
    if (!pearl || !halo || !haloMaterial) return;

    const reached = progressRef.current >= threshold ? 1 : 0;
    const scale = MathUtils.damp(pearl.scale.x, TIMELINE.pearlRadius * (0.55 + reached * 0.45), 6, delta);
    pearl.scale.setScalar(scale);
    pearl.rotation.y += delta * 0.6;

    const pulse = 1 + Math.sin(clock.getElapsedTime() * 2.4 + y) * 0.08;
    halo.scale.setScalar(MathUtils.damp(halo.scale.x, (0.6 + reached * 0.4) * pulse, 6, delta));
    halo.rotation.z += delta * 0.8;
    haloMaterial.opacity = MathUtils.damp(haloMaterial.opacity, reached * 0.85, 5, delta);
  });

  return (
    <group position={[0, y, 0]}>
      <mesh ref={pearlRef} scale={TIMELINE.pearlRadius * 0.55}>
        <sphereGeometry args={[1, 32, 32]} />
        <PearlMaterial color={SCENE_COLORS.pearl} />
      </mesh>
      <group ref={haloRef}>
        <mesh>
          <torusGeometry args={[TIMELINE.pearlRadius * 1.55, 0.9, 8, 64, Math.PI * 1.6]} />
          <meshBasicMaterial ref={haloMaterialRef} color={SCENE_COLORS.champagne} transparent opacity={0} />
        </mesh>
      </group>
    </group>
  );
};
