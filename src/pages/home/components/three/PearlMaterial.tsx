interface PearlMaterialProps {
  color: string;
}

export const PearlMaterial = ({ color }: PearlMaterialProps) => (
  <meshPhysicalMaterial
    color={color}
    roughness={0.18}
    metalness={0.1}
    clearcoat={1}
    clearcoatRoughness={0.08}
    iridescence={1}
    iridescenceIOR={1.35}
    iridescenceThicknessRange={[120, 420]}
    sheen={0.6}
    sheenColor="#ffffff"
  />
);
