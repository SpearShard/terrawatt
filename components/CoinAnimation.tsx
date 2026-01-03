// "use client";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";

// export default function CoinAnimation({
//   progressRef,
//   dashboardRef,
// }: {
//   progressRef: React.MutableRefObject<number>;
//   dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
// }) {
//   const coinRef = useRef<THREE.Mesh | null>(null);
//   const initialPositionRef = useRef<THREE.Vector3>(new THREE.Vector3());

//   // Create and attach coin
//   useEffect(() => {
//     const dashboardMesh = dashboardRef?.current?.[0];
//     if (!dashboardMesh) return;

//     /* --------------------------------------------------
//        LOAD NORMAL MAP (your logo / bump.png)
//     ----------------------------------------------------- */
//     const normalMap = new THREE.TextureLoader().load("/bump.png");
//     normalMap.colorSpace = THREE.SRGBColorSpace;

//     /* --------------------------------------------------
//        LOAD METAL ENV MAP (for shiny gold reflections)
//     ----------------------------------------------------- */
//     const envMap = new THREE.TextureLoader().load(
//       "https://threejs.org/examples/textures/229/brushed_metal.jpg"
//     );
//     envMap.mapping = THREE.EquirectangularReflectionMapping;

//     /* --------------------------------------------------
//        RIDGED SIDE GEOMETRY (ONLY SIDE GETS RIDGES)
//     ----------------------------------------------------- */
//     const radius = 0.012;
//     const thickness = 0.0025;
//     const radialSegments = 96;

//     const geo = new THREE.CylinderGeometry(
//       radius,
//       radius,
//       thickness,
//       radialSegments,
//       1,
//       false
//     );

//     const pos = geo.attributes.position;

//     for (let i = 0; i < pos.count; i++) {
//       const y = pos.getY(i);

//       // Only modify SIDE vertices
//       const isSide = Math.abs(y) < thickness * 0.49;

//       if (isSide) {
//         const x = pos.getX(i);
//         const z = pos.getZ(i);

//         const angle = Math.atan2(z, x);
//         const ridge = Math.sin(angle * 120) * 0.0003;

//         pos.setXYZ(
//           i,
//           x + ridge * (x / radius),
//           y,
//           z + ridge * (z / radius)
//         );
//       }
//     }

//     pos.needsUpdate = true;
//     geo.computeVertexNormals();

//     /* ---------------------------
//        GOLD SELF-LIT MATERIALS (#DC9608)
//     ----------------------------*/
//     const matSide = new THREE.MeshStandardMaterial({
//       color: 0xd29508, // your gold color
//       metalness: 1.0,
//       roughness: 0.22,
//       emissive: new THREE.Color(0xd29508), // glowing gold
//       emissiveIntensity: 0.5, // strong glow
//     });

//     const matFace = new THREE.MeshStandardMaterial({
//       color: 0xd29508, // same color on faces
//       metalness: 1.0,
//       roughness: 0.18,
//       normalMap,
//       normalScale: new THREE.Vector2(1.3, 1.3),
//       emissive: new THREE.Color(0xd29508),
//       emissiveIntensity: 0.5, // faces glow slightly more for a premium look
//     });

//     /* --------------------------------------------------
//        MESH (3 MATERIALS: SIDE, TOP, BOTTOM)
//     ----------------------------------------------------- */
//     const coin = new THREE.Mesh(geo, [matSide, matFace, matFace]);
//     coin.visible = false;
//     coin.castShadow = true;
//     coin.receiveShadow = true;

//     /* --------------------------------------------------
//        POSITIONING (same as before)
//     ----------------------------------------------------- */
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

//     // Store initial position
//     initialPositionRef.current.copy(coin.position);

//     dashboardMesh.add(coin);
//     coinRef.current = coin;

//     return () => {
//       coin.removeFromParent();
//     };
//   }, [dashboardRef]);

//   // Animate coin
//   useFrame((_, delta) => {
//     if (!coinRef.current) return;
//     const coin = coinRef.current;
//     const progress = progressRef.current;

//     // Spin normally
//     if (progress < 0.97) {
//       coin.rotation.y += delta * 5;
//       coin.rotation.x += delta * 2;
//     }

//     // Animate only at end (like your original - starts at 0.9)
//     if (progress > 0.9) {
//       const t = (progress - 0.9) / 0.1;
//       const eased = THREE.MathUtils.smoothstep(t, 0, 1);

//       coin.visible = true;
//       const isMobile = window.innerWidth < 768;

//       // Move toward camera (your original motion)
//       coin.position.y = 0.7 - eased * 0.7;
//       coin.position.z = 0.165;

//       if(isMobile){
//         coin.position.y = 0.25 - eased * 0.7;
//         coin.position.z = 0.235;
//       }

//       // Optional: Scale up as it approaches
//       const scale = 1 + eased * 1.5;
//       coin.scale.setScalar(scale);
//     } else {
//       coin.visible = false;
//       coin.scale.setScalar(1);
//     }

//     // When close to camera, stop spinning, face user, and fade to black
//     if (progress > 0.97) {
//       // Stop rotation and face camera
//       coin.rotation.set(0, 0, 0);

//       // Fade to black (0.97 to 1.0)
//       const blackProgress = Math.min((progress - 0.97) / 0.03, 1); // Normalize 0.97-1.0 to 0-1
//       const goldColor = new THREE.Color(0xd29508);
//       const blackColor = new THREE.Color(0x000000);
//       const fadedColor = goldColor.clone().lerp(blackColor, blackProgress);

//       // Update all materials
//       const materials = Array.isArray(coin.material) ? coin.material : [coin.material];
//       materials.forEach((mat) => {
//         if (mat instanceof THREE.MeshStandardMaterial) {
//           mat.color.copy(fadedColor);
//           mat.emissive.copy(fadedColor);
//           mat.emissiveIntensity = 0.5 * (1 - blackProgress);
//         }
//       });
//     } else if (progress > 0.9) {
//       // Reset colors to gold during animation
//       const materials = Array.isArray(coin.material) ? coin.material : [coin.material];
//       materials.forEach((mat) => {
//         if (mat instanceof THREE.MeshStandardMaterial) {
//           mat.color.setHex(0xd29508);
//           mat.emissive.setHex(0xd29508);
//           mat.emissiveIntensity = 0.5;
//         }
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

    const frontMap = loader.load("/croppedfront.png");
    const backMap = loader.load("/croppedback.png");

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
    if (progress < 0.985) {
      coin.rotation.y += delta * 5;
      coin.rotation.x += delta * 2;
    }

    /* 🚀 Approach camera */
    if (progress > 0.9) {
      const t = THREE.MathUtils.clamp((progress - 0.9) / 0.1, 0, 1);
      const e = THREE.MathUtils.smoothstep(t, 0, 1);

      coin.visible = true;
      const isMobile = window.innerWidth < 768;

      coin.position.y = isMobile ? 0.40 - e * 0.7 : 0.7 - e * 0.7;
      coin.position.z = isMobile ? 0.170 : 0.165;
      coin.scale.setScalar(1 + e * 1.5);

      if (progress > 0.96) {
        const faceT = THREE.MathUtils.clamp(
          (progress - 0.96) / 0.04,
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
    if (progress > 0.985) {
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








































































































