import { OrthographicCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { LiquidPortrait } from './LiquidPortrait';
import { SceneView } from './SceneView';

interface PortraitSceneProps {
  url: string;
}

export const PortraitScene = ({ url }: PortraitSceneProps) => (
  <SceneView>
    <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={1} />
    <Suspense fallback={null}>
      <LiquidPortrait url={url} />
    </Suspense>
  </SceneView>
);
