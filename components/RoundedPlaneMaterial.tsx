import * as THREE from "three";
import { ShaderMaterial } from "three";

export function RoundedPlaneMaterial(radius = 0.04) {
  return new ShaderMaterial({
    transparent: true,
    uniforms: {
      uTexture: { value: null },
      uRadius: { value: radius },
      uResolution: { value: new THREE.Vector2(1.0, 1.0) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D uTexture;
      uniform float uRadius;
      uniform vec2 uResolution;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        vec2 pos = uv * uResolution;

        // Distance to nearest corner
        vec2 corner = min(pos, uResolution - pos);
        float d = min(corner.x, corner.y);

        // Mask out hard edges
        float alpha = smoothstep(uRadius, uRadius + 0.01, d);

        vec4 texColor = texture2D(uTexture, uv);

        gl_FragColor = vec4(texColor.rgb, texColor.a * alpha);
      }
    `,
  });
}
