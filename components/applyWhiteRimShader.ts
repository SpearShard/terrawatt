import * as THREE from "three";

export function applyWhiteRimShader(scene: THREE.Scene | THREE.Group) {
  

  const processedMeshes = new Set<THREE.Mesh>(); 

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const name = mesh.name.toLowerCase();

    
        if (
          name.includes("boot_primary") ||
          name.includes("body_primary") ||
          name.includes("whiteleather_Putih") ||
          name.includes("glass_glass") ||
          name.includes("JUST_BLACK") ||
          name.includes("tembus_boot_ok_tembus") ||
          name.includes("tembus_belakang_tembus")
        ) {
          if (processedMeshes.has(mesh)) return; 
          processedMeshes.add(mesh);

          mesh.material = new THREE.ShaderMaterial({
            uniforms: {
              baseColor: { value: new THREE.Color(0x000000) },
              rimColor: { value: new THREE.Color(0xffffff) },
              rimStrength: { value: 4.5 }, 
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
        }
      }
    });
}
