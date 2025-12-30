// // useCarLights.ts
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import gsap from "gsap";

// export function useCarLights(
//     scene: THREE.Object3D,
//     rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined>,
//     dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>
// ) {
//     const hasInitialized = useRef(false);

//     useEffect(() => {
//         if (hasInitialized.current) return;

//         // 🔧 Explicitly defined target meshes (no regex)
//         const rearLightNames = [
//             "rear_lightsl_left_rear_light_0",
//             "rear_lightsr_right_rear_light_0",
//             "rear_lights_right_rear_light_0",
//         ];

//         const dashboardNames = ["LCDs_LCDs.0_0"];
//         const foundRearLights: THREE.Mesh[] = [];
//         const foundDashboards: THREE.Mesh[] = [];
//         const allMeshNames: string[] = [];

//         const keywordRegex = /lcd|screen|display|panel|monitor|gui|ui|dash/i;

//         // Traverse scene once
//         scene.traverse((child) => {
//             if (!(child instanceof THREE.Mesh)) return;
//             const name = child.name || "";
//             allMeshNames.push(name);

//             // 🎯 Rear Lights
//             if (rearLightNames.includes(name)) {
//                 foundRearLights.push(child);
//                 // console.log("💡 Found rear light:", name);

//                 // Apply emissive yellow material
//                 const mat = new THREE.MeshStandardMaterial({
//                     color: 0xff6600,
//                     emissive: new THREE.Color(0xff6600), // yellow
//                     emissiveIntensity: 0, // start off
//                     toneMapped: false,
//                 });

//                 child.material = mat;
//                 child.material.needsUpdate = true;
//             }

//             // 🧭 Dashboard candidates
//             if (keywordRegex.test(name) || dashboardNames.includes(name)) {
//                 foundDashboards.push(child);
//             }
//         });

//         // --- 🧩 Rear Lights Ref ---
//         if (foundRearLights.length) {
//             rearLightsRef.current = foundRearLights;
//         }

//         // --- ⚙️ Dashboard Logic (Restored) ---
//         if (dashboardRef && !dashboardRef.current?.length) {
//             if (foundDashboards.length > 0) {
//                 const exact = foundDashboards.find(
//                     (n) => n.name === "LCDs_LCDs.0_0"
//                 ) as THREE.Mesh | undefined;
//                 const pick = exact || (foundDashboards[0] as THREE.Mesh);

//                 if (pick && pick.type === "Mesh") {
//                     const mesh = pick as THREE.Mesh;
//                     const mat: any = Array.isArray(mesh.material)
//                         ? mesh.material[0]
//                         : mesh.material;

//                     if (!mat.emissive) mat.emissive = new THREE.Color(0x00aaff);
//                     mat.emissiveIntensity = 0;
//                     dashboardRef.current = [mesh];

//                     console.info("[Car] Assigned dashboardRef to:", pick.name || "(unnamed)");
//                 }
//             } else {
//                 console.warn(
//                     "[Car] No dashboard/display candidates found. Sample mesh names:",
//                     allMeshNames.slice(0, 40)
//                 );
//             }
//         }

//         // --- ⚡ Flicker Animation on Page Load ---
//         foundRearLights.forEach((mesh) => {
//             const mat = mesh.material as THREE.MeshStandardMaterial;
//             gsap.fromTo(
//                 mat,
//                 { emissiveIntensity: 0 },
//                 {
//                     emissiveIntensity: 3,
//                     duration: 0.1,
//                     repeat: 6,
//                     yoyo: true,
//                     ease: "power1.inOut",
//                     onComplete: () => {
//   mat.emissive.set(0xff0000); // switch emissive color back to red
//   mat.emissiveIntensity = 1; // keep the red glow on
// },

//                 }
//             );
//         });

//         // --- 🌟 Scroll-based gradual brightness ---
//         const handleScroll = () => {
//             const scrollY = window.scrollY;
//             const maxScroll = document.body.scrollHeight - window.innerHeight;
//             const scrollProgress = Math.min(scrollY / maxScroll, 1);

//             foundRearLights.forEach((mesh) => {
//                 const mat = mesh.material as THREE.MeshStandardMaterial;
//                 gsap.to(mat, {
//                     emissiveIntensity: THREE.MathUtils.lerp(1, 4, scrollProgress),
//                     duration: 0.2,
//                     ease: "power1.out",
//                     onUpdate: () => {
//                         // Blend color from red → yellow based on scroll progress
//                         const color = new THREE.Color(0xff0000).lerp(
//                             new THREE.Color(0xff6600),
//                             scrollProgress
//                         );
//                         mat.emissive.copy(color);
//                     },
//                 });

//             });
//         };

//         window.addEventListener("scroll", handleScroll);
//         hasInitialized.current = true;

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [scene, rearLightsRef, dashboardRef]);
// }
























// useCarLights.ts
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

export function useCarLights(
  scene: THREE.Object3D,
  rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined>,
  dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>
) {
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;

    const rearLightNames = [
      "rear_lightsl_left_rear_light_0001",
      "rear_lightsr_right_rear_light_0001",
      "rear_lights_right_rear_light_0001",
    ];

    const dashboardNames = ["LCDs_LCDs.0_0"];
    const keywordRegex = /lcd|screen|display|panel|monitor|gui|ui|dash/i;

    const foundRearLights: THREE.Mesh[] = [];
    const foundDashboards: THREE.Mesh[] = [];

    /* ------------------------------------------------
       FIND MESHES + PREP MATERIALS
    ------------------------------------------------ */
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const name = child.name || "";

      // 🚗 Rear lights
      if (rearLightNames.includes(name)) {
        foundRearLights.push(child);

        const originalMat = Array.isArray(child.material)
          ? child.material[0]
          : child.material;

        const mat = originalMat.clone() as THREE.MeshStandardMaterial;

        mat.emissive = new THREE.Color(0xff0000); // pure red
        mat.emissiveIntensity = 0;               // start fully off
        mat.toneMapped = false;

        child.material = mat;
      }

      // 📺 Dashboard candidates
      if (keywordRegex.test(name) || dashboardNames.includes(name)) {
        foundDashboards.push(child);
      }
    });

    /* ------------------------------------------------
       ASSIGN REFS
    ------------------------------------------------ */
    if (foundRearLights.length) {
      rearLightsRef.current = foundRearLights;
    }

    if (dashboardRef && foundDashboards.length && !dashboardRef.current?.length) {
      const exact = foundDashboards.find(
        (m) => m.name === "LCDs_LCDs.0_0"
      ) as THREE.Mesh | undefined;

      dashboardRef.current = exact ? [exact] : [foundDashboards[0]];
    }

    /* ------------------------------------------------
       🔴🔴 DOUBLE BLINK → ⚫ BLACK → 🔴 STEADY RED
    ------------------------------------------------ */
    if (foundRearLights.length) {
      const blinkTl = gsap.timeline({ delay: 0.25 });

      foundRearLights.forEach((mesh) => {
        const mat = mesh.material as THREE.MeshStandardMaterial;

        blinkTl
          // --- Blink 1 ON (RED) ---
          .set(mat.emissive, { r: 1, g: 0, b: 0 }, 0)
          .to(mat, { emissiveIntensity: 12, duration: 0.12 }, 0)

          // --- Blink 1 OFF (BLACK) ---
          .to(mat, { emissiveIntensity: 0, duration: 0.12 }, 0.18)

          // --- Blink 2 ON (RED) ---
          .set(mat.emissive, { r: 1, g: 0, b: 0 }, 0.36)
          .to(mat, { emissiveIntensity: 12, duration: 0.12 }, 0.36)

          // --- Blink 2 OFF (BLACK) ---
          .to(mat, { emissiveIntensity: 0, duration: 0.12 }, 0.54)

          // --- Settle to steady RED ---
          .set(mat.emissive, { r: 1, g: 0, b: 0 }, 0.72)
          .to(mat, { emissiveIntensity: 4, duration: 0.35 }, 0.72);
      });
    }

    /* ------------------------------------------------
       SCROLL-BASED BRIGHTENING + COLOR WARMTH
    ------------------------------------------------ */
    const baseColor = new THREE.Color(0xff0000);
    const midColor = new THREE.Color(0xff6600);
    const endColor = new THREE.Color(0xffaa00);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);

      foundRearLights.forEach((mesh) => {
        const mat = mesh.material as THREE.MeshStandardMaterial;

        if (!(mat.emissive instanceof THREE.Color)) {
          mat.emissive = new THREE.Color(0xff0000);
        }

        // intensity ramp
        mat.emissiveIntensity = THREE.MathUtils.lerp(4, 10, progress);

        // color warmth ramp
        const color = baseColor
          .clone()
          .lerp(midColor, progress * 0.7)
          .lerp(endColor, progress * 0.3);

        mat.emissive.copy(color);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    hasInitialized.current = true;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scene, rearLightsRef, dashboardRef]);
}
