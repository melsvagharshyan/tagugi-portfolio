import { useTexture } from '@react-three/drei';
import { useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { MathUtils, SRGBColorSpace, Vector2, type ShaderMaterial } from 'three';
import { getCoverScale } from '../../utils/helpers';
import './RippleMaterial';

interface LiquidPortraitProps {
  url: string;
}

export const LiquidPortrait = ({ url }: LiquidPortraitProps) => {
  const { width, height } = useThree((state) => state.viewport);
  const texture = useTexture(url, (loaded) => {
    loaded.colorSpace = SRGBColorSpace;
  });
  const materialRef = useRef<ShaderMaterial>(null);
  const pointerTarget = useMemo(() => new Vector2(0.5, 0.5), []);
  const hoverTarget = useRef(0);

  const image = texture.image as HTMLImageElement;
  const planeAspect = width / height;
  const cover = useMemo(
    () => new Vector2(...getCoverScale(planeAspect, image.width / image.height)),
    [planeAspect, image],
  );

  useFrame(({ clock }, delta) => {
    const material = materialRef.current;
    if (!material) return;
    const { uniforms } = material;
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uHover.value = MathUtils.damp(uniforms.uHover.value, hoverTarget.current, 3, delta);
    uniforms.uReveal.value = MathUtils.damp(uniforms.uReveal.value, 1, 2.5, delta);
    uniforms.uPointer.value.lerp(pointerTarget, 1 - Math.exp(-8 * delta));
  });

  const handleMove = (event: ThreeEvent<PointerEvent>) => {
    if (event.uv) pointerTarget.copy(event.uv);
    hoverTarget.current = 1;
  };

  return (
    <mesh onPointerMove={handleMove} onPointerOut={() => (hoverTarget.current = 0)}>
      <planeGeometry args={[width, height]} />
      <rippleMaterial
        ref={materialRef}
        uTexture={texture}
        uCover={cover}
        uAspect={planeAspect}
        toneMapped={false}
        transparent
      />
    </mesh>
  );
};
