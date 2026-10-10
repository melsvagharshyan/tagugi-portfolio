import { shaderMaterial } from '@react-three/drei';
import { extend, type ThreeElement } from '@react-three/fiber';
import { Color } from 'three';

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPhase;
  uniform float uAmplitude;
  varying vec2 vUv;
  varying float vFacing;

  void main() {
    vUv = uv;
    vec3 p = position;
    float t = uTime * 0.45 + uPhase;

    float twist = sin(p.x * 0.35 + t * 0.6) * 1.3;
    float c = cos(twist);
    float s = sin(twist);
    float wave = sin(p.x * 0.55 + t) * uAmplitude + sin(p.x * 1.2 - t * 0.7) * uAmplitude * 0.3;

    p = vec3(p.x, p.y * c + wave, p.y * s + cos(p.x * 0.45 + t) * uAmplitude * 0.6);
    vFacing = c;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;
  varying float vFacing;

  void main() {
    float edges = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.82, vUv.y);
    float ends = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);
    float sheen = pow(abs(vFacing), 4.0);
    vec3 color = mix(uColor * 0.82, vec3(1.0, 0.97, 0.94), sheen * 0.65);

    gl_FragColor = vec4(color, uOpacity * edges * ends * (0.45 + 0.55 * abs(vFacing)));
    #include <colorspace_fragment>
  }
`;

export const SilkMaterial = shaderMaterial(
  {
    uColor: new Color(),
    uOpacity: 0.5,
    uAmplitude: 0.7,
    uPhase: 0,
    uTime: 0,
  },
  vertexShader,
  fragmentShader,
);

extend({ SilkMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    silkMaterial: ThreeElement<typeof SilkMaterial>;
  }
}
