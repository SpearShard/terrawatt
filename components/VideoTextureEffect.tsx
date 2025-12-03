// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { useThree } from "@react-three/fiber";

// export default function VideoTextureEffect() {
//   const { scene } = useThree();
//   const hasInitialized = useRef(false);

//   useEffect(() => {
//     if (hasInitialized.current) return; // Prevent re-running

//     const videoSources = {
//       windscreen_ok_glass0_0: "streaks_left_right.mp4",
//       door_lf_glass0_0: "/windshield/leftdown2.mp4",
//       door_rf_glass0_0: "/windshield/rightdown2.mp4",
  
//     };

//     const createVideoTexture = (src: string) => {
//       const video = document.createElement("video");
//       video.src = src;
//       video.crossOrigin = "anonymous";
//       video.loop = true;
//       video.muted = true;
//       video.playsInline = true;
//       video.autoplay = true;
//       video.preload = "metadata"; // Changed from "auto" for faster load

//       // Reduce video quality for performance
//       video.setAttribute('playbackRate', '1');

//       video.play().catch((err) => console.warn("Autoplay blocked:", err));

//       const tex = new THREE.VideoTexture(video);
//       tex.colorSpace = THREE.SRGBColorSpace;
//       // Use NearestFilter for better performance (less GPU processing)
//       tex.minFilter = THREE.NearestFilter;
//       tex.magFilter = THREE.NearestFilter;
//       tex.format = THREE.RGBFormat;
//       tex.generateMipmaps = false; // Disable mipmaps for performance
//       tex.needsUpdate = true;
//       return tex;
//     };

//     const textures = {
//       windscreen_ok_glass0_0: createVideoTexture(videoSources.windscreen_ok_glass0_0),
//       door_lf_glass0_0: createVideoTexture(videoSources.door_lf_glass0_0),
//       door_rf_glass0_0: createVideoTexture(videoSources.door_rf_glass0_0),
    
//     };

//     const timeoutId = setTimeout(() => {
//       const processedMeshes = new Set<THREE.Mesh>(); // Track processed meshes

//       scene.traverse((child) => {
//         if ((child as THREE.Mesh).isMesh) {
//           const mesh = child as THREE.Mesh;
//           const tex = textures[mesh.name as keyof typeof textures];
//           if (tex && !processedMeshes.has(mesh)) {
//             processedMeshes.add(mesh);

//             if (process.env.NODE_ENV === 'development') {
//               console.log("✅ Applying video to:", mesh.name);
//             }

//             mesh.geometry.computeBoundingBox();
//             const bbox = mesh.geometry.boundingBox!;
//             const size = new THREE.Vector3();
//             bbox.getSize(size);

//             const positions = mesh.geometry.attributes.position;
//             const uvs = new Float32Array(positions.count * 2);

//             for (let i = 0; i < positions.count; i++) {
//               const x = positions.getX(i);
//               const y = positions.getY(i);
//               uvs[i * 2] = (x - bbox.min.x) / size.x;
//               uvs[i * 2 + 1] = 1 - (y - bbox.min.y) / size.y;
//             }

//             mesh.geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

//             // Use MeshBasicMaterial instead of MeshStandardMaterial for better performance
//             mesh.material = new THREE.MeshBasicMaterial({
//               map: tex,
//               transparent: true,
//               opacity: 1,
//               toneMapped: false,
//             });
//             mesh.material.needsUpdate = true;
//           }
//         }
//       });

//       hasInitialized.current = true;
//     }, 1500);

//     return () => {
//       clearTimeout(timeoutId);
//       // Clean up video elements
//       Object.values(textures).forEach(tex => {
//         const video = tex.image as HTMLVideoElement;
//         if (video) {
//           video.pause();
//           video.src = "";
//         }
//         tex.dispose();
//       });
//     };
//   }, [scene]);

//   return null;
// }


"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { createWindshieldStreakMaterial } from "@/components/WindshieldStreakMaterial";

export default function VideoTextureEffect() {
  const { scene } = useThree();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;

    // 🎯 Mesh names you want streaks on
    const streakMeshes = [
      "windscreen_ok_glass0_0",
      "door_lf_glass0_0",
      "door_rf_glass0_0",
    ];

    // Store materials so we can animate them
    const shaderMaterials: THREE.ShaderMaterial[] = [];

    const timeoutId = setTimeout(() => {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;

          if (streakMeshes.includes(mesh.name)) {
            console.log("✨ Applying streak shader to:", mesh.name);

            // Assign streak shader
            const mat = createWindshieldStreakMaterial();
            mesh.material = mat;
            shaderMaterials.push(mat);

            // Ensure UVs exist (generate planar UVs if missing)
            // 🆕 FORCE PROJECTION UVs FOR WINDSHIELD
const pos = mesh.geometry.attributes.position;
const uvs = new Float32Array(pos.count * 2);

for (let i = 0; i < pos.count; i++) {
  const x = pos.getX(i);
  const y = pos.getY(i);
  const z = pos.getZ(i);

  // Project streaks along windshield curve
  uvs[i * 2] = (x * 0.5 + z * 0.5) * 0.5 + 0.5;
  uvs[i * 2 + 1] = (y + 1.0) * 0.5;
}

mesh.geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));


            mesh.material.needsUpdate = true;
          }
        }
      });

      // 🎞 Animate uTime uniform
      const animate = () => {
        shaderMaterials.forEach((mat) => {
          mat.uniforms.uTime.value += 0.02;
        });

        requestAnimationFrame(animate);
      };
      animate();

      hasInitialized.current = true;
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [scene]);

  return null;
}
