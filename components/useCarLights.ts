// useCarLights.ts
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function useCarLights(
  scene: THREE.Object3D,
  rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined>,
  dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>
) {
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Prevent re-running if already initialized
    if (hasInitialized.current) return;

    // Single traverse to collect all meshes at once (MAJOR PERFORMANCE IMPROVEMENT)
    const lights: THREE.Mesh[] = [];
    const allMeshNames: string[] = [];
    const dashboardCandidates: THREE.Object3D[] = [];
    const keywordRegex = /lcd|screen|display|panel|monitor|gui|ui|dash/i;
    const lightRegex = /rear|rear_lightsl_left|tail|brake|light/i;

    // ONE SINGLE TRAVERSE instead of multiple (3x faster!)
    scene.traverse((child) => {
      if (child.type !== "Mesh") return;

      const mesh = child as THREE.Mesh;
      const name = mesh.name || "";

      // Collect mesh names for debugging (only if needed)
      if (process.env.NODE_ENV === 'development') {
        allMeshNames.push(name || "(unnamed)");
      }

      // Check for rear lights
      if (lightRegex.test(name)) {
        lights.push(mesh);
      }

      // Check for dashboard
      if (keywordRegex.test(name)) {
        dashboardCandidates.push(mesh);
      }
    });

    // --- Setup Rear Lights ---
    if (!rearLightsRef.current?.length && lights.length > 0) {
      lights.forEach((light) => {
        const mat: any = Array.isArray(light.material)
          ? light.material[0]
          : light.material;
        if (!mat.emissive) mat.emissive = new THREE.Color(0xff0000);
        mat.emissiveIntensity = 0; // start off
      });
      rearLightsRef.current = lights;
    }

    // --- Setup Dashboard LCD ---
    if (dashboardRef && !dashboardRef.current?.length) {
      if (process.env.NODE_ENV === 'development') {
        console.debug("[Car] total mesh count:", allMeshNames.length);
      }

      if (dashboardCandidates.length > 0) {
        if (process.env.NODE_ENV === 'development') {
          console.info("[Car] dashboard candidates found:", dashboardCandidates.length);
        }

        const exact = dashboardCandidates.find(
          (n) => n.name === "LCDs_LCDs.0_0"
        ) as THREE.Mesh | undefined;
        const pick = exact || (dashboardCandidates[0] as THREE.Mesh);

        if (pick && pick.type === "Mesh") {
          const mesh = pick as THREE.Mesh;
          const mat: any = Array.isArray(mesh.material)
            ? mesh.material[0]
            : mesh.material;
          if (!mat.emissive) mat.emissive = new THREE.Color(0x00aaff);
          mat.emissiveIntensity = 0;
          dashboardRef.current = [mesh];

          if (process.env.NODE_ENV === 'development') {
            console.info("[Car] Assigned dashboardRef to:", pick.name || "(unnamed)");
          }
        }
      } else if (process.env.NODE_ENV === 'development') {
        console.warn(
          "[Car] No dashboard/display candidates found. Sample mesh names:",
          allMeshNames.slice(0, 40)
        );
      }
    }

    hasInitialized.current = true;
  }, [scene, rearLightsRef, dashboardRef]);
}
