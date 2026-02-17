// "use client";

// import { useRef } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";

// function createRealisticCoin() {
//   /* --- geometry with ridges --- */
//   const radius = 0.012;
//   const thickness = 0.0025;
//   const radialSegments = 96;

//   const geo = new THREE.CylinderGeometry(
//     radius,
//     radius,
//     thickness,
//     radialSegments,
//     1,
//     false
//   );

//   const pos = geo.attributes.position;
//   for (let i = 0; i < pos.count; i++) {
//     const y = pos.getY(i);
//     const isSide = Math.abs(y) < thickness * 0.49;

//     if (isSide) {
//       const x = pos.getX(i);
//       const z = pos.getZ(i);
//       const angle = Math.atan2(z, x);
//       const ridge = Math.sin(angle * 120) * 0.0003;

//       pos.setXYZ(
//         i,
//         x + ridge * (x / radius),
//         y,
//         z + ridge * (z / radius)
//       );
//     }
//   }
//   pos.needsUpdate = true;
//   geo.computeVertexNormals();

//   /* --- materials (NO normal map) --- */
//   const matSide = new THREE.MeshStandardMaterial({
//     color: 0xd29508,
//     metalness: 1.0,
//     roughness: 0.22,
//     emissive: new THREE.Color(0xd29508),
//     emissiveIntensity: 0.5,
//   });

//   const matFace = new THREE.MeshStandardMaterial({
//     color: 0xd29508,
//     metalness: 1.0,
//     roughness: 0.18,
//     emissive: new THREE.Color(0xd29508),
//     emissiveIntensity: 0.5,
//   });

//   return new THREE.Mesh(geo, [matSide, matFace, matFace]);
// }

// export default function VideoCoin({
//   progressRef,
// }: {
//   progressRef: React.MutableRefObject<number>;
// }) {
//   const meshRef = useRef<THREE.Group>(null!);
//   const coinMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

//   // Tweak these values to control the animation exactly how you want
//   const CONFIG = {
//     // When does the coin animation start & finish? (0–1 scroll progress)
//     startProgress: 0.0,
//     endProgress: 0.12,

//     // Starting position & scale (when scroll = 0)
//     start: {
//       z: 2.46, // How close to your face (higher = closer)
//       y: 0, // Vertical offset at start
//       x: 0, // Vertical offset at start
//       scale: 3.8, // How HUGE it appears at the beginning
//     },

//     // Final position & scale (when coin lands on phone)
//     end: {
//       z: 0.01, // Final depth (0 = on phone screen, 0.01 = slightly in front)
//       x: 0.2,
//       y: 0.4, // Final vertical position
//       scale: 0.45, // Final size on phone
//     },

//     // Spin speed
//     spinY: 4,
//     spinX: 1.8,

//     // Fade from black to gold settings
//     goldEndProgress: 0.02, // When to finish fading to gold (0.02 = first 17% of animation)
//   };

//   useFrame((_, delta) => {
//     const mesh = meshRef.current;
//     const p = progressRef.current;

//     // BEFORE animation starts — hide coin
//     if (p < CONFIG.startProgress) {
//       mesh.visible = false;
//       return;
//     }

//     // FIRST MOMENT — coin appears facing you, BLACK at first
//     if (p >= CONFIG.startProgress && p < CONFIG.startProgress + 0.02) {
//       mesh.visible = true;
//       mesh.rotation.set(Math.PI / 2, 0, 0); // rotate 90° so the face points forward

//       mesh.position.set(CONFIG.start.x, CONFIG.start.y, CONFIG.start.z);
//       mesh.scale.set(CONFIG.start.scale, CONFIG.start.scale, CONFIG.start.scale);

//       // Start with black color
//       if (coinMaterialsRef.current.length > 0) {
//         coinMaterialsRef.current.forEach((mat) => {
//           mat.color.setHex(0x000000);
//           mat.emissive.setHex(0x000000);
//           mat.emissiveIntensity = 0;
//         });
//       }
//       return;
//     }

//     // If inside animation range → spin + move toward phone
//     if (p >= CONFIG.startProgress && p <= CONFIG.endProgress) {
//       const local = (p - CONFIG.startProgress) / (CONFIG.endProgress - CONFIG.startProgress);
//       const t = THREE.MathUtils.clamp(local, 0, 1);
//       const ease = THREE.MathUtils.smoothstep(t, 0, 1);

//       mesh.visible = true;

//       // Start spinning only AFTER leaving the face
//       if (p > CONFIG.startProgress + 0.02) {
//         mesh.rotation.y += delta * CONFIG.spinY;
//         mesh.rotation.x += delta * CONFIG.spinX;
//       }

//       // Move
//       mesh.position.z = THREE.MathUtils.lerp(CONFIG.start.z, CONFIG.end.z, ease);
//       mesh.position.y = THREE.MathUtils.lerp(CONFIG.start.y, CONFIG.end.y, ease);
//       mesh.position.x = THREE.MathUtils.lerp(CONFIG.start.x, CONFIG.end.x, ease);

//       // Scale
//       const s = THREE.MathUtils.lerp(CONFIG.start.scale, CONFIG.end.scale, ease);
//       mesh.scale.set(s, s, s);

//       // Fade FROM black TO gold at the beginning
//       if (p < CONFIG.goldEndProgress) {
//         const goldLocal = (p - CONFIG.startProgress) / (CONFIG.goldEndProgress - CONFIG.startProgress);
//         const goldProgress = THREE.MathUtils.clamp(goldLocal, 0, 1);

//         const blackColor = new THREE.Color(0x000000);
//         const goldColor = new THREE.Color(0xd29508);
//         const fadedColor = blackColor.clone().lerp(goldColor, goldProgress);

//         // Update materials to fade from black to gold
//         if (coinMaterialsRef.current.length > 0) {
//           coinMaterialsRef.current.forEach((mat) => {
//             mat.color.copy(fadedColor);
//             mat.emissive.copy(fadedColor);
//             mat.emissiveIntensity = 0.5 * goldProgress; // Increase glow as it becomes gold
//           });
//         }
//       } else {
//         // Keep full gold color after fade completes
//         if (coinMaterialsRef.current.length > 0) {
//           coinMaterialsRef.current.forEach((mat) => {
//             mat.color.setHex(0xd29508);
//             mat.emissive.setHex(0xd29508);
//             mat.emissiveIntensity = 0.5;
//           });
//         }
//       }

//       return;
//     }

//     // AFTER animation ends → lock final position or hide
//     if (p > CONFIG.endProgress) {
//       mesh.visible = false;
//     }
//   });

//   return (
//     <group ref={meshRef}>
//       <primitive
//         object={(() => {
//           const m = createRealisticCoin();
//           m.castShadow = true;
//           m.receiveShadow = true;

//           // Store material references for color manipulation
//           const materials = Array.isArray(m.material) ? m.material : [m.material];
//           coinMaterialsRef.current = materials.filter(
//             (mat): mat is THREE.MeshStandardMaterial => mat instanceof THREE.MeshStandardMaterial
//           );

//           return m;
//         })()}
//       />

//       {/* Optional glowing ring (uncomment opacity to see) */}
//       <mesh rotation={[Math.PI / 2, 0, 0]}>
//         <ringGeometry args={[0.125, 0.15, 48]} />
//         <meshBasicMaterial color="#05DF72" opacity={0} transparent />
//       </mesh>

//       <mesh rotation={[Math.PI / 2, 0, 0]}>
//         <ringGeometry args={[0.118, 0.122, 64]} />
//         <meshBasicMaterial color="#ffffff" opacity={0} transparent />
//       </mesh>
//     </group>
//   );
// }



















"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

/* --------------------------------------------------
   COIN CREATION
-------------------------------------------------- */
function createTexturedCoin(
  materialsOut: React.MutableRefObject<THREE.Material[]>,
  baseColorsOut: React.MutableRefObject<THREE.Color[]>,
  baseEmissiveOut: React.MutableRefObject<number[]>
) {
  const loader = new THREE.TextureLoader();

  const frontMap = loader.load("/coins.png");
  const backMap  = loader.load("/croppedback.png");

  frontMap.colorSpace = THREE.SRGBColorSpace;
  backMap.colorSpace  = THREE.SRGBColorSpace;
  frontMap.flipY = false;
  backMap.flipY  = false;

  frontMap.center.set(0.5, 0.5);
  frontMap.rotation = -Math.PI / 2;
  backMap.center.set(0.5, 0.5);
  backMap.rotation  = -Math.PI / 2;

  frontMap.wrapS = THREE.RepeatWrapping;
  frontMap.repeat.x = -1;
  backMap.wrapS = THREE.RepeatWrapping;
  backMap.repeat.x  = -1;

  const radius = 0.012;
  const thickness = 0.0025;
  const segments = 96;

  const geo = new THREE.CylinderGeometry(
    radius,
    radius,
    thickness,
    segments,
    1,
    false
  );

  /* ---- ridged edge ---- */
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (Math.abs(y) < thickness * 0.49) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const a = Math.atan2(z, x);
      const ridge = Math.sin(a * 120) * 0.0003;
      pos.setXYZ(
        i,
        x + ridge * (x / radius),
        y,
        z + ridge * (z / radius)
      );
    }
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();

  const gold = new THREE.Color(0xd29508);

  const matGold = new THREE.MeshStandardMaterial({
    color: gold.clone(),
    metalness: 1,
    roughness: 0.22,
    emissive: gold.clone(),
    emissiveIntensity: 0.5,
  });

  const matFront = new THREE.MeshBasicMaterial({
    map: frontMap,
    transparent: true,
    alphaTest: 0.01,
    color: 0xffffff,
  });

  const matBack = new THREE.MeshBasicMaterial({
    map: backMap,
    transparent: true,
    alphaTest: 0.01,
    color: 0xffffff,
  });

  const coin = new THREE.Mesh(geo, [matGold, matFront, matBack]);

  // deterministic initial orientation
  coin.rotation.x = Math.PI / 2;

  materialsOut.current = [matGold, matFront, matBack];
  baseColorsOut.current = [
    gold.clone(),
    new THREE.Color(0xffffff),
    new THREE.Color(0xffffff),
  ];
  baseEmissiveOut.current = [0.5, 0, 0];

  return coin;
}

/* --------------------------------------------------
   COMPONENT
-------------------------------------------------- */
export default function VideoCoin({
  progressRef,
}: {
  progressRef: React.MutableRefObject<number>;
}) {
  const groupRef = useRef<THREE.Group>(null!);

  const materialsRef = useRef<THREE.Material[]>([]);
  const baseColorsRef = useRef<THREE.Color[]>([]);
  const baseEmissiveRef = useRef<number[]>([]);

  const CONFIG = {
    appearAt: 0,
    disappearAt: 0.18,

    darkenEnd: 0.03,

    start: { z: 2.47, x: 0, y: -0.02, scale: 3.8 },
    end:   { z: 0.01, x: 0.20, y: 0.41, scale: 6.2 },

    /* ---- rotation phases ---- */
    freeSpinStart: 0.03,
    freeSpinEnd: 0.14,

    startRotation: {
      x: Math.PI / 20,
      y: 0,
      z: 0,
    },

    finalRotation: {
      x: -Math.PI / 4,
      y: Math.PI / 12490,
      z: 0,
    },

    spinY: 4,
    spinX: 1.8,
  };

  /* ---- precompute quaternions (critical) ---- */
  const startQuat = new THREE.Quaternion().setFromEuler(
    new THREE.Euler(
      CONFIG.startRotation.x,
      CONFIG.startRotation.y,
      CONFIG.startRotation.z
    )
  );

  const endQuat = new THREE.Quaternion().setFromEuler(
    new THREE.Euler(
      CONFIG.finalRotation.x,
      CONFIG.finalRotation.y,
      CONFIG.finalRotation.z
    )
  );

  useFrame((_, delta) => {
    const g = groupRef.current;
    const p = progressRef.current;

    if (!g || materialsRef.current.length === 0) return;

    if (p < CONFIG.appearAt) {
      g.visible = false;
      return;
    }

    g.visible = true;

    const t = THREE.MathUtils.clamp(
      (p - CONFIG.appearAt) /
        (CONFIG.disappearAt - CONFIG.appearAt),
      0,
      1
    );
    const ease = THREE.MathUtils.smoothstep(t, 0, 1);

    /* ---------- POSITION & SCALE ---------- */
    g.position.z = THREE.MathUtils.lerp(CONFIG.start.z, CONFIG.end.z, ease);
    g.position.x = THREE.MathUtils.lerp(CONFIG.start.x, CONFIG.end.x, ease);
    g.position.y = THREE.MathUtils.lerp(CONFIG.start.y, CONFIG.end.y, ease);
    g.scale.setScalar(
      THREE.MathUtils.lerp(CONFIG.start.scale, CONFIG.end.scale, ease)
    );

    /* ---------- ROTATION (SINGLE CONTROLLER) ---------- */
    if (p < CONFIG.freeSpinStart) {
      // 🔒 LOCKED START
      const lt = THREE.MathUtils.clamp(
        (p - CONFIG.appearAt) /
          (CONFIG.freeSpinStart - CONFIG.appearAt),
        0,
        1
      );
      const le = THREE.MathUtils.smoothstep(lt, 0, 1);
      g.quaternion.slerp(startQuat, 1 - le);

    } else if (p < CONFIG.freeSpinEnd) {
      // 🌀 FREE SPIN
      g.rotation.y += delta * CONFIG.spinY;
      g.rotation.x += delta * CONFIG.spinX;

    } else {
      // 🔒 LOCKED END
      const lt = THREE.MathUtils.clamp(
        (p - CONFIG.freeSpinEnd) /
          (CONFIG.disappearAt - CONFIG.freeSpinEnd),
        0,
        1
      );
      const le = THREE.MathUtils.smoothstep(lt, 0, 1);
      g.quaternion.slerp(endQuat, le);
    }

    /* ---------- DARKEN → BRIGHTEN ---------- */
    if (p < CONFIG.darkenEnd) {
      const d = THREE.MathUtils.clamp(p / CONFIG.darkenEnd, 0, 1);
      materialsRef.current.forEach((m, i) => {
        if (m instanceof THREE.MeshBasicMaterial) {
          m.color.copy(baseColorsRef.current[i]).multiplyScalar(d);
        } else if (m instanceof THREE.MeshStandardMaterial) {
          m.color.copy(baseColorsRef.current[i]).multiplyScalar(d);
          m.emissiveIntensity = baseEmissiveRef.current[i] * d;
        }
      });
    } else {
      materialsRef.current.forEach((m, i) => {
        if (m instanceof THREE.MeshBasicMaterial) {
          m.color.copy(baseColorsRef.current[i]);
        } else if (m instanceof THREE.MeshStandardMaterial) {
          m.color.copy(baseColorsRef.current[i]);
          m.emissiveIntensity = baseEmissiveRef.current[i];
        }
      });
    }

    if (p > CONFIG.disappearAt) {
      g.visible = false;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={createTexturedCoin(
          materialsRef,
          baseColorsRef,
          baseEmissiveRef
        )}
      />
    </group>
  );
}





