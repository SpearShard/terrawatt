"use client";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
const DashboardAnimation = dynamic(
  () => import("../components/DashboardAnimation"),
  { ssr: false }
);

// import DashboardOverlay from "../components/DashboardOverlay";

gsap.registerPlugin(ScrollTrigger);

function Car({
  rearLightsRef,
  dashboardRef,
  scale = 1.2,
}: {
  rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
  dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
  scale?: number;
}) {
  const { scene } = useGLTF("/models/newcar.glb");

  useEffect(() => {
    // rear lights
    if (!(rearLightsRef.current && rearLightsRef.current.length)) {
      const lights: THREE.Mesh[] = [];
      scene.traverse((child) => {
        if ((child as THREE.Object3D).type === "Mesh") {
          const name = (child as THREE.Object3D).name || "";
          if (/rear|rear_lightsl_left|tail|brake|light/i.test(name)) {
            lights.push(child as THREE.Mesh);
          }
        }
      });

      lights.forEach((light) => {
        const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
        if (!mat.emissive) mat.emissive = new THREE.Color(0xff0000);
        mat.emissiveIntensity = 0; // start off
      });

      rearLightsRef.current = lights;
    }

    // dashboard LCD — try to find likely LCD/display nodes by name and path
    if (dashboardRef && !(dashboardRef.current && dashboardRef.current.length)) {
      const allMeshNames: string[] = [];
      scene.traverse((c) => {
        if ((c as THREE.Object3D).type === "Mesh") allMeshNames.push((c as THREE.Object3D).name || "(unnamed)");
      });
      console.debug("[Car] total mesh count:", allMeshNames.length);

      // search for likely candidates by common keywords
      const keywordRegex = /lcd|screen|display|panel|monitor|gui|ui|dash/i;
      const candidates: THREE.Object3D[] = [];
      scene.traverse((c) => {
        if ((c as THREE.Object3D).type === "Mesh") {
          const name = (c as THREE.Object3D).name || "";
          if (keywordRegex.test(name)) candidates.push(c as THREE.Object3D);
        }
      });

      if (candidates.length > 0) {
        console.info("[Car] dashboard candidates found:");
        candidates.slice(0, 20).forEach((node) => {
          // build a simple path from root to this node
          const path: string[] = [];
          let cur: THREE.Object3D | null = node;
          while (cur) {
            path.unshift(cur.name || '(unnamed)');
            cur = cur.parent;
          }
          console.info(" - ", path.join("/"));
        });

        // prefer exact name if present, otherwise pick the first candidate
        const exact = candidates.find((n) => n.name === "LCDs_LCDs.0_0") as THREE.Mesh | undefined;
        const pick = exact || (candidates[0] as THREE.Mesh);
        if (pick && pick.type === "Mesh") {
          const mesh = pick as THREE.Mesh;
          const mat: any = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
          if (!mat.emissive) mat.emissive = new THREE.Color(0x00aaff);
          mat.emissiveIntensity = 0;
          dashboardRef.current = [mesh];
          console.info("[Car] Assigned dashboardRef to:", pick.name || '(unnamed)');
        }
      } else {
        console.warn("[Car] No dashboard/display candidates found. Sample mesh names:", allMeshNames.slice(0, 40));
      }
    }

  }, [scene, rearLightsRef, dashboardRef]);

  // this is the useEffect for the blue silhouette got the interiors of the car
  useEffect(() => {
  const rimColor = new THREE.Color("#010E78");

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const name = mesh.name.toLowerCase();

      if (
        name.includes("movsteer") ||
        name.includes("plastic") ||
        name.includes("whiteleather") ||
        name.includes("door") ||
        name.includes("leather_white") ||
        name.includes("bodysills") ||
        name.includes("belt_belt") ||
        name.includes("Putih.0_0") ||
        name.includes("chrome__movsteer") ||
        name.includes("texture_leather")
      ) {
        console.log("💙 Applying solid blue silhouette to:", mesh.name);

        mesh.material = new THREE.ShaderMaterial({
          uniforms: {
            baseColor: { value: new THREE.Color(0x000000) },
            rimColor: { value: rimColor },
            rimStrength: { value: 3.5 },
          },
          vertexShader: `
            varying vec3 vNormal;
            varying vec3 vWorldPosition;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vec4 worldPos = modelMatrix * vec4(position, 1.0);
              vWorldPosition = worldPos.xyz;
              gl_Position = projectionMatrix * viewMatrix * worldPos;
            }
          `,
          fragmentShader: `
            uniform vec3 baseColor;
            uniform vec3 rimColor;
            uniform float rimStrength;

            varying vec3 vNormal;
            varying vec3 vWorldPosition;

            void main() {
              vec3 viewDir = normalize(cameraPosition - vWorldPosition);
              float rim = 1.0 - abs(dot(viewDir, vNormal)); // absolute fixes transparency on backfaces
              rim = pow(rim, 3.0);
              float silhouette = rim * rimStrength;

              // Don't make backfaces transparent — just dim them slightly
              if (dot(vNormal, viewDir) < 0.0) silhouette *= 0.4;

              vec3 finalColor = baseColor + rimColor * silhouette;
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `,
          transparent: false,
          depthWrite: true,
          depthTest: true,
          side: THREE.DoubleSide, // ensures both sides render
        });

        mesh.material.needsUpdate = true;
      }
    }
  });
}, [scene]);




  useEffect(() => {
  const tex = new THREE.TextureLoader().load("/pexels.jpg");
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.flipY = false;

  setTimeout(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh && child.name === "windscreen_ok_glass0_0") {
        const mesh = child as THREE.Mesh;
        console.log("✅ Applying image to:", mesh.name);

        // 🧩 Create fallback UVs in case the mesh has none
        mesh.geometry.computeBoundingBox();
        const bbox = mesh.geometry.boundingBox!;
        const size = new THREE.Vector3();
        bbox.getSize(size);

        const positions = mesh.geometry.attributes.position;
        const uvs = new Float32Array(positions.count * 2);

        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const y = positions.getY(i);
          uvs[i * 2] = (x - bbox.min.x) / size.x;
          uvs[i * 2 + 1] = (y - bbox.min.y) / size.y;
        }

        mesh.geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

        // 🖼️ Apply material with texture
        mesh.material = new THREE.MeshStandardMaterial({
          map: tex,
          transparent: true,
          opacity: 1,
          metalness: 0.1,
          roughness: 0.4,
        });
        mesh.material.needsUpdate = true;
      }
    });
  }, 0);
}, [scene]);




  // ✨ Apply silhouette + rim glow shader
// ✨ Apply silhouette shader only to outer body meshes
useEffect(() => {

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const name = mesh.name.toLowerCase();

      // ⚪️ These meshes get the white rim-light silhouette shader
      if (
        name.includes("boot_primary") ||
        name.includes("body_primary") ||
        name.includes("whiteleather_Putih") ||
        name.includes("glass_glass") ||
        name.includes("JUST_BLACK") ||
        name.includes("tembus_boot_ok_tembus") ||
        name.includes("tembus_belakang_tembus")
      ) {
        mesh.material = new THREE.ShaderMaterial({
          uniforms: {
            baseColor: { value: new THREE.Color(0x000000) },
            rimColor: { value: new THREE.Color(0xffffff) }, // white silhouette
            rimStrength: { value: 4.5 }, // adjust glow intensity
            fadeHeight: { value: 2.8 },
          },
          vertexShader: `
            varying vec3 vNormal;
            varying vec3 vWorldPosition;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vec4 worldPos = modelMatrix * vec4(position, 1.0);
              vWorldPosition = worldPos.xyz;
              gl_Position = projectionMatrix * viewMatrix * worldPos;
            }
          `,
          fragmentShader: `
            uniform vec3 baseColor;
            uniform vec3 rimColor;
            uniform float rimStrength;
            uniform float fadeHeight;

            varying vec3 vNormal;
            varying vec3 vWorldPosition;

            void main() {
              vec3 viewDir = normalize(cameraPosition - vWorldPosition);
              float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
              rim = smoothstep(0.80, 0.98, rim);
              float fade = smoothstep(0.0, fadeHeight, vWorldPosition.y);
              float silhouette = rim * fade * rimStrength;
              if (dot(vNormal, viewDir) < 0.0) silhouette = 0.0;
              vec3 finalColor = mix(baseColor, rimColor, silhouette);
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `,
          transparent: false,
        });
      } else {
        // 🌗 Everything else keeps its original material (normal lighting)
        return;
      }
    }
  });
}, [scene]);


  return <primitive object={scene} scale={scale} />;
}



function ScrollCameraAnimation({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 50, 580);
    camera.lookAt(0, 1, 0);

    const isMobile = window.innerWidth < 768;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: isMobile ? "80% bottom" : "bottom bottom",
        scrub: true,
      },
    });

    // Camera movement
    // tl.to(camera.position, { z: -0.3, y: 20, duration: 3 });
    tl.to(camera.position, {
      z: isMobile ? 15 : -0.3,
      y: isMobile ? 18 : 20,
      duration: 3,
    });

    // Animate all rear lights
    // defensive: ensure we have lights array before animating
    (rearLightsRef.current || []).forEach((light: THREE.Mesh) => {
      const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
      if (!mat) return;
      tl.to(mat, { emissiveIntensity: 5, duration: 1 }, 0);
      // 0 means it starts with the camera animation
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [camera, rearLightsRef]);

  return null;
}

function FlickerLights({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
  useEffect(() => {
    if (!rearLightsRef.current || rearLightsRef.current.length === 0) return;

    // Trigger flicker when scroll reaches the top of the canvas
    ScrollTrigger.create({
      trigger: "#scroll-container",
      start: "top top", // trigger as soon as scrolling starts
      end: "+=1",       // short duration
      once: true,       // only trigger once
      onEnter: () => {
        rearLightsRef.current?.forEach((light) => {
          const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
          if (!mat) return;

          // Flicker timeline (two quick flashes)
          gsap.timeline()
            .to(mat, { emissiveIntensity: 10, duration: 0.1 })
            .to(mat, { emissiveIntensity: 0, duration: 0.1 })
            .to(mat, { emissiveIntensity: 10, duration: 0.1 })
            .to(mat, { emissiveIntensity: 12, duration: 0.2 }); // final steady intensity
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [rearLightsRef]);

  return null;
}






export default function Home() {
  const rearLightsRef = useRef<THREE.Mesh[]>([]); // ref for rear lights
  const dashboardRef = useRef<THREE.Mesh[] | undefined>(undefined);
  const [carScale, setCarScale] = useState(1.2);

  // Responsive scroll height and car scale
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCarScale(0.6); // Mobile
      } else if (width < 1024) {
        setCarScale(0.9); // Tablet
      } else {
        setCarScale(1.2); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "150vh" : "400vh";
  const contentHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "120vh" : "300vh";

  return (
    <main style={{ background: "black", minHeight: scrollHeight, color: "white" }}>
      {/* 🧭 Navbar stays fixed at top */}
      <Navbar />

      {/* 🚗 3D Car Section */}
      <div id="scroll-container" style={{ height: scrollHeight }}>
        <Canvas
          camera={{ position: [0, 1.5, 8], fov: 50 }}
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100vw",
            pointerEvents: "none",
          }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Car rearLightsRef={rearLightsRef} dashboardRef={dashboardRef} scale={carScale} />
          <ScrollCameraAnimation rearLightsRef={rearLightsRef} />
          <FlickerLights rearLightsRef={rearLightsRef} />
          <DashboardAnimation dashboardRef={dashboardRef} />
          <OrbitControls enabled={false} />
        </Canvas>

        <div
          style={{
            height: contentHeight,
            textAlign: "center",
            fontSize: "clamp(1rem, 5vw, 2rem)",
            paddingTop: "50%",
          }}
        >
          {/* add any scroll content here */}
        </div>
      </div>
      <div className="min-h-screen">
        <About />
      </div>
    </main>
  );
}



useGLTF.preload("/models/newcar.glb");
