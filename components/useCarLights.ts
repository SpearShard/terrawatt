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

        // 🔧 Explicitly defined target meshes (no regex)
        const rearLightNames = [
            "rear_lightsl_left_rear_light_0",
            "rear_lightsr_right_rear_light_0",
            "rear_lights_right_rear_light_0",
        ];

        const dashboardNames = ["LCDs_LCDs.0_0"];
        const foundRearLights: THREE.Mesh[] = [];
        const foundDashboards: THREE.Mesh[] = [];
        const allMeshNames: string[] = [];

        const keywordRegex = /lcd|screen|display|panel|monitor|gui|ui|dash/i;

        // Traverse scene once
        scene.traverse((child) => {
            if (!(child instanceof THREE.Mesh)) return;
            const name = child.name || "";
            allMeshNames.push(name);

            // 🎯 Rear Lights
            if (rearLightNames.includes(name)) {
                foundRearLights.push(child);
                console.log("💡 Found rear light:", name);

                // Apply emissive yellow material
                const mat = new THREE.MeshStandardMaterial({
                    color: 0xff6600,
                    emissive: new THREE.Color(0xff6600), // yellow
                    emissiveIntensity: 0, // start off
                    toneMapped: false,
                });

                child.material = mat;
                child.material.needsUpdate = true;
            }

            // 🧭 Dashboard candidates
            if (keywordRegex.test(name) || dashboardNames.includes(name)) {
                foundDashboards.push(child);
            }
        });

        // --- 🧩 Rear Lights Ref ---
        if (foundRearLights.length) {
            rearLightsRef.current = foundRearLights;
        }

        // --- ⚙️ Dashboard Logic (Restored) ---
        if (dashboardRef && !dashboardRef.current?.length) {
            if (foundDashboards.length > 0) {
                const exact = foundDashboards.find(
                    (n) => n.name === "LCDs_LCDs.0_0"
                ) as THREE.Mesh | undefined;
                const pick = exact || (foundDashboards[0] as THREE.Mesh);

                if (pick && pick.type === "Mesh") {
                    const mesh = pick as THREE.Mesh;
                    const mat: any = Array.isArray(mesh.material)
                        ? mesh.material[0]
                        : mesh.material;

                    if (!mat.emissive) mat.emissive = new THREE.Color(0x00aaff);
                    mat.emissiveIntensity = 0;
                    dashboardRef.current = [mesh];

                    console.info("[Car] Assigned dashboardRef to:", pick.name || "(unnamed)");
                }
            } else {
                console.warn(
                    "[Car] No dashboard/display candidates found. Sample mesh names:",
                    allMeshNames.slice(0, 40)
                );
            }
        }

        // --- ⚡ Flicker Animation on Page Load ---
        foundRearLights.forEach((mesh) => {
            const mat = mesh.material as THREE.MeshStandardMaterial;
            gsap.fromTo(
                mat,
                { emissiveIntensity: 0 },
                {
                    emissiveIntensity: 3,
                    duration: 0.1,
                    repeat: 6,
                    yoyo: true,
                    ease: "power1.inOut",
                    onComplete: () => {
  mat.emissive.set(0xff0000); // switch emissive color back to red
  mat.emissiveIntensity = 1; // keep the red glow on
},

                }
            );
        });

        // --- 🌟 Scroll-based gradual brightness ---
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollProgress = Math.min(scrollY / maxScroll, 1);

            foundRearLights.forEach((mesh) => {
                const mat = mesh.material as THREE.MeshStandardMaterial;
                gsap.to(mat, {
                    emissiveIntensity: THREE.MathUtils.lerp(1, 4, scrollProgress),
                    duration: 0.2,
                    ease: "power1.out",
                    onUpdate: () => {
                        // Blend color from red → yellow based on scroll progress
                        const color = new THREE.Color(0xff0000).lerp(
                            new THREE.Color(0xff6600),
                            scrollProgress
                        );
                        mat.emissive.copy(color);
                    },
                });

            });
        };

        window.addEventListener("scroll", handleScroll);
        hasInitialized.current = true;

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scene, rearLightsRef, dashboardRef]);
}





