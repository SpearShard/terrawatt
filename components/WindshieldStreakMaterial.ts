import * as THREE from "three";

export function createWindshieldStreakMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uIntensity: { value: 1.0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
uniform float uTime;
uniform float uIntensity;

// A streak that moves top -> bottom and wraps infinitely
float verticalStreak(vec2 uv, float xPos, float width, float speed) {
    // Move vertically DOWN
    float y = fract(uv.y - uTime * speed);

    // Perfectly vertical line at xPos
    float d = abs(uv.x - xPos);

    return smoothstep(width, 0.0, d) * (1.0 - y); 
}

void main() {
    vec2 uv = vUv;

    // LEFT streaks (shifted slightly right)
float sL1 = verticalStreak(uv, 0.30, 0.015, 0.55);
float sL2 = verticalStreak(uv, 0.33, 0.015, 0.50);

// RIGHT streaks (pushed further right)
float sR1 = verticalStreak(uv, 0.62, 0.015, 0.88);
float sR2 = verticalStreak(uv, 0.60, 0.015, 0.78);


    float total = (sL1 + sL2 + sR1 + sR2) * uIntensity;

    vec3 color =
        vec3(1.0, 0.6, 0.2) * sL1 +
        vec3(1.0, 0.6, 0.2) * sL2 +
        vec3(1.0, 0.6, 0.2) * sR1 +
        vec3(1.0, 0.6, 0.2) * sR2;

    gl_FragColor = vec4(color, total);
}



    `
  });
}


// import * as THREE from "three";

// export function createWindshieldStreakMaterial() {
//   return new THREE.ShaderMaterial({
//     transparent: true,
//     blending: THREE.AdditiveBlending,
//     depthWrite: false,
//     uniforms: {
//       uTime: { value: 0 },
//       uIntensity: { value: 1.0 },
//     },
//     vertexShader: `
//       varying vec2 vUv;
//       void main() {
//         vUv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//       }
//     `,
//     fragmentShader: `
//       varying vec2 vUv;
//       uniform float uTime;
//       uniform float uIntensity;

//       // A UV-INDEPENDENT vertical streak (top → bottom)
//       float streak(vec2 uv, float xTop, float bendAmount, float width, float speed, float seed) {
//           // 0 → 1 vertical movement independent of UVs
//           float v = fract(uTime * speed + seed);

//           // Horizontal position bends ONLY at bottom
//           float xPos = xTop + v * bendAmount;

//           // Distance from the vertical streak line
//           float d = abs(uv.x - xPos);

//           // Fade as it reaches bottom
//           return smoothstep(width, 0.0, d) * (1.0 - v);
//       }

//       void main() {
//           vec2 uv = vUv;

//           // LEFT streaks bend RIGHT (positive bend)
//           float sL1 = streak(uv, 0.30,  0.10, 0.015, 0.55, 0.10);
//           float sL2 = streak(uv, 0.33,  0.08, 0.015, 0.45, 0.25);

//           // RIGHT streaks bend LEFT (negative bend)
//           float sR1 = streak(uv, 0.65, -0.12, 0.018, 0.75, 0.40);
//           float sR2 = streak(uv, 0.62, -0.10, 0.015, 0.60, 0.70);

//           float total = (sL1 + sL2 + sR1 + sR2) * uIntensity;

//           vec3 color =
//               vec3(1.0, 0.6, 0.2) * sL1 +
//               vec3(1.0, 0.6, 0.2) * sL2 +
//               vec3(1.0, 1.0, 1.0) * sR1 +
//               vec3(1.0, 0.9, 0.5) * sR2;

//           gl_FragColor = vec4(color, total);
//       }
//     `
//   });
// }
