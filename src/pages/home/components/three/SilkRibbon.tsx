import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Color, DoubleSide, type ShaderMaterial } from 'three';
import type { SilkRibbonConfig } from '../../utils/types';
import './SilkMaterial';

interface SilkRibbonProps extends SilkRibbonConfig {
  length: number;
}

export const SilkRibbon = ({ color, position, rotation, width, amplitude, phase, opacity, length }: SilkRibbonProps) => {
  const materialRef = useRef<ShaderMaterial>(null);
  const uColor = useMemo(() => new Color(color), [color]);

  useFrame(({ clock }) => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[length, width, 240, 12]} />
      <silkMaterial
        ref={materialRef}
        uColor={uColor}
        uOpacity={opacity}
        uAmplitude={amplitude}
        uPhase={phase}
        side={DoubleSide}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};
