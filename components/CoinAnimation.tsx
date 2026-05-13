"use client";

import { useEffect, useRef, type MutableRefObject } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

type CoinAnimationProps = {
  progressRef: MutableRefObject<number>;
  dashboardRef?: MutableRefObject<THREE.Mesh[] | undefined>;
};

export default function CoinAnimation({
  progressRef,
  dashboardRef,
}: CoinAnimationProps) {
  const coinRef = useRef<THREE.Mesh | null>(null);
  const baseColorsRef = useRef<THREE.Color[]>([]);
  const baseEmissiveRef = useRef<number[]>([]);
  const baseEnvRef = useRef<number[]>([]);
  const { camera } = useThree();

  useEffect(() => {
    const dashboardMesh = dashboardRef?.current?.[0];
    if (!dashboardMesh) return;

    const loader = new THREE.TextureLoader();

    const frontMap = loader.load("/croppedback.png");
    const backMap = loader.load("/coins.png");

    frontMap.colorSpace = THREE.SRGBColorSpace;
    backMap.colorSpace = THREE.SRGBColorSpace;
    frontMap.flipY = false;
    backMap.flipY = false;

    frontMap.center.set(0.5, 0.5);
    frontMap.rotation = Math.PI / 2;
    backMap.center.set(0.5, 0.5);
    backMap.rotation = Math.PI / 2;

    frontMap.wrapS = THREE.RepeatWrapping;
    frontMap.repeat.x = -1;
    backMap.wrapS = THREE.RepeatWrapping;
    backMap.repeat.x = -1;

    const envMap = loader.load(
      "https://threejs.org/examples/textures/229/brushed_metal.jpg"
    );
    envMap.mapping = THREE.EquirectangularReflectionMapping;

    const radius = 0.012;
    const thickness = 0.0025;
    const geo = new THREE.CylinderGeometry(radius, radius, thickness, 96, 1);

    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (Math.abs(y) < thickness * 0.49) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const a = Math.atan2(z, x);
        const ridge = Math.sin(a * 120) * 0.0003;

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

    const gold = 0xd29508;

    const matSide = new THREE.MeshStandardMaterial({
      color: gold,
      metalness: 1,
      roughness: 0.22,
      emissive: new THREE.Color(gold),
      emissiveIntensity: 0.45,
      envMap,
      envMapIntensity: 1.5,
    });

    const matFront = new THREE.MeshStandardMaterial({
      map: frontMap,
      color: 0xffffff,
      metalness: 0,
      roughness: 0.35,
      transparent: true,
      alphaTest: 0.5,
    });

    const matBack = new THREE.MeshStandardMaterial({
      map: backMap,
      color: 0xffffff,
      metalness: 0,
      roughness: 0.4,
      transparent: true,
      alphaTest: 0.5,
    });

    const coin = new THREE.Mesh(geo, [matSide, matFront, matBack]);
    coin.visible = false;

    const mats = coin.material as THREE.MeshStandardMaterial[];
    baseColorsRef.current = mats.map((m) => m.color.clone());
    baseEmissiveRef.current = mats.map((m) => m.emissiveIntensity);
    baseEnvRef.current = mats.map((m) => m.envMapIntensity ?? 1);

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

    dashboardMesh.add(coin);
    coinRef.current = coin;

    return () => {
      coin.removeFromParent();
      geo.dispose();
      matSide.dispose();
      matFront.dispose();
      matBack.dispose();
      frontMap.dispose();
      backMap.dispose();
      envMap.dispose();
    };
  }, [dashboardRef]);

    useFrame((_, delta) => {
        if (!coinRef.current) return;

        const coin = coinRef.current;
        const progress = progressRef.current;
        
        // Cache material reference to avoid repeated conversion
        if (!coin.material) return;
        const mats = coin.material as THREE.MeshStandardMaterial[];

        // Rotation - optimized for smoother motion
        if (progress < 0.965) {
            const rotSpeedY = Math.min(delta * 4, 0.1); // Cap rotation speed
            const rotSpeedX = Math.min(delta * 1.5, 0.05); // Cap rotation speed
            coin.rotation.y += rotSpeedY;
            coin.rotation.x += rotSpeedX;
        }

        if (progress > 0.95) {
            const t = THREE.MathUtils.clamp((progress - 0.95) / 0.05, 0, 1);
            // Optimized easing function
            const e = t * t * (3 - 2 * t); // Smoothstep equivalent

            coin.visible = true;
            const isMobile = window.innerWidth < 768;

            // Position animation - optimized calculations
            const moveY = isMobile ? 0.63 : 0.58;
            const moveZ = isMobile ? 0.196 : 0.165;
            const scaleBase = 1.0;
            const scaleAmplitude = 1.5;
            
            coin.position.y = moveY - e * 0.7;
            coin.position.z = moveZ;
            coin.scale.setScalar(scaleBase + e * scaleAmplitude);

            if (progress > 0.97) {
                const faceT = THREE.MathUtils.clamp((progress - 0.97) / 0.03, 0, 1);
                // Reduced smoothing factor for more responsive movement
                coin.quaternion.slerp(camera.quaternion, faceT * 0.15);
            }
        } else {
            coin.visible = false;
            coin.scale.setScalar(1);
            coin.rotation.set(0, 0, 0); // Reset rotation when hidden
        }

        // Material updates - optimized to reduce operations
        if (progress > 0.985) {
            const d = THREE.MathUtils.clamp((progress - 0.985) / 0.015, 0, 1);
            const darkness = 1 - d; // Simplified calculation

            for (let i = 0; i < mats.length; i++) {
                const mat = mats[i];
                const baseColor = baseColorsRef.current[i];
                mat.color.copy(baseColor);
                mat.color.multiplyScalar(darkness);
                mat.emissiveIntensity = baseEmissiveRef.current[i] * darkness;
                mat.envMapIntensity = baseEnvRef.current[i] * darkness;
            }
        } else {
            for (let i = 0; i < mats.length; i++) {
                const mat = mats[i];
                const baseColor = baseColorsRef.current[i];
                mat.color.copy(baseColor);
                mat.emissiveIntensity = baseEmissiveRef.current[i];
                mat.envMapIntensity = baseEnvRef.current[i];
            }
        }
    });

  return null;
}
