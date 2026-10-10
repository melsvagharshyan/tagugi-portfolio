import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { LiquidPortrait } from './LiquidPortrait';

interface PortraitSceneProps {
  url: string;
}

export const PortraitScene = ({ url }: PortraitSceneProps) => (
  <Canvas dpr={[1, 2]} orthographic camera={{ position: [0, 0, 5], zoom: 1 }} gl={{ antialias: true, alpha: true }}>
    <Suspense fallback={null}>
      <LiquidPortrait url={url} />
    </Suspense>
  </Canvas>
);
