import { MeshDistortMaterial } from '@react-three/drei';
import { useFrame, type ThreeEvent } from '@react-three/fiber';
import { useRef, useState, type ComponentRef } from 'react';
import type { Mesh } from 'three';
import { MathUtils } from 'three';
import { SCENE_COLORS } from '../../utils/constants';

interface LiquidOrbProps {
  position?: [number, number, number];
  scale?: number;
}

export const LiquidOrb = ({ position = [0, 0, 0], scale = 1 }: LiquidOrbProps) => {
  const mesh = useRef<Mesh>(null);
  const material = useRef<ComponentRef<typeof MeshDistortMaterial>>(null);
  const [hovered, setHovered] = useState(false);
  const pulse = useRef(0);

  useFrame(({ pointer }, delta) => {
    pulse.current = MathUtils.damp(pulse.current, 0, 2.2, delta);
    if (mesh.current) {
      mesh.current.rotation.y += delta * (0.12 + pulse.current * 2);
      mesh.current.rotation.x = MathUtils.damp(mesh.current.rotation.x, -pointer.y * 0.3, 2, delta);
      mesh.current.rotation.z = MathUtils.damp(mesh.current.rotation.z, pointer.x * 0.2, 2, delta);
      const target = scale * ((hovered ? 1.05 : 1) + pulse.current * 0.12);
      mesh.current.scale.setScalar(MathUtils.damp(mesh.current.scale.x, target, 3, delta));
    }
    if (material.current) {
      const distort = (hovered ? 0.42 : 0.28) + pulse.current * 0.45;
      material.current.distort = MathUtils.damp(material.current.distort, distort, 2.5, delta);
    }
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    pulse.current = 1;
  };

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <icosahedronGeometry args={[1, 64]} />
      <MeshDistortMaterial
        ref={material}
        color={SCENE_COLORS.pearl}
        distort={0.28}
        speed={1.2}
        roughness={0.1}
        metalness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.05}
        iridescence={0.9}
        iridescenceIOR={1.4}
        iridescenceThicknessRange={[100, 500]}
      />
    </mesh>
  );
};
