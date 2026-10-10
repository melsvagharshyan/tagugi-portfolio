import { PerformanceMonitor, View } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import type { RefObject } from 'react';
import { useSceneQuality } from '../../utils/hooks';

const AdaptiveResolution = () => {
  const setDpr = useThree((state) => state.setDpr);
  const drop = () => setDpr(1.5);
  return <PerformanceMonitor onDecline={drop} onFallback={drop} flipflops={3} />;
};

interface SceneRootProps {
  eventSource: RefObject<HTMLElement | null>;
}

/** The page's single WebGL canvas; every <SceneView> is drawn into it at its own on-page rectangle. */
export const SceneRoot = ({ eventSource }: SceneRootProps) => {
  const { dpr } = useSceneQuality();

  return (
    <Canvas
      dpr={dpr}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      eventSource={eventSource as RefObject<HTMLElement>}
      style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}
    >
      <AdaptiveResolution />
      <View.Port />
    </Canvas>
  );
};
