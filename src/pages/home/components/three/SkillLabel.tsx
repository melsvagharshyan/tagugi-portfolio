import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Vector3, type Group } from 'three';

interface SkillLabelProps {
  label: string;
  position: [number, number, number];
  radius: number;
}

export const SkillLabel = ({ label, position, radius }: SkillLabelProps) => {
  const anchorRef = useRef<Group>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const world = useMemo(() => new Vector3(), []);

  useFrame(() => {
    const anchor = anchorRef.current;
    const node = labelRef.current;
    if (!anchor || !node) return;
    anchor.getWorldPosition(world);
    const depth = Math.min(1, Math.max(0, (world.z / radius + 1) / 2));
    node.style.opacity = String(0.2 + depth * 0.8);
    node.style.transform = `scale(${0.7 + depth * 0.4})`;
    node.style.filter = `blur(${(1 - depth) * 1.6}px)`;
  });

  return (
    <group ref={anchorRef} position={position}>
      <Html center zIndexRange={[20, 0]}>
        <span
          ref={labelRef}
          className="block rounded-full border border-ink/15 bg-ivory/70 px-4 py-2 text-sm font-medium whitespace-nowrap text-ink backdrop-blur-sm transition-colors duration-300 select-none hover:border-wine hover:bg-wine hover:text-ivory"
        >
          {label}
        </span>
      </Html>
    </group>
  );
};
