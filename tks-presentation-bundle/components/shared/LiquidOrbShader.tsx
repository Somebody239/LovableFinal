import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const LiquidOrbShader = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // 1) Renderer, Scene, Camera
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const clock = new THREE.Clock();

        const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

        // Updated Fragment: Darker, Centered, No Cutoff
        const fragmentShader = `
      precision highp float;
      varying vec2 vUv;
      uniform float time;
      uniform vec2 resolution;

      // Smooth Min
      float smin(float a, float b, float k) {
          float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
          return mix(b, a, h) - k * h * (1.0 - h);
      }

      void main() {
          // Normalize coordinates nicely to -1..1, correcting aspect ratio
          // This ensures the blob domain is consistent regardless of container shape
          vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / min(resolution.y, resolution.x);
          
          // Time factor - Slow and smooth
          float t = time * 0.4;

          // Create base blobs using 2D distance fields
          // Reduced offsets to keep blobs centered and avoid cutoff
          
          // Blob 1: Moving circular (Center-biased)
          vec2 p1 = uv;
          p1 += vec2(sin(t * 0.7), cos(t * 0.6)) * 0.15; // Reduced radius 0.25 -> 0.15
          float d1 = length(p1) - 0.3;

          // Blob 2: Another moving one (Center-biased)
          vec2 p2 = uv;
          p2 += vec2(sin(t * 1.1 + 2.0), cos(t * 0.8 + 1.0)) * 0.2; // Reduced radius 0.3 -> 0.2
          float d2 = length(p2) - 0.25;
          
          // Blob 3: Center pulsing (Anchor)
          vec2 p3 = uv;
          float d3 = length(p3) - (0.2 + 0.05 * sin(t * 2.0));

          // Combine with smooth min to get liquid effect
          float d = smin(d1, d2, 0.3);
          d = smin(d, d3, 0.3);

          // Colorize - Darker "Blacker" Blue Approach
          vec3 col = vec3(0.0);
          float alpha = 0.0;
          
          // Threshold for drawing the blob
          if (d < 0.02) {
             // Gradient based on distance field 'd' (simulating depth/thickness)
             // d goes from approx 0 at edge to negative inside
             
             // Base Colors: Much Darker
             vec3 edgeBlue = vec3(0.0, 0.3, 0.6); // Dark Navy Edge
             vec3 coreBlack = vec3(0.0, 0.05, 0.15); // Almost Black Center
             
             float depth = smoothstep(0.02, -0.3, d);
             
             vec3 fluidCol = mix(edgeBlue, coreBlack, depth);
             
             // Add specular highlight for "Wet/Glassy" look
             // Reduced highlight size for darker appearance
             vec2 highlightPos = uv - vec2(-0.15, 0.15);
             float highlight = smoothstep(0.12, 0.0, length(highlightPos + vec2(d*1.5, d*1.5))); 
             
             col = fluidCol + highlight * 0.5; // Reduced specular intensity
             alpha = 0.98; 
          }

          gl_FragColor = vec4(col, alpha);
      }
    `;

        const uniforms = {
            time: { value: 0 },
            resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) }
        };

        const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, transparent: true });
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        scene.add(mesh);

        const onResize = () => {
            if (!container) return;
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            uniforms.resolution.value.set(width, height);
        };
        window.addEventListener('resize', onResize);

        renderer.setAnimationLoop(() => {
            uniforms.time.value = clock.getElapsedTime();
            renderer.render(scene, camera);
        });

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
            className="absolute inset-0 w-full h-full"
            aria-label="Liquid Orb Background"
        />
    );
};

export default LiquidOrbShader;
export { LiquidOrbShader };
