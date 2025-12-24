// // "use client";
// // import { useEffect, useRef } from "react";
// // import * as THREE from "three";
// // import { useFrame } from "@react-three/fiber";


// // export default function CoinAnimation({
// //   progressRef,
// //   dashboardRef,
// // }: {
// //   progressRef: React.MutableRefObject<number>;
// //   dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
// // }) {
// //   const coinRef = useRef<THREE.Mesh | null>(null);


// // // Create and attach coin
// // useEffect(() => {
// //   const dashboardMesh = dashboardRef?.current?.[0];
// //   if (!dashboardMesh) return;

// //   /* --------------------------------------------------
// //      LOAD NORMAL MAP (your logo / bump.png)
// //   ----------------------------------------------------- */
// //   const normalMap = new THREE.TextureLoader().load("/bump.png");
// //   normalMap.colorSpace = THREE.SRGBColorSpace;

// //   /* --------------------------------------------------
// //      LOAD METAL ENV MAP (for shiny gold reflections)
// //   ----------------------------------------------------- */
// //   const envMap = new THREE.TextureLoader().load(
// //     "https://threejs.org/examples/textures/229/brushed_metal.jpg"
// //   );
// //   envMap.mapping = THREE.EquirectangularReflectionMapping;

// //   /* --------------------------------------------------
// //      RIDGED SIDE GEOMETRY (ONLY SIDE GETS RIDGES)
// //   ----------------------------------------------------- */
// //   // --- Ridges ONLY on the side wall of the cylinder ---
// // const radius = 0.012;
// // const thickness = 0.0025;
// // const radialSegments = 96;

// // const geo = new THREE.CylinderGeometry(
// //   radius,
// //   radius,
// //   thickness,
// //   radialSegments,
// //   1,
// //   false
// // );

// // const pos = geo.attributes.position;

// // for (let i = 0; i < pos.count; i++) {
// //   const y = pos.getY(i);

// //   // Only modify SIDE vertices
// //   const isSide = Math.abs(y) < thickness * 0.49;

// //   if (isSide) {
// //     const x = pos.getX(i);
// //     const z = pos.getZ(i);

// //     const angle = Math.atan2(z, x);
// //     const ridge = Math.sin(angle * 120) * 0.0003;

// //     pos.setXYZ(
// //       i,
// //       x + ridge * (x / radius),
// //       y,
// //       z + ridge * (z / radius)
// //     );
// //   }
// // }

// // pos.needsUpdate = true;
// // geo.computeVertexNormals();


// //   pos.needsUpdate = true;
// //   geo.computeVertexNormals()
// // /* ---------------------------
// //    GOLD SELF-LIT MATERIALS (#DC9608)
// // ----------------------------*/
// // const matSide = new THREE.MeshStandardMaterial({
// //   color: 0xD29508,        // your gold color
// //   metalness: 1.0,
// //   roughness: 0.22,

// //   emissive: new THREE.Color(0xD29508), // glowing gold
// //   emissiveIntensity: 0.5,               // strong glow
// // });

// // const matFace = new THREE.MeshStandardMaterial({
// //   color: 0xD29508,        // same color on faces
// //   metalness: 1.0,
// //   roughness: 0.18,
// //   normalMap,
// //   normalScale: new THREE.Vector2(1.3, 1.3),

// //   emissive: new THREE.Color(0xD29508),
// //   emissiveIntensity: 0.5, // faces glow slightly more for a premium look
// // });





// //   /* --------------------------------------------------
// //      MESH (3 MATERIALS: SIDE, TOP, BOTTOM)
// //   ----------------------------------------------------- */
// //   const coin = new THREE.Mesh(geo, [matSide, matFace, matFace]);
// //   coin.visible = false;
// //   coin.castShadow = true;
// //   coin.receiveShadow = true;

// //   /* --------------------------------------------------
// //      POSITIONING (same as before)
// //   ----------------------------------------------------- */
// //   const lcdMesh = dashboardMesh.getObjectByName("LCDs_LCDs.0_0");

// //   if (lcdMesh) {
// //     const p = new THREE.Vector3();
// //     lcdMesh.getWorldPosition(p);
// //     dashboardMesh.worldToLocal(p);
// //     coin.position.copy(p);
// //     coin.position.y += 0.055;
// //   } else {
// //     coin.position.set(0, 0.32, 0.18);
// //   }

// //   dashboardMesh.add(coin);
// //   coinRef.current = coin;

// //   return () => {
// //     coin.removeFromParent();
// //   };
// // }, [dashboardRef]);






// //   // Animate coin
// //   useFrame((_, delta) => {
// //     if (!coinRef.current) return;
// //     const coin = coinRef.current;
// //     const progress = progressRef.current;

// //     // Spin
// //     coin.rotation.y += delta * 5;
// //     coin.rotation.x += delta * 2;

// //     // Animate only at end
// //     if (progress > 0.9) {
// //       const t = (progress - 0.9) / 0.1;
// //       const eased = THREE.MathUtils.smoothstep(t, 0, 1);

// //       coin.visible = true;

// //       // Falling style
// //       coin.position.y = 0.6 - eased * 0.7;
// //       coin.position.z = 0.165;
// //     } else {
// //       coin.visible = false;
// //     }
// //   });

// //   return null;
// // }













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


// // Create and attach coin
// useEffect(() => {
//   const dashboardMesh = dashboardRef?.current?.[0];
//   if (!dashboardMesh) return;

//   /* --------------------------------------------------
//      LOAD NORMAL MAP (your logo / bump.png)
//   ----------------------------------------------------- */
//   const normalMap = new THREE.TextureLoader().load("/bump.png");
//   normalMap.colorSpace = THREE.SRGBColorSpace;

//   /* --------------------------------------------------
//      LOAD METAL ENV MAP (for shiny gold reflections)
//   ----------------------------------------------------- */
//   const envMap = new THREE.TextureLoader().load(
//     "https://threejs.org/examples/textures/229/brushed_metal.jpg"
//   );
//   envMap.mapping = THREE.EquirectangularReflectionMapping;

//   /* --------------------------------------------------
//      RIDGED SIDE GEOMETRY (ONLY SIDE GETS RIDGES)
//   ----------------------------------------------------- */
//   // --- Ridges ONLY on the side wall of the cylinder ---
// const radius = 0.012;
// const thickness = 0.0025;
// const radialSegments = 96;

// const geo = new THREE.CylinderGeometry(
//   radius,
//   radius,
//   thickness,
//   radialSegments,
//   1,
//   false
// );

// const pos = geo.attributes.position;

// for (let i = 0; i < pos.count; i++) {
//   const y = pos.getY(i);

//   // Only modify SIDE vertices
//   const isSide = Math.abs(y) < thickness * 0.49;

//   if (isSide) {
//     const x = pos.getX(i);
//     const z = pos.getZ(i);

//     const angle = Math.atan2(z, x);
//     const ridge = Math.sin(angle * 120) * 0.0003;

//     pos.setXYZ(
//       i,
//       x + ridge * (x / radius),
//       y,
//       z + ridge * (z / radius)
//     );
//   }
// }

// pos.needsUpdate = true;
// geo.computeVertexNormals();


//   pos.needsUpdate = true;
//   geo.computeVertexNormals()
// /* ---------------------------
//    GOLD SELF-LIT MATERIALS (#DC9608)
// ----------------------------*/
// const matSide = new THREE.MeshStandardMaterial({
//   color: 0xD29508,        // your gold color
//   metalness: 1.0,
//   roughness: 0.22,

//   emissive: new THREE.Color(0xD29508), // glowing gold
//   emissiveIntensity: 0.5,               // strong glow
// });

// const matFace = new THREE.MeshStandardMaterial({
//   color: 0xD29508,        // same color on faces
//   metalness: 1.0,
//   roughness: 0.18,
//   normalMap,
//   normalScale: new THREE.Vector2(1.3, 1.3),

//   emissive: new THREE.Color(0xD29508),
//   emissiveIntensity: 0.5, // faces glow slightly more for a premium look
// });





//   /* --------------------------------------------------
//      MESH (3 MATERIALS: SIDE, TOP, BOTTOM)
//   ----------------------------------------------------- */
//   const coin = new THREE.Mesh(geo, [matSide, matFace, matFace]);
//   coin.visible = false;
//   coin.castShadow = true;
//   coin.receiveShadow = true;

//   /* --------------------------------------------------
//      POSITIONING (same as before)
//   ----------------------------------------------------- */
//   const lcdMesh = dashboardMesh.getObjectByName("LCDs_LCDs.0_0");

//   if (lcdMesh) {
//     const p = new THREE.Vector3();
//     lcdMesh.getWorldPosition(p);
//     dashboardMesh.worldToLocal(p);
//     coin.position.copy(p);
//     coin.position.y += 0.055;
//   } else {
//     coin.position.set(0, 0.32, 0.18);
//   }

//   dashboardMesh.add(coin);
//   coinRef.current = coin;

//   return () => {
//     coin.removeFromParent();
//   };
// }, [dashboardRef]);






//   // Animate coin
//   useFrame((_, delta) => {
//   if (!coinRef.current) return;
//   const coin = coinRef.current;
//   const progress = progressRef.current;

//   // Spin normally
//   if (progress < 0.97) {
//     coin.rotation.y += delta * 5;
//     coin.rotation.x += delta * 2;
//   }

//   // Animate only at end
//   if (progress > 0.9) {
//     const t = (progress - 0.9) / 0.1;
//     const eased = THREE.MathUtils.smoothstep(t, 0, 1);

//     coin.visible = true;

//     // Move toward camera (your original motion)
//     coin.position.y = 0.7 - eased * 0.7;
//     coin.position.z = 0.165;
//   } else {
//     coin.visible = false;
//   }

//   // ⭐ NEW LOGIC — when close to camera, stop spinning + face user
//   if (progress > 0.97) {
//     // Stop rotation
//     coin.rotation.set(0, 0, 0);

//     // Face camera: rotate to look directly forward
//     // This makes the front face fully visible
//     // coin.rotation.x = Math.PI / 2;
//   }
// });


//   return null;
// }


































































"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function CoinAnimation({
  progressRef,
  dashboardRef,
}: {
  progressRef: React.MutableRefObject<number>;
  dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
}) {
  const coinRef = useRef<THREE.Mesh | null>(null);
  const initialPositionRef = useRef<THREE.Vector3>(new THREE.Vector3());

  // Create and attach coin
  useEffect(() => {
    const dashboardMesh = dashboardRef?.current?.[0];
    if (!dashboardMesh) return;

    /* --------------------------------------------------
       LOAD NORMAL MAP (your logo / bump.png)
    ----------------------------------------------------- */
    const normalMap = new THREE.TextureLoader().load("/bump.png");
    normalMap.colorSpace = THREE.SRGBColorSpace;

    /* --------------------------------------------------
       LOAD METAL ENV MAP (for shiny gold reflections)
    ----------------------------------------------------- */
    const envMap = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/229/brushed_metal.jpg"
    );
    envMap.mapping = THREE.EquirectangularReflectionMapping;

    /* --------------------------------------------------
       RIDGED SIDE GEOMETRY (ONLY SIDE GETS RIDGES)
    ----------------------------------------------------- */
    const radius = 0.012;
    const thickness = 0.0025;
    const radialSegments = 96;

    const geo = new THREE.CylinderGeometry(
      radius,
      radius,
      thickness,
      radialSegments,
      1,
      false
    );

    const pos = geo.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);

      // Only modify SIDE vertices
      const isSide = Math.abs(y) < thickness * 0.49;

      if (isSide) {
        const x = pos.getX(i);
        const z = pos.getZ(i);

        const angle = Math.atan2(z, x);
        const ridge = Math.sin(angle * 120) * 0.0003;

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

    /* ---------------------------
       GOLD SELF-LIT MATERIALS (#DC9608)
    ----------------------------*/
    const matSide = new THREE.MeshStandardMaterial({
      color: 0xd29508, // your gold color
      metalness: 1.0,
      roughness: 0.22,
      emissive: new THREE.Color(0xd29508), // glowing gold
      emissiveIntensity: 0.5, // strong glow
    });

    const matFace = new THREE.MeshStandardMaterial({
      color: 0xd29508, // same color on faces
      metalness: 1.0,
      roughness: 0.18,
      normalMap,
      normalScale: new THREE.Vector2(1.3, 1.3),
      emissive: new THREE.Color(0xd29508),
      emissiveIntensity: 0.5, // faces glow slightly more for a premium look
    });

    /* --------------------------------------------------
       MESH (3 MATERIALS: SIDE, TOP, BOTTOM)
    ----------------------------------------------------- */
    const coin = new THREE.Mesh(geo, [matSide, matFace, matFace]);
    coin.visible = false;
    coin.castShadow = true;
    coin.receiveShadow = true;

    /* --------------------------------------------------
       POSITIONING (same as before)
    ----------------------------------------------------- */
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

    // Store initial position
    initialPositionRef.current.copy(coin.position);

    dashboardMesh.add(coin);
    coinRef.current = coin;

    return () => {
      coin.removeFromParent();
    };
  }, [dashboardRef]);

  // Animate coin
  useFrame((_, delta) => {
    if (!coinRef.current) return;
    const coin = coinRef.current;
    const progress = progressRef.current;

    // Spin normally
    if (progress < 0.97) {
      coin.rotation.y += delta * 5;
      coin.rotation.x += delta * 2;
    }

    // Animate only at end (like your original - starts at 0.9)
    if (progress > 0.9) {
      const t = (progress - 0.9) / 0.1;
      const eased = THREE.MathUtils.smoothstep(t, 0, 1);

      coin.visible = true;
      const isMobile = window.innerWidth < 768;

      // Move toward camera (your original motion)
      coin.position.y = 0.7 - eased * 0.7;
      coin.position.z = 0.165;

      if(isMobile){
        coin.position.y = 0.25 - eased * 0.7;
        coin.position.z = 0.235;
      }

      // Optional: Scale up as it approaches
      const scale = 1 + eased * 1.5;
      coin.scale.setScalar(scale);
    } else {
      coin.visible = false;
      coin.scale.setScalar(1);
    }

    // When close to camera, stop spinning, face user, and fade to black
    if (progress > 0.97) {
      // Stop rotation and face camera
      coin.rotation.set(0, 0, 0);

      // Fade to black (0.97 to 1.0)
      const blackProgress = Math.min((progress - 0.97) / 0.03, 1); // Normalize 0.97-1.0 to 0-1
      const goldColor = new THREE.Color(0xd29508);
      const blackColor = new THREE.Color(0x000000);
      const fadedColor = goldColor.clone().lerp(blackColor, blackProgress);

      // Update all materials
      const materials = Array.isArray(coin.material) ? coin.material : [coin.material];
      materials.forEach((mat) => {
        if (mat instanceof THREE.MeshStandardMaterial) {
          mat.color.copy(fadedColor);
          mat.emissive.copy(fadedColor);
          mat.emissiveIntensity = 0.5 * (1 - blackProgress);
        }
      });
    } else if (progress > 0.9) {
      // Reset colors to gold during animation
      const materials = Array.isArray(coin.material) ? coin.material : [coin.material];
      materials.forEach((mat) => {
        if (mat instanceof THREE.MeshStandardMaterial) {
          mat.color.setHex(0xd29508);
          mat.emissive.setHex(0xd29508);
          mat.emissiveIntensity = 0.5;
        }
      });
    }
  });

  return null;
}
































































































