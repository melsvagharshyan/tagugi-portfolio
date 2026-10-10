import { Image } from '@react-three/drei';
import { useFrame, type ThreeEvent } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import { DoubleSide, MathUtils, Vector3, type Group, type Material, type Mesh } from 'three';
import type { ImageMaterialUniforms } from '../../utils/types';

interface CarouselCardProps {
  url: string;
  angle: number;
  radius: number;
  width: number;
  height: number;
  onSelect: () => void;
  onHoverChange: (hovered: boolean) => void;
}

export const CarouselCard = ({ url, angle, radius, width, height, onSelect, onHoverChange }: CarouselCardProps) => {
  const groupRef = useRef<Group>(null);
  const imageRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const direction = useMemo(() => new Vector3(), []);

  useFrame((_, delta) => {
    const group = groupRef.current;
    const image = imageRef.current;
    if (!group || !image) return;

    group.getWorldDirection(direction);
    const front = Math.max(0, direction.z) ** 6;
    const material = image.material as Material & ImageMaterialUniforms;

    const scale = MathUtils.damp(group.scale.x, 1 + front * 0.06 + (hovered ? 0.04 : 0), 6, delta);
    group.scale.setScalar(scale);
    const visible = MathUtils.smoothstep(direction.z, 0.1, 0.75);
    material.opacity = MathUtils.damp(material.opacity, 0.15 + visible * 0.85, 6, delta);
    material.grayscale = MathUtils.damp(material.grayscale, 1 - front, 6, delta);
    material.zoom = MathUtils.damp(material.zoom, hovered ? 1.08 : 1, 6, delta);
  });

  const handleOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(true);
    onHoverChange(true);
  };

  const handleOut = () => {
    setHovered(false);
    onHoverChange(false);
  };

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect();
  };

  return (
    <group ref={groupRef} position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]} rotation={[0, angle, 0]}>
      <Image
        ref={imageRef}
        url={url}
        scale={[width, height]}
        radius={0.06}
        side={DoubleSide}
        transparent
        toneMapped={false}
        onPointerOver={handleOver}
        onPointerOut={handleOut}
        onClick={handleClick}
      />
    </group>
  );
};
