import { Environment, Lightformer } from '@react-three/drei';
import { SCENE_COLORS } from '../../utils/constants';

export const StudioLights = () => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[4, 6, 5]} intensity={1.2} color="#ffffff" />
    <Environment resolution={1024}>
      <Lightformer form="rect" intensity={2.5} position={[0, 5, 4]} scale={[10, 2, 1]} color="#ffffff" />
      <Lightformer form="rect" intensity={1.6} position={[-6, 0, 2]} scale={[3, 10, 1]} color={SCENE_COLORS.blush} />
      <Lightformer form="rect" intensity={1.4} position={[6, 1, 2]} scale={[3, 10, 1]} color={SCENE_COLORS.champagne} />
      <Lightformer form="circle" intensity={0.8} position={[0, -4, 3]} scale={4} color={SCENE_COLORS.wine} />
    </Environment>
  </>
);
