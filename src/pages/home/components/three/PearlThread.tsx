import { useFrame } from '@react-three/fiber';
import { useMemo, useRef, type RefObject } from 'react';
import { CatmullRomCurve3, MathUtils, Vector3, type Mesh, type TubeGeometry } from 'three';
import { SCENE_COLORS, TIMELINE } from '../../utils/constants';
import { getThreadPoints } from '../../utils/helpers';
import type { TimelineLayout } from '../../utils/types';
import { ThreadPearl } from './ThreadPearl';

const TUBULAR_SEGMENTS = 400;
const RADIAL_SEGMENTS = 8;

interface PearlThreadProps {
  layout: TimelineLayout;
  progressRef: RefObject<number>;
}

export const PearlThread = ({ layout, progressRef }: PearlThreadProps) => {
  const litRef = useRef<TubeGeometry>(null);
  const tipRef = useRef<Mesh>(null);
  const drawn = useRef(0);
  const tipPoint = useMemo(() => new Vector3(), []);

  const curve = useMemo(
    () => new CatmullRomCurve3(getThreadPoints(layout, TIMELINE.wobble).map(([x, y]) => new Vector3(x, y, 0))),
    [layout],
  );

  useFrame(({ clock }, delta) => {
    drawn.current = MathUtils.damp(drawn.current, progressRef.current, 5, delta);
    const segments = Math.floor(drawn.current * TUBULAR_SEGMENTS);
    litRef.current?.setDrawRange(0, segments * RADIAL_SEGMENTS * 6);

    const tip = tipRef.current;
    if (tip) {
      curve.getPointAt(MathUtils.clamp(drawn.current, 0, 1), tipPoint);
      tip.position.copy(tipPoint);
      tip.visible = drawn.current > 0.005 && drawn.current < 0.995;
      tip.scale.setScalar(2.6 + Math.sin(clock.getElapsedTime() * 6) * 0.6);
    }
  });

  return (
    <>
      <mesh>
        <tubeGeometry args={[curve, TUBULAR_SEGMENTS, TIMELINE.threadRadius * 0.6, RADIAL_SEGMENTS]} />
        <meshBasicMaterial color={SCENE_COLORS.wine} transparent opacity={0.14} />
      </mesh>
      <mesh>
        <tubeGeometry ref={litRef} args={[curve, TUBULAR_SEGMENTS, TIMELINE.threadRadius, RADIAL_SEGMENTS]} />
        <meshBasicMaterial color={SCENE_COLORS.champagne} />
      </mesh>
      <mesh ref={tipRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color={SCENE_COLORS.ivory} />
      </mesh>

      {layout.anchors.map((anchor) => (
        <ThreadPearl
          key={anchor}
          y={layout.height / 2 - anchor}
          threshold={anchor / layout.height}
          progressRef={progressRef}
        />
      ))}
    </>
  );
};
