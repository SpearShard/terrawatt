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
  const backMap = loader.load("/croppedback.png");

  frontMap.colorSpace = THREE.SRGBColorSpace;
  backMap.colorSpace = THREE.SRGBColorSpace;
  frontMap.flipY = false;
  backMap.flipY = false;

  frontMap.center.set(0.5, 0.5);
  frontMap.rotation = -Math.PI / 2;
  backMap.center.set(0.5, 0.5);
  backMap.rotation = -Math.PI / 2;

  frontMap.wrapS = THREE.RepeatWrapping;
  frontMap.repeat.x = -1;
  backMap.wrapS = THREE.RepeatWrapping;
  backMap.repeat.x = -1;

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
    disappearAt: 0.32,
    fadeStart: 0.30,
    fadeEnd:0.32,

    darkenEnd: 0.03,

    start: { z: 2.47, x: 0, y: -0.02, scale: 3.8 },
    end: { z: 0.01, x: 0.15, y: 0.38, scale: 5.5 },

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

    // ---------- VISIBILITY CONTROL ----------
if (p < CONFIG.appearAt || p > CONFIG.fadeEnd) {
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

    // if (p > CONFIG.disappearAt) {
    //   g.visible = false;
    // }

    // ---------- FADE OUT ----------
// ---------- FADE OUT / RESTORE ----------
if (p >= CONFIG.fadeStart) {

  const fadeT = THREE.MathUtils.clamp(
    (p - CONFIG.fadeStart) / (CONFIG.fadeEnd - CONFIG.fadeStart),
    0,
    1
  );

  const opacity = 1 - fadeT;

  materialsRef.current.forEach((m) => {
    if ("opacity" in m) {
      m.transparent = true;
      m.opacity = opacity;
    }
  });

  if (p >= CONFIG.fadeEnd) {
    g.visible = false;
  }

} else {
  // ⭐ RESTORE FULL OPACITY WHEN SCROLLING BACK
  materialsRef.current.forEach((m) => {
    if ("opacity" in m) {
      m.transparent = false;
      m.opacity = 1;
    }
  });

  g.visible = true;
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

















// "use client";

// import { useRef } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";

// /* --------------------------------------------------
//    COIN CREATION
// -------------------------------------------------- */
// function createTexturedCoin(
//   materialsOut: React.MutableRefObject<THREE.Material[]>,
//   baseColorsOut: React.MutableRefObject<THREE.Color[]>,
//   baseEmissiveOut: React.MutableRefObject<number[]>
// ) {
//   const loader = new THREE.TextureLoader();

//   const frontMap = loader.load("/coins.png");
//   const backMap  = loader.load("/croppedback.png");

//   frontMap.colorSpace = THREE.SRGBColorSpace;
//   backMap.colorSpace  = THREE.SRGBColorSpace;
//   frontMap.flipY = false;
//   backMap.flipY  = false;

//   frontMap.center.set(0.5, 0.5);
//   frontMap.rotation = -Math.PI / 2;
//   backMap.center.set(0.5, 0.5);
//   backMap.rotation  = -Math.PI / 2;

//   frontMap.wrapS = THREE.RepeatWrapping;
//   frontMap.repeat.x = -1;
//   backMap.wrapS = THREE.RepeatWrapping;
//   backMap.repeat.x  = -1;

//   const radius = 0.012;
//   const thickness = 0.0025;
//   const segments = 96;

//   const geo = new THREE.CylinderGeometry(
//     radius,
//     radius,
//     thickness,
//     segments,
//     1,
//     false
//   );

//   const pos = geo.attributes.position;
//   for (let i = 0; i < pos.count; i++) {
//     const y = pos.getY(i);
//     if (Math.abs(y) < thickness * 0.49) {
//       const x = pos.getX(i);
//       const z = pos.getZ(i);
//       const a = Math.atan2(z, x);
//       const ridge = Math.sin(a * 120) * 0.0003;
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

//   const gold = new THREE.Color(0xd29508);

//   const matGold = new THREE.MeshStandardMaterial({
//     color: gold.clone(),
//     metalness: 1,
//     roughness: 0.22,
//     emissive: gold.clone(),
//     emissiveIntensity: 0.5,
//   });

//   const matFront = new THREE.MeshBasicMaterial({
//     map: frontMap,
//     transparent: true,
//     alphaTest: 0.01,
//     color: 0xffffff,
//   });

//   const matBack = new THREE.MeshBasicMaterial({
//     map: backMap,
//     transparent: true,
//     alphaTest: 0.01,
//     color: 0xffffff,
//   });

//   const coin = new THREE.Mesh(geo, [matGold, matFront, matBack]);

//   coin.rotation.x = Math.PI / 2;

//   materialsOut.current = [matGold, matFront, matBack];
//   baseColorsOut.current = [
//     gold.clone(),
//     new THREE.Color(0xffffff),
//     new THREE.Color(0xffffff),
//   ];
//   baseEmissiveOut.current = [0.5, 0, 0];

//   return coin;
// }

// /* --------------------------------------------------
//    COMPONENT
// -------------------------------------------------- */
// export default function VideoCoin({
//   progressRef,
// }: {
//   progressRef: React.MutableRefObject<number>;
// }) {
//   const groupRef = useRef<THREE.Group>(null!);

//   const materialsRef = useRef<THREE.Material[]>([]);
//   const baseColorsRef = useRef<THREE.Color[]>([]);
//   const baseEmissiveRef = useRef<number[]>([]);

//   const spinQuatRef = useRef(new THREE.Quaternion()); // ⭐ spin accumulator

//   const CONFIG = {
//     appearAt: 0,
//     disappearAt: 0.18,
//     darkenEnd: 0.03,

//     start: { z: 2.47, x: 0, y: -0.02, scale: 3.8 },
//     end:   { z: 0.01, x: 0.20, y: 0.41, scale: 6.2 },

//     freeSpinStart: 0.03,
//     freeSpinEnd: 0.14,

//     startRotation: { x: Math.PI / 20, y: 0, z: 0 },
//     finalRotation: { x: -Math.PI / 4, y: Math.PI / 12490, z: 0 },

//     spinY: 4,
//     spinX: 1.8,
//   };

//   const startQuat = new THREE.Quaternion().setFromEuler(
//     new THREE.Euler(
//       CONFIG.startRotation.x,
//       CONFIG.startRotation.y,
//       CONFIG.startRotation.z
//     )
//   );

//   const endQuat = new THREE.Quaternion().setFromEuler(
//     new THREE.Euler(
//       CONFIG.finalRotation.x,
//       CONFIG.finalRotation.y,
//       CONFIG.finalRotation.z
//     )
//   );

//   useFrame((_, delta) => {
//     const g = groupRef.current;
//     const p = progressRef.current;

//     if (!g || materialsRef.current.length === 0) return;

//     if (p < CONFIG.appearAt) {
//       g.visible = false;
//       return;
//     }

//     g.visible = true;

//     const t = THREE.MathUtils.clamp(
//       (p - CONFIG.appearAt) /
//         (CONFIG.disappearAt - CONFIG.appearAt),
//       0,
//       1
//     );

//     const ease = THREE.MathUtils.smoothstep(t, 0, 1);

//     /* ---------- POSITION & SCALE ---------- */
//     g.position.z = THREE.MathUtils.lerp(CONFIG.start.z, CONFIG.end.z, ease);
//     g.position.x = THREE.MathUtils.lerp(CONFIG.start.x, CONFIG.end.x, ease);
//     g.position.y = THREE.MathUtils.lerp(CONFIG.start.y, CONFIG.end.y, ease);
//     g.scale.setScalar(
//       THREE.MathUtils.lerp(CONFIG.start.scale, CONFIG.end.scale, ease)
//     );

//     /* ---------- ROTATION ---------- */

//     if (p < CONFIG.freeSpinStart) {
//       spinQuatRef.current.identity();
//       g.quaternion.copy(startQuat);
//     }
//     else if (p < CONFIG.freeSpinEnd) {
//       const spinEuler = new THREE.Euler(
//         delta * CONFIG.spinX,
//         delta * CONFIG.spinY,
//         0
//       );

//       const spinQuat = new THREE.Quaternion().setFromEuler(spinEuler);
//       spinQuatRef.current.multiply(spinQuat);
//       g.quaternion.copy(spinQuatRef.current);
//     }
//     else {
//       spinQuatRef.current.identity();

//       const lt = THREE.MathUtils.clamp(
//         (p - CONFIG.freeSpinEnd) /
//         (CONFIG.disappearAt - CONFIG.freeSpinEnd),
//         0,
//         1
//       );

//       const le = THREE.MathUtils.smoothstep(lt, 0, 1);

//       g.quaternion.slerpQuaternions(
//         g.quaternion,
//         endQuat,
//         le
//       );
//     }

//     /* ---------- DARKEN / BRIGHTEN ---------- */
//     if (p < CONFIG.darkenEnd) {
//       const d = THREE.MathUtils.clamp(p / CONFIG.darkenEnd, 0, 1);
//       materialsRef.current.forEach((m, i) => {
//         if (m instanceof THREE.MeshBasicMaterial) {
//           m.color.copy(baseColorsRef.current[i]).multiplyScalar(d);
//         } else if (m instanceof THREE.MeshStandardMaterial) {
//           m.color.copy(baseColorsRef.current[i]).multiplyScalar(d);
//           m.emissiveIntensity = baseEmissiveRef.current[i] * d;
//         }
//       });
//     } else {
//       materialsRef.current.forEach((m, i) => {
//         if (m instanceof THREE.MeshBasicMaterial) {
//           m.color.copy(baseColorsRef.current[i]);
//         } else if (m instanceof THREE.MeshStandardMaterial) {
//           m.color.copy(baseColorsRef.current[i]);
//           m.emissiveIntensity = baseEmissiveRef.current[i];
//         }
//       });
//     }

//     if (p > CONFIG.disappearAt) {
//       g.visible = false;
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       <primitive
//         object={createTexturedCoin(
//           materialsRef,
//           baseColorsRef,
//           baseEmissiveRef
//         )}
//       />
//     </group>
//   );
// }
