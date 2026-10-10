import { View } from '@react-three/drei';
import type { ReactNode } from 'react';

interface SceneViewProps {
  children: ReactNode;
}

export const SceneView = ({ children }: SceneViewProps) => <View className="h-full w-full">{children}</View>;
