import * as THREE from "three";

export function applyBlueInteriorShader(scene: THREE.Scene | THREE.Group) {
  

  

    const rimColor = new THREE.Color("#010E78");
    const processedMeshes = new Set<THREE.Mesh>(); // Track processed meshes

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
          if (processedMeshes.has(mesh)) return; // Skip if already processed
          processedMeshes.add(mesh);

          if (process.env.NODE_ENV === 'development') {
            // console.log("💙 Applying solid blue silhouette to:", mesh.name);
          }

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
}
