import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import { Vector3 } from 'three';

interface CameraRigProps {
  distance?: number;
  strength?: number;
}

export const CameraRig = ({ distance = 8, strength = 0.8 }: CameraRigProps) => {
  const target = useMemo(() => new Vector3(), []);

  useFrame(({ camera, pointer }, delta) => {
    target.set(pointer.x * strength, pointer.y * strength * 0.6, distance);
    camera.position.lerp(target, 1 - Math.exp(-3 * delta));
    camera.lookAt(0, 0, 0);
  });

  return null;
};
