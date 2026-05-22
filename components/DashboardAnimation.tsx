"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import CoinAnimation from "./CoinAnimation";

export default function DashboardAnimation({
  dashboardRef,
  progressRef,
}: {
  dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
  progressRef: React.MutableRefObject<number>;
  onReady?: () => void;
}) {
  const uiGroup = useRef<THREE.Group>(new THREE.Group());

  const planeRef = useRef<THREE.Mesh | null>(null);

  const scrollRef = useRef(0);
  const smoothScrollRef = useRef(0);

  const rafRef = useRef<number | null>(null);

  const rendererRef =
  useRef<THREE.WebGLRenderer | null>(
    null
  );

  // =========================
  // ATLAS SETTINGS
  // =========================

  const TOTAL_FRAMES = 572;

  const FRAMES_PER_ATLAS = 143;

  const COLS = 13;
  const ROWS = 11;

  // =========================
  // ATLAS STORAGE
  // =========================

  const atlasTexturesRef = useRef<THREE.Texture[]>([]);

  const currentAtlasIndexRef = useRef(0);

  // =========================
  // LOAD ALL ATLASES
  // =========================

  useEffect(() => {
    const loader = new THREE.TextureLoader();

    const atlasPaths = [
      "/dashsmaller/dash_atlas/atlas1.webp",
      "/dashsmaller/dash_atlas/atlas2.webp",
      "/dashsmaller/dash_atlas/atlas3.webp",
      "/dashsmaller/dash_atlas/atlas4.webp",
    ];

    atlasPaths.forEach((path, index) => {
      loader.load(path, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;

        texture.minFilter = THREE.LinearFilter;

texture.magFilter = THREE.LinearFilter;

texture.generateMipmaps = false;

texture.anisotropy = 1;

        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;

        atlasTexturesRef.current[index] = texture;

        texture.needsUpdate = true;

// PREWARM GPU
rendererRef.current?.initTexture(
  texture
);

        

        // FIRST ATLAS
        if (
  index === 0 &&
  planeRef.current
) {
          const mat = planeRef.current?.material as THREE.MeshBasicMaterial;

          if (mat) {
            mat.map = texture;
            mat.needsUpdate = true;
          }
        }
      });
    });
  }, []);

  // =========================
  // SCROLL
  // =========================

  useEffect(() => {
    (window as Window & { __SCROLL_PROGRESS__?: number }).__SCROLL_PROGRESS__ = 0;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      rafRef.current = requestAnimationFrame(() => {
        const scrollContainer = document.querySelector(
          "#scroll-container"
        ) as HTMLElement | null;

        const startHeight = scrollContainer
          ? scrollContainer.offsetHeight * 0.1
          : window.innerHeight * 2;

        const endHeight = scrollContainer
          ? scrollContainer.offsetHeight - window.innerHeight
          : document.body.scrollHeight - window.innerHeight;

        const rawScroll = Math.max(0, window.scrollY - startHeight);

        const MIN_SCROLL_PX = window.innerHeight * 5;

        const maxScroll = Math.max(
          MIN_SCROLL_PX,
          endHeight - startHeight
        );

        scrollRef.current = Math.max(
          0,
          Math.min(1, rawScroll / maxScroll)
        );

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // =========================
  // ATTACH UI
  // =========================

  useEffect(() => {
    const dashboardMesh = dashboardRef.current?.[0];

    if (!dashboardMesh) return;

    dashboardMesh.add(uiGroup.current);

    uiGroup.current.position.set(0, 0.7, 0.17);

    uiGroup.current.rotation.set(1.35, 0, 0);

    return () => {
      dashboardMesh.remove(uiGroup.current);
    };
  }, [dashboardRef]);

  // =========================
  // MAIN LOOP
  // =========================

  useFrame((_state, delta) => {
    rendererRef.current = _state.gl;
    const plane = planeRef.current;

    if (!plane) return;

    // =====================
    // SMOOTH SCROLL
    // =====================

    const targetScroll = scrollRef.current;

    const gap = Math.abs(
      targetScroll - smoothScrollRef.current
    );

    const inCoinPhase = targetScroll > 0.9;

    const damping = inCoinPhase
      ? gap > 0.02
        ? 18
        : 12
      : 7;

    smoothScrollRef.current +=
      (targetScroll - smoothScrollRef.current) *
      (1 - Math.exp(-damping * delta));

    const progress = smoothScrollRef.current;

    progressRef.current = progress;

    (window as any).__SCROLL_PROGRESS__ = progress;

    // =====================
    // GLOBAL FRAME
    // =====================

    const exactGlobalFrame =
      progress * (TOTAL_FRAMES - 1);

    const globalFrame = Math.round(exactGlobalFrame);

    // =====================
    // WHICH ATLAS?
    // =====================

    const atlasIndex = Math.min(
      3,
      Math.floor(globalFrame / FRAMES_PER_ATLAS)
    );

    // =====================
    // LOCAL FRAME
    // =====================

    const localFrame =
      globalFrame % FRAMES_PER_ATLAS;

    // =====================
    // GET TEXTURE
    // =====================

    const texture =
      atlasTexturesRef.current[atlasIndex];

    if (!texture) return;

    // =====================
    // SWITCH ATLAS
    // =====================

    if (
      currentAtlasIndexRef.current !== atlasIndex
    ) {
      const mat =
        plane.material as THREE.MeshBasicMaterial;

      mat.map = texture;

      mat.needsUpdate = true;

      currentAtlasIndexRef.current =
        atlasIndex;
    }

    // =====================
    // UV ANIMATION
    // =====================

    const col = localFrame % COLS;

    const row = Math.floor(localFrame / COLS);

    texture.repeat.set(
      1 / COLS,
      1 / ROWS
    );

    texture.offset.x = col / COLS;

    texture.offset.y =
      1 - (row + 1) / ROWS;
  });

  return (
    <group ref={uiGroup}>
      <group position={[0, 0, 0.05]}>
        <mesh position={[0, 0, -0.015]}>
          <RoundedBox
            args={[0.5, 0.33, 0.03]}
            radius={0.015}
            smoothness={4}
          >
            <meshStandardMaterial
              color="#111111"
              roughness={0.6}
              metalness={0.1}
            />
          </RoundedBox>
        </mesh>

        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[0.47, 0.29]} />

          <meshBasicMaterial color="#000" />
        </mesh>

        <mesh
          ref={planeRef}
          position={[0, 0, 0.001]}
        >
          <planeGeometry args={[0.47, 0.29]} />

          <meshBasicMaterial toneMapped={false} />
        </mesh>
      </group>

      <CoinAnimation
        progressRef={progressRef}
        dashboardRef={dashboardRef}
      />
    </group>
  );
}










