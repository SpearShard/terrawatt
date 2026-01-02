"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";
import * as THREE from "three";

export const SharedCoin = forwardRef(function SharedCoin(
  { scale = [1, 1, 1] }: { scale?: [number, number, number] },
  ref
) {
  const meshRef = useRef<THREE.Mesh>(null);
  useImperativeHandle(ref, () => meshRef.current);

  const normalMap = new THREE.TextureLoader().load("/bump.png");
  normalMap.colorSpace = THREE.SRGBColorSpace;

  const radius = 0.012;
  const thickness = 0.0025;
  const geo = new THREE.CylinderGeometry(radius, radius, thickness, 96, 1, false);

  // same ridges logic...
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const isSide = Math.abs(y) < thickness * 0.49;
    if (isSide) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const angle = Math.atan2(z, x);
      const ridge = Math.sin(angle * 120) * 0.0003;
      pos.setXYZ(i, x + ridge * (x / radius), y, z + ridge * (z / radius));
    }
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();

  const matSide = new THREE.MeshStandardMaterial({
    color: 0xd29508,
    metalness: 1,
    roughness: 0.22,
    emissive: 0xd29508,
    emissiveIntensity: 0.5,
  });

  const matFace = new THREE.MeshStandardMaterial({
    color: 0xd29508,
    metalness: 1,
    roughness: 0.18,
    normalMap,
    normalScale: new THREE.Vector2(1.3, 1.3),
    emissive: 0xd29508,
    emissiveIntensity: 0.5,
  });

  return (
    <mesh
      ref={meshRef}
      scale={scale}
      castShadow
      receiveShadow
      geometry={geo}
      material={[matSide, matFace, matFace]}
    />
  );
});















