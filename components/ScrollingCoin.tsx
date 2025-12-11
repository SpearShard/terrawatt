// "use client";
// import { useRef } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";

// export default function VideoCoin({ 
//   progressRef 
// }: { 
//   progressRef: React.MutableRefObject<number>;
// }) {
//   const coinRef = useRef<THREE.Mesh | null>(null);

//   // Create coin exactly once
//   if (!coinRef.current) {
//     const geo = new THREE.CylinderGeometry(0.12, 0.12, 0.02, 64);
//     const mat = new THREE.MeshStandardMaterial({
//       color: 0xffd700,
//       metalness: 1,
//       roughness: 0.15,
//       emissive: new THREE.Color(0x2a2a00),
//       emissiveIntensity: 0.2,
//     });

//     const coin = new THREE.Mesh(geo, mat);

//     // Start VERY close to the camera (in-your-face zone)
//     coin.position.set(0, 0, 1.5);

//     // Start large because it's near camera
//     coin.scale.set(2.5, 2.5, 2.5);

//     coin.visible = true;
//     coinRef.current = coin;
//   }

//   // Animation every frame
//   useFrame((_, delta) => {
//     const coin = coinRef.current;
//     if (!coin) return;

//     const progress = progressRef.current;

//     // Spin constantly
//     coin.rotation.y += delta * 5;
//     coin.rotation.x += delta * 2;

//     // Animate at the BEGINNING: 0 → 0.1
//     if (progress <= 0.1) {
//       const t = progress / 0.1; // normalize 0 → 1
//       const eased = THREE.MathUtils.smoothstep(t, 0, 1);

//       coin.visible = true;

//       // Move coin FROM camera → to front of phone
//       // Camera at z=2.5, phone around z=0
//       coin.position.z = 1.5 - eased * 2.0; // goes from 1.5 → -0.5

//       // Slight downward drift as it approaches
//       coin.position.y = 0.3 - eased * 0.3;

//       // Scale shrinks as it moves away
//       const s = 2.5 - eased * 1.8; // 2.5 → 0.7 size
//       coin.scale.set(s, s, s);

//     } else {
//       // Hide coin after it reaches the phone
//       coin.visible = false;
//     }
//   });

//   return <primitive object={coinRef.current!} />;
// }




"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";


function createRealisticCoin() {
  /* --- normal map --- */
  const normalMap = new THREE.TextureLoader().load("/bump.png");
  normalMap.colorSpace = THREE.SRGBColorSpace;

  /* --- geometry with ridges --- */
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

  /* --- materials --- */
  const matSide = new THREE.MeshStandardMaterial({
    color: 0xD29508,
    metalness: 1.0,
    roughness: 0.22,
    emissive: new THREE.Color(0xD29508),
    emissiveIntensity: 0.5,
  });

  const matFace = new THREE.MeshStandardMaterial({
    color: 0xD29508,
    metalness: 1.0,
    roughness: 0.18,
    normalMap,
    normalScale: new THREE.Vector2(1.3, 1.3),
    emissive: new THREE.Color(0xD29508),
    emissiveIntensity: 0.5,
  });

  return new THREE.Mesh(geo, [matSide, matFace, matFace]);
}


export default function VideoCoin({
  progressRef,
}: {
  progressRef: React.MutableRefObject<number>;
}) {
  const meshRef = useRef<THREE.Group>(null!);

  // Tweak these values to control the animation exactly how you want
  const CONFIG = {
    // When does the coin animation start & finish? (0–1 scroll progress)
    startProgress: 0.0,
    endProgress: 0.12,

    // Starting position & scale (when scroll = 0)
    start: {
      z: 3,       // How close to your face (higher = closer)
      y: -0.1,       // Vertical offset at start
      x: -0.04,       // Vertical offset at start
      scale: 3.8,   // How HUGE it appears at the beginning
    },

    // Final position & scale (when coin lands on phone)
    end: {
      z: 0.01,      // Final depth (0 = on phone screen, 0.01 = slightly in front)
      x: 0.2,
      y: 0.4,       // Final vertical position
      scale: 0.45,  // Final size on phone
    },

    // Spin speed
    spinY: 4,
    spinX: 1.8,
  };

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    const p = progressRef.current;

    // Always spin
    mesh.rotation.y += delta * CONFIG.spinY;
    mesh.rotation.x += delta * CONFIG.spinX;

    // Only animate during our defined window
    if (p >= CONFIG.startProgress && p <= CONFIG.endProgress) {
      const localProgress = (p - CONFIG.startProgress) / (CONFIG.endProgress - CONFIG.startProgress);
      const t = THREE.MathUtils.clamp(localProgress, 0, 1);
      const ease = THREE.MathUtils.smoothstep(t, 0, 1); // buttery smooth

      mesh.visible = true;

      // Interpolate position
      mesh.position.z = THREE.MathUtils.lerp(CONFIG.start.z, CONFIG.end.z, ease);
      mesh.position.y = THREE.MathUtils.lerp(CONFIG.start.y, CONFIG.end.y, ease);
      mesh.position.x = THREE.MathUtils.lerp(CONFIG.start.x, CONFIG.end.x, ease);

      // Interpolate scale
      const scale = THREE.MathUtils.lerp(CONFIG.start.scale, CONFIG.end.scale, ease);
      mesh.scale.set(scale, scale, scale);
    }
    // After animation ends → lock in final state (or hide)
    else if (p > CONFIG.endProgress) {
      mesh.visible = false; // change to false if coin should disappear
      mesh.position.z = CONFIG.end.z;
      mesh.position.y = CONFIG.end.y;
      mesh.scale.set(CONFIG.end.scale, CONFIG.end.scale, CONFIG.end.scale);
    }
    // Before animation starts → completely hidden
    else {
      mesh.visible = false;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main golden coin */}
      {/* <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.022, 72]} />
        <meshStandardMaterial
          color="#ffdd33"
          metalness={1}
          roughness={0.08}
          envMapIntensity={3}
        />
      </mesh> */}
      <primitive object={(() => {
        const m = createRealisticCoin();
        m.castShadow = true;
        m.receiveShadow = true;
        return m;
      })()} />


      {/* Optional glowing ring (uncomment opacity to see) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.125, 0.15, 48]} />
        <meshBasicMaterial color="#05DF72" opacity={0} transparent />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.118, 0.122, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0} transparent />
      </mesh>
    </group>
  );
}