// "use client";

// import { useRef, useEffect } from "react";
// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";

// export default function ScrollingCoin({
//   progressRef,
// }: {
//   progressRef: React.MutableRefObject<number>;
// }) {
//   const coinRef = useRef<THREE.Mesh>(null);
//   const { scene } = useThree();

//   useEffect(() => {

//     const loader = new THREE.CubeTextureLoader();
//     const envMap = loader.load([
//       "/env/px.png",
//       "/env/nx.png",
//       "/env/py.png",
//       "/env/ny.png",
//       "/env/pz.png",
//       "/env/nz.png",
//     ]);

//     envMap.mapping = THREE.CubeReflectionMapping;

    
//     scene.environment = envMap;
//     scene.background = null;
//   }, [scene]);

  
//   const goldMaterial = new THREE.MeshPhysicalMaterial({
//     color: new THREE.Color("#F4BC25"),       
//     metalness: 1,
//     roughness: 0.15,                          
//     reflectivity: 1,
//     clearcoat: 1,
//     clearcoatRoughness: 0.1,
//     sheen: 0.5,
//     sheenRoughness: 0.3,
//     envMapIntensity: 1.8,                    
//   });

//   useFrame(() => {
//     const coin = coinRef.current;
//     if (!coin) return;

//     const p = progressRef.current;

    
//    // Final coin destination (change these!)
// const midX = 0.13;      // X final position
// const midY = 0.4;   // Y final position

// const startX = 0;
// const startY = 2.2;

// // progress for movement (0–1)
// const t = Math.min(p / 0.4, 1);

// // interpolate both X and Y
// const x = startX + (midX - startX) * t;
// const y = startY + (midY - startY) * t;

// // apply movement
// coin.position.set(x, y, 0);


    
//     // POP DISAPPEAR
// if (p > 0.45) {
//   coin.visible = false;   // instantly gone
// } else {
//   coin.visible = true;    // visible before that
//   coin.scale.set(1, 1, 1);  // no shrinking
//   goldMaterial.opacity = 1; // no fading
//   goldMaterial.transparent = false;
// }


    
//     coin.rotation.y += 0.12;
//     coin.rotation.x += 0.05;
//   });

//   return (
//     <mesh ref={coinRef} position={[0, 2.2, 0]} material={goldMaterial}>
//       <cylinderGeometry args={[0.07, 0.07, 0.01, 64]} />
//     </mesh>
//   );
// }



"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ScrollingCoin({
  progressRef,
}: {
  progressRef: React.MutableRefObject<number>;
}) {
  const coinRef = useRef<THREE.Mesh>(null);

  // 💛 Bright, even gold material
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: "#F4BC25",
    metalness: 0.9,
    roughness: 0.3,
  });

  useFrame(() => {
    const coin = coinRef.current;
    if (!coin) return;

    const p = progressRef.current;

    // Movement
    const midX = 0.13;
    const midY = 0.4;

    const startX = 0;
    const startY = 2.2;

    const t = Math.min(p / 0.4, 1);

    const x = startX + (midX - startX) * t;
    const y = startY + (midY - startY) * t;

    coin.position.set(x, y, 0);

    // Pop disappear
    coin.visible = p <= 0.45;

    // Spin
    coin.rotation.y += 0.12;
    coin.rotation.x += 0.05;
  });

  return (
    <>
      {/* ⭐ Ambient light to brighten everything evenly */}
      <ambientLight intensity={1.3} />

      {/* ⭐ Directional light to give highlights without dark faces */}
      <directionalLight position={[2, 5, 2]} intensity={1.4} />

      <mesh ref={coinRef} position={[0, 2.2, 0]} material={goldMaterial}>
        <cylinderGeometry args={[0.07, 0.07, 0.01, 64]} />
      </mesh>
    </>
  );
}

