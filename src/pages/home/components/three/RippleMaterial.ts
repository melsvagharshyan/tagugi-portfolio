import { shaderMaterial } from '@react-three/drei';
import { extend, type ThreeElement } from '@react-three/fiber';
import { Texture, Vector2 } from 'three';
import { PORTRAIT_RIPPLE } from '../../utils/constants';

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uTexture;
  uniform vec2 uCover;
  uniform vec2 uPointer;
  uniform float uAspect;
  uniform float uHover;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 delta = vUv - uPointer;
    delta.x *= uAspect;
    float dist = length(delta);
    vec2 dir = normalize(delta + 1e-5);
    float falloff = exp(-dist * 5.0) * uHover;

    float wave = sin(dist * ${PORTRAIT_RIPPLE.frequency.toFixed(1)} - uTime * ${PORTRAIT_RIPPLE.speed.toFixed(1)});
    float breathe = sin(vUv.y * 9.0 + uTime * 0.8) * 0.0015;
    vec2 uv = (vUv - 0.5) * uCover + 0.5;
    uv += dir * wave * falloff * ${PORTRAIT_RIPPLE.strength.toFixed(4)} * uCover;
    uv.x += breathe;

    vec2 shift = dir * falloff * ${PORTRAIT_RIPPLE.chroma.toFixed(4)};
    vec3 color = vec3(
      texture2D(uTexture, uv + shift).r,
      texture2D(uTexture, uv).g,
      texture2D(uTexture, uv - shift).b
    );
    color += vec3(1.0, 0.92, 0.88) * falloff * 0.07 * (wave * 0.5 + 0.5);

    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
  }
`;

export const RippleMaterial = shaderMaterial(
  {
    uTexture: new Texture(),
    uCover: new Vector2(1, 1),
    uPointer: new Vector2(0.5, 0.5),
    uAspect: 1,
    uHover: 0,
    uTime: 0,
  },
  vertexShader,
  fragmentShader,
);

extend({ RippleMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    rippleMaterial: ThreeElement<typeof RippleMaterial>;
  }
}
