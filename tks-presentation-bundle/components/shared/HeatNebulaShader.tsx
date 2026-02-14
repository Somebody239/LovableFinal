import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeatNebulaShader = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // 1) Renderer, Scene, Camera, Clock
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const clock = new THREE.Clock();

        // 2) Shaders
        const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

        const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(random(i), random(i + vec2(1.0, 0.0)), u.x),
          mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        // Make it rise like smoke
        float t = iTime * 0.2;
        
        // Vertical movement with some horizontal drift
        vec2 q = vec2(0.0);
        q.x = fbm(uv + 0.0 * iTime);
        q.y = fbm(uv + vec2(1.0));

        vec2 r = vec2(0.0);
        r.x = fbm(uv + 1.0 * q + vec2(1.7, 9.2) + 0.15 * iTime);
        r.y = fbm(uv + 1.0 * q + vec2(8.3, 2.8) + 0.126 * iTime);

        float f = fbm(uv + r + vec2(0.0, -t)); // Rising motion

        // Dark red/orange palette for heat/smoke
        vec3 color = mix(
            vec3(0.05, 0.0, 0.0), // Dark base
            vec3(0.6, 0.1, 0.0),  // Dim red
            clamp((f * f) * 4.0, 0.0, 1.0)
        );

        color = mix(
            color,
            vec3(0.9, 0.3, 0.0), // Orange tip
            clamp(length(q), 0.0, 1.0)
        );

        // Vignette to dim edges
        float vignette = 1.0 - length(uv - 0.5) * 1.5;
        color *= clamp(vignette, 0.0, 1.0);

        gl_FragColor = vec4(color, 1.0); // Adjust opacity if needed
      }
    `;

        // 3) Build Mesh
        const uniforms = {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
        };
        const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        scene.add(mesh);

        // 4) Resize Handler
        const onResize = () => {
            if (!container) return;
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            uniforms.iResolution.value.set(width, height);
        };
        window.addEventListener('resize', onResize);

        // 6) Animation Loop
        renderer.setAnimationLoop(() => {
            uniforms.iTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
        });

        // 7) Cleanup
        return () => {
            window.removeEventListener('resize', onResize);
            renderer.setAnimationLoop(null);
            if (container && renderer.domElement && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            material.dispose();
            mesh.geometry.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full -z-10 bg-black"
            aria-label="Heat Nebula Background"
        />
    );
};

export default HeatNebulaShader;
