import { Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { CameraRig } from './CameraRig';
import { HaloRings } from './HaloRings';
import { LiquidOrb } from './LiquidOrb';
import { OrbitingPearls } from './OrbitingPearls';
import { StudioLights } from './StudioLights';

export const SignatureScene = () => (
  <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7], fov: 45 }} gl={{ antialias: true, alpha: true }}>
    <Suspense fallback={null}>
      <StudioLights />
      <CameraRig distance={7} strength={0.8} />
      <Float speed={1} floatIntensity={0.6}>
        <LiquidOrb scale={1.25} />
        <HaloRings radius={1.75} />
        <OrbitingPearls radius={2.4} />
      </Float>
    </Suspense>
  </Canvas>
);
