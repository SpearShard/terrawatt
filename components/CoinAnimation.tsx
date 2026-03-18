// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { useFrame, useThree } from "@react-three/fiber";

// export default function CoinAnimation({
//   progressRef,
//   dashboardRef,
// }: {
//   progressRef: React.MutableRefObject<number>;
//   dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
// }) {
//   const coinRef = useRef<THREE.Mesh | null>(null);
//   const baseColorsRef = useRef<THREE.Color[]>([]);
//   const baseEmissiveRef = useRef<number[]>([]);
//   const baseEnvRef = useRef<number[]>([]);
//   const { camera } = useThree();

//   const APPROACH_START = 0.9;
//   const APPROACH_END = 0.965;
//   const FACE_START = 0.94;
//   const BLACKOUT_START = 0.972;
//   const BLACKOUT_END = 0.995;

//   useEffect(() => {
//     const dashboardMesh = dashboardRef?.current?.[0];
//     if (!dashboardMesh) return;

//     const loader = new THREE.TextureLoader();

//     const frontMap = loader.load("/croppedback.png");
//     const backMap = loader.load("/coins.png");

//     frontMap.colorSpace = THREE.SRGBColorSpace;
//     backMap.colorSpace = THREE.SRGBColorSpace;
//     frontMap.flipY = false;
//     backMap.flipY = false;

//     frontMap.center.set(0.5, 0.5);
//     frontMap.rotation = Math.PI / 2;

//     backMap.center.set(0.5, 0.5);
//     backMap.rotation = Math.PI / 2;

//     frontMap.wrapS = THREE.RepeatWrapping;
//     frontMap.repeat.x = -1;

//     backMap.wrapS = THREE.RepeatWrapping;
//     backMap.repeat.x = -1;

//     const envMap = loader.load(
//       "https://threejs.org/examples/textures/229/brushed_metal.jpg"
//     );
//     envMap.mapping = THREE.EquirectangularReflectionMapping;

//     const radius = 0.012;
//     const thickness = 0.0025;
//     const geo = new THREE.CylinderGeometry(radius, radius, thickness, 96, 1);

//     const pos = geo.attributes.position;
//     for (let i = 0; i < pos.count; i++) {
//       const y = pos.getY(i);
//       if (Math.abs(y) < thickness * 0.49) {
//         const x = pos.getX(i);
//         const z = pos.getZ(i);
//         const a = Math.atan2(z, x);
//         const ridge = Math.sin(a * 120) * 0.0003;
//         pos.setXYZ(i, x + ridge * (x / radius), y, z + ridge * (z / radius));
//       }
//     }
//     pos.needsUpdate = true;
//     geo.computeVertexNormals();

//     const gold = 0xd29508;

//     const matSide = new THREE.MeshStandardMaterial({
//       color: gold,
//       metalness: 1,
//       roughness: 0.22,
//       emissive: new THREE.Color(gold),
//       emissiveIntensity: 0.45,
//       envMap,
//       envMapIntensity: 1.5,
//     });

//     const matFront = new THREE.MeshStandardMaterial({
//       map: frontMap,
//       color: 0xffffff,
//       metalness: 0,
//       roughness: 0.35,
//       transparent: true,
//       alphaTest: 0.5,
//     });

//     const matBack = new THREE.MeshStandardMaterial({
//       map: backMap,
//       color: 0xffffff,
//       metalness: 0,
//       roughness: 0.4,
//       transparent: true,
//       alphaTest: 0.5,
//     });

//     const coin = new THREE.Mesh(geo, [matSide, matFront, matBack]);
//     coin.visible = false;

//     const mats = coin.material as THREE.MeshStandardMaterial[];
//     baseColorsRef.current = mats.map((m) => m.color.clone());
//     baseEmissiveRef.current = mats.map((m) => m.emissiveIntensity);
//     baseEnvRef.current = mats.map((m) => m.envMapIntensity ?? 1);

//     const lcdMesh = dashboardMesh.getObjectByName("LCDs_LCDs.0_0");
//     if (lcdMesh) {
//       const p = new THREE.Vector3();
//       lcdMesh.getWorldPosition(p);
//       dashboardMesh.worldToLocal(p);
//       coin.position.copy(p);
//       coin.position.y += 0.055;
//     } else {
//       coin.position.set(0, 0.32, 0.18);
//     }

//     dashboardMesh.add(coin);
//     coinRef.current = coin;

//     return () => {
//       coin.removeFromParent();
//       geo.dispose();
//       matSide.dispose();
//       matFront.dispose();
//       matBack.dispose();
//       frontMap.dispose();
//       backMap.dispose();
//       envMap.dispose();
//     };
//   }, [dashboardRef]);

//   useFrame((_, delta) => {
//     if (!coinRef.current) return;

//     const coin = coinRef.current;
//     const progress = progressRef.current;
//     const mats = coin.material as THREE.MeshStandardMaterial[];

//     if (progress < APPROACH_START) {
//       coin.rotation.y += delta * 5;
//       coin.rotation.x += delta * 2;
//     }

//     if (progress > APPROACH_START) {
//       const t = THREE.MathUtils.clamp(
//         (progress - APPROACH_START) / (APPROACH_END - APPROACH_START),
//         0,
//         1
//       );
//       const e = THREE.MathUtils.smoothstep(t, 0, 1);

//       coin.visible = true;
//       const isMobile = window.innerWidth < 768;

//       coin.position.y = isMobile ? 0.63 - e * 0.7 : 0.58 - e * 0.7;
//       coin.position.z = isMobile ? 0.196 : 0.165;
//       coin.scale.setScalar(1 + e * 1.5);

//       if (progress > FACE_START) {
//         const faceT = THREE.MathUtils.clamp(
//           (progress - FACE_START) / (APPROACH_END - FACE_START),
//           0,
//           1
//         );
//         coin.quaternion.slerp(camera.quaternion, faceT * 0.2);
//       }
//     } else {
//       coin.visible = false;
//       coin.scale.setScalar(1);
//     }

//     if (progress > BLACKOUT_START) {
//       const d = THREE.MathUtils.clamp(
//         (progress - BLACKOUT_START) / (BLACKOUT_END - BLACKOUT_START),
//         0,
//         1
//       );

//       const darkness = THREE.MathUtils.lerp(1, 0.0, d);

//       mats.forEach((mat, i) => {
//         mat.color.copy(baseColorsRef.current[i]).multiplyScalar(darkness);
//         mat.emissiveIntensity = baseEmissiveRef.current[i] * (1 - d);
//         mat.envMapIntensity = baseEnvRef.current[i] * (1 - d);
//       });
//     } else {
//       mats.forEach((mat, i) => {
//         mat.color.copy(baseColorsRef.current[i]);
//         mat.emissiveIntensity = baseEmissiveRef.current[i];
//         mat.envMapIntensity = baseEnvRef.current[i];
//       });
//     }
//   });

//   return null;
// }










"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

export default function CoinAnimation({
  progressRef,
  dashboardRef,
}: {
  progressRef: React.MutableRefObject<number>;
  dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
}) {
  const coinRef = useRef<THREE.Mesh | null>(null);
  const baseColorsRef = useRef<THREE.Color[]>([]);
  const baseEmissiveRef = useRef<number[]>([]);
  const baseEnvRef = useRef<number[]>([]);
  const { camera } = useThree();

  /* --------------------------------------------------
     CREATE + ATTACH COIN
  -------------------------------------------------- */
  useEffect(() => {
    const dashboardMesh = dashboardRef?.current?.[0];
    if (!dashboardMesh) return;

    const loader = new THREE.TextureLoader();

    const frontMap = loader.load("/croppedback.png");
    const backMap = loader.load("/coins.png");

    frontMap.colorSpace = THREE.SRGBColorSpace;
    backMap.colorSpace = THREE.SRGBColorSpace;
    frontMap.flipY = false;
    backMap.flipY = false;

    frontMap.center.set(0.5, 0.5);
  frontMap.rotation = Math.PI / 2;

  backMap.center.set(0.5, 0.5);
  backMap.rotation = Math.PI / 2;

  frontMap.wrapS = THREE.RepeatWrapping;
    frontMap.repeat.x = -1;
  
    backMap.wrapS = THREE.RepeatWrapping;
    backMap.repeat.x = -1;

    const envMap = loader.load(
      "https://threejs.org/examples/textures/229/brushed_metal.jpg"
    );
    envMap.mapping = THREE.EquirectangularReflectionMapping;

    const radius = 0.012;
    const thickness = 0.0025;

    const geo = new THREE.CylinderGeometry(radius, radius, thickness, 96, 1);

    // Ridged edge
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

    const gold = 0xd29508;

    const matSide = new THREE.MeshStandardMaterial({
      color: gold,
      metalness: 1,
      roughness: 0.22,
      emissive: new THREE.Color(gold),
      emissiveIntensity: 0.45,
      envMap,
      envMapIntensity: 1.5,
    });

    const matFront = new THREE.MeshStandardMaterial({
      map: frontMap,
      color: 0xffffff,
      metalness: 0,
      roughness: 0.35,
      transparent: true,
      alphaTest: 0.5,
    });

    const matBack = new THREE.MeshStandardMaterial({
      map: backMap,
      color: 0xffffff,
      metalness: 0,
      roughness: 0.4,
      transparent: true,
      alphaTest: 0.5,
    });

    const coin = new THREE.Mesh(geo, [matSide, matFront, matBack]);
    coin.visible = false;

    const mats = coin.material as THREE.MeshStandardMaterial[];

    // 🔐 Store original values
    baseColorsRef.current = mats.map((m) => m.color.clone());
    baseEmissiveRef.current = mats.map((m) => m.emissiveIntensity);
    baseEnvRef.current = mats.map((m) => m.envMapIntensity ?? 1);

    const lcdMesh = dashboardMesh.getObjectByName("LCDs_LCDs.0_0");
    if (lcdMesh) {
      const p = new THREE.Vector3();
      lcdMesh.getWorldPosition(p);
      dashboardMesh.worldToLocal(p);
      coin.position.copy(p);
      coin.position.y += 0.055;
    } else {
      coin.position.set(0, 0.32, 0.18);
    }

    dashboardMesh.add(coin);
    coinRef.current = coin;

    return () => {
      coin.removeFromParent();
      geo.dispose();
      matSide.dispose();
      matFront.dispose();
      matBack.dispose();
      frontMap.dispose();
      backMap.dispose();
      envMap.dispose();
    };
  }, [dashboardRef]);

  /* --------------------------------------------------
     ANIMATION
  -------------------------------------------------- */
  useFrame((_, delta) => {
    if (!coinRef.current) return;

    const coin = coinRef.current;
    const progress = progressRef.current;
    const mats = coin.material as THREE.MeshStandardMaterial[];

    /* 🌀 Spin until VERY late */
    if (progress < 0.965) {
      coin.rotation.y += delta * 5;
      coin.rotation.x += delta * 2;
    }

    /* 🚀 Approach camera */
    if (progress > 0.95) {
      
      const t = THREE.MathUtils.clamp((progress - 0.95) / 0.05, 0, 1);
      const e = THREE.MathUtils.smoothstep(t, 0, 1);

      coin.visible = true;
      const isMobile = window.innerWidth < 768;

      coin.position.y = isMobile ? 0.63 - e * 0.7 : 0.58 - e * 0.7;
      coin.position.z = isMobile ? 0.196 : 0.165;
      coin.scale.setScalar(1 + e * 1.5);

      if (progress > 0.97) {
        const faceT = THREE.MathUtils.clamp(
          (progress - 0.97) / 0.03,
          0,
          1
        );
        
        coin.quaternion.slerp(camera.quaternion, faceT * 0.2);
      }
    } else {
      coin.visible = false;
      coin.scale.setScalar(1);
    }

    /* 🌑 DEFINITIVE BLACKOUT VERY CLOSE */
    if (progress > 0.995) {
      const d = THREE.MathUtils.clamp(
        (progress - 0.985) / 0.015,
        0,
        1
      );

      const darkness = THREE.MathUtils.lerp(1, 0.0, d); // ← goes almost black

      mats.forEach((mat, i) => {
        mat.color.copy(baseColorsRef.current[i]).multiplyScalar(darkness);
        mat.emissiveIntensity = baseEmissiveRef.current[i] * (1 - d);
        mat.envMapIntensity = baseEnvRef.current[i] * (1 - d);
      });
    } else {
      // 🔁 Restore fully when scrolling back
      mats.forEach((mat, i) => {
        mat.color.copy(baseColorsRef.current[i]);
        mat.emissiveIntensity = baseEmissiveRef.current[i];
        mat.envMapIntensity = baseEnvRef.current[i];
      });
    }
  });

  return null;
}
