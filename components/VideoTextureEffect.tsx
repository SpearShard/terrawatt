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
//       windscreen_ok_glass0_0001: "/winshieldvideo.mp4",
     
  
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
//       windscreen_ok_glass0_0001: createVideoTexture(videoSources.windscreen_ok_glass0_0001),
     
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
//              uvs[i * 2 + 1] = 1 - (y - bbox.min.y) / size.y;

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











// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { useThree } from "@react-three/fiber";

// export default function VideoTextureEffect({
//   progressRef,
// }: {
//   progressRef: React.MutableRefObject<number>;
// }) {
//   const { scene } = useThree();
//   const hasInitialized = useRef(false);
//   const rafIdRef = useRef<number | null>(null);

//   const TOTAL_FRAMES = 598;

//   const ACTIVE_RANGES: readonly [number, number][] = [
//     [79,156],
// [239,373],
// [471,535],

//   ];

//   useEffect(() => {
//     if (hasInitialized.current) return;

//     /* ---------------- VIDEO SETUP ---------------- */

//     const videoSources = {
//       windscreen_ok_glass0_0001: "/winshieldvideo.mp4",
//     };

//     const createVideoTexture = (src: string) => {
//       const video = document.createElement("video");
//       video.src = src;
//       video.crossOrigin = "anonymous";
//       video.loop = true;
//       video.muted = true;
//       video.playsInline = true;
//       video.preload = "metadata";
//       video.load(); // important for Safari

//       const texture = new THREE.VideoTexture(video);
//       texture.colorSpace = THREE.SRGBColorSpace;
//       texture.minFilter = THREE.NearestFilter;
//       texture.magFilter = THREE.NearestFilter;
//       texture.generateMipmaps = false;
//       texture.needsUpdate = true;

//       return texture;
//     };

//     const textures = {
//       windscreen_ok_glass0_0001: createVideoTexture(
//         videoSources.windscreen_ok_glass0_0001
//       ),
//     };

//     /* ---------------- APPLY TO MESH ---------------- */

//     const timeoutId = setTimeout(() => {
//       const processedMeshes = new Set<THREE.Mesh>();

//       scene.traverse((child) => {
//         if (!(child as THREE.Mesh).isMesh) return;

//         const mesh = child as THREE.Mesh;
//         const texture = textures[mesh.name as keyof typeof textures];
//         if (!texture || processedMeshes.has(mesh)) return;

//         processedMeshes.add(mesh);

//         if (process.env.NODE_ENV === "development") {
//           console.log("🎥 Windshield video applied to:", mesh.name);
//         }

//         mesh.geometry.computeBoundingBox();
//         const bbox = mesh.geometry.boundingBox!;
//         const size = new THREE.Vector3();
//         bbox.getSize(size);

//         const pos = mesh.geometry.attributes.position;
//         const uvs = new Float32Array(pos.count * 2);

//         for (let i = 0; i < pos.count; i++) {
//           const x = pos.getX(i);
//           const y = pos.getY(i);

//           uvs[i * 2] = (x - bbox.min.x) / size.x;
//           uvs[i * 2 + 1] = 1 - (y - bbox.min.y) / size.y; // flip Y
//         }

//         mesh.geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

//         mesh.material = new THREE.MeshBasicMaterial({
//           map: texture,
//           transparent: true,
//           opacity: 1,
//           toneMapped: false,
//         });
//       });

//       /* ---------------- FRAME SYNC ---------------- */

//       const syncWithDashboard = () => {
//         const progress = progressRef.current; // 0 → 1
//         const currentFrame = Math.floor(progress * TOTAL_FRAMES);

//         const isActive = ACTIVE_RANGES.some(
//           ([start, end]) => currentFrame >= start && currentFrame <= end
//         );

//         Object.values(textures).forEach((tex) => {
//           const video = tex.image as HTMLVideoElement;
//           if (!video) return;

//           if (isActive) {
//             if (video.paused) {
//               video.play().catch(() => {});
//             }
//           } else {
//             if (!video.paused) {
//               video.pause();
//               video.currentTime = 0;
//             }
//           }
//         });

//         rafIdRef.current = requestAnimationFrame(syncWithDashboard);
//       };

//       syncWithDashboard();
//       hasInitialized.current = true;
//     }, 1500);

//     /* ---------------- CLEANUP ---------------- */

//     return () => {
//       clearTimeout(timeoutId);

//       if (rafIdRef.current !== null) {
//         cancelAnimationFrame(rafIdRef.current);
//       }

//       Object.values(textures).forEach((tex) => {
//         const video = tex.image as HTMLVideoElement;
//         if (video) {
//           video.pause();
//           video.src = "";
//         }
//         tex.dispose();
//       });
//     };
//   }, [scene, progressRef]);

//   return null;
// }













"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export default function VideoTextureEffect({
  progressRef,
}: {
  progressRef: React.MutableRefObject<number>;
}) {
  const { scene } = useThree();
  const hasInitialized = useRef(false);
  const rafIdRef = useRef<number | null>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial | null>(null);

  const TOTAL_FRAMES = 598;

  const ACTIVE_RANGES: readonly [number, number][] = [
    [79, 156],
    [239, 372],
    [471, 535],
  ];

  useEffect(() => {
    if (hasInitialized.current) return;

    /* ---------------- VIDEO SETUP ---------------- */

    const createVideoTexture = (src: string) => {
      const video = document.createElement("video");
      video.src = src;
      video.crossOrigin = "anonymous";
      video.loop = false; // important now
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.load();

      const texture = new THREE.VideoTexture(video);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;

      return texture;
    };

    const videoTexture = createVideoTexture("/windshieldvideo.mp4");

    /* ---------------- APPLY TO MESH ---------------- */

    const timeoutId = setTimeout(() => {
      const processedMeshes = new Set<THREE.Mesh>();

      scene.traverse((child) => {
        if (!(child as THREE.Mesh).isMesh) return;

        const mesh = child as THREE.Mesh;
        if (mesh.name !== "windscreen_ok_glass0_0001") return;
        if (processedMeshes.has(mesh)) return;

        processedMeshes.add(mesh);

        mesh.geometry.computeBoundingBox();
        const bbox = mesh.geometry.boundingBox!;
        const size = new THREE.Vector3();
        bbox.getSize(size);

        const pos = mesh.geometry.attributes.position;
        const uvs = new Float32Array(pos.count * 2);

        for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i);
          const y = pos.getY(i);

          uvs[i * 2] = (x - bbox.min.x) / size.x;
          uvs[i * 2 + 1] = 1 - (y - bbox.min.y) / size.y;
        }

        mesh.geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

        const mat = new THREE.MeshBasicMaterial({
          map: videoTexture,
          toneMapped: false,
        });

        mesh.material = mat;
        materialRef.current = mat;
      });

      /* ---------------- FRAME SYNC + SPEED RAMP ---------------- */

      let wasActive = false;

      const syncWithDashboard = () => {
        const progress = progressRef.current;
        const currentFrame = Math.floor(progress * TOTAL_FRAMES);

        const activeRange = ACTIVE_RANGES.find(
          ([start, end]) => currentFrame >= start && currentFrame <= end
        );

        const mat = materialRef.current;
        if (mat) {
          const video = videoTexture.image as HTMLVideoElement;

          if (activeRange) {
            if (video.paused) video.play().catch(() => {});

            const [start, end] = activeRange;
            const rangeLength = end - start;
            const localFrame = currentFrame - start;
            const t = localFrame / rangeLength;

            const ramp = 0.12;
            let speed = 1;

            if (t < ramp) {
              speed = THREE.MathUtils.smoothstep(t / ramp, 0, 1);
            } else if (t > 1 - ramp) {
              speed = THREE.MathUtils.smoothstep((1 - t) / ramp, 0, 1);
            }

            // Safari-safe minimum (~0.25)
            video.playbackRate = Math.max(0.25, speed);

            wasActive = true;
          } else {
            // outside range → gently stop on last frame
            if (wasActive) {
              video.pause();
            }
            wasActive = false;
          }

          mat.needsUpdate = true;
        }

        rafIdRef.current = requestAnimationFrame(syncWithDashboard);
      };

      syncWithDashboard();
      hasInitialized.current = true;
    }, 1500);

    /* ---------------- CLEANUP ---------------- */

    return () => {
      clearTimeout(timeoutId);

      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      const video = videoTexture.image as HTMLVideoElement;
      if (video) {
        video.pause();
        video.src = "";
      }

      videoTexture.dispose();
    };
  }, [scene, progressRef]);

  return null;
}


