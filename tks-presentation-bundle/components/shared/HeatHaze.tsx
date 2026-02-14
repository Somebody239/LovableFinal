"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeatHaze = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1) Renderer + Scene + Camera + Clock
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    // 2) GLSL Shaders
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Shader tuned for Heat/Fire/Red Haze with improved turbulence
    const fragmentShader = `
      precision highp float;
      varying vec2 vUv;
      uniform vec2 iResolution;
      uniform float iTime;

      // Improved noise function
      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                   mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        // More octaves for detail
        for (int i = 0; i < 6; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        // Normalized and aspect-corrected UVs for consistent shape
        vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
        
        float t = iTime * 0.5;

        // Domain warping for "rising heat" feel
        vec2 q = vec2(0.0);
        q.x = fbm(uv + vec2(0.0, -t * 0.2));
        q.y = fbm(uv + vec2(1.0));

        vec2 r = vec2(0.0);
        r.x = fbm(uv + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
        r.y = fbm(uv + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);

        // Main FBM pattern with warping
        float f = fbm(uv + r + vec2(0.0, -t * 0.5));

        // Shape mask to fade edges naturally
        // Focus intensity in the center bottom and rise up
        float mask = smoothstep(0.0, 1.0, f) * (1.5 - length(uv * vec2(1.0, 1.5)));
        
        // Heat Color Palette: Deep Magma -> Bright Orange
        vec3 c1 = vec3(0.05, 0.0, 0.0);    // Deepest Black/Red
        vec3 c2 = vec3(0.5, 0.05, 0.0);    // Dark Ash Red
        vec3 c3 = vec3(1.0, 0.3, 0.05);    // Fire Orange
        
        // Mixing colors based on noise value 'f' and 'q' length for variation
        vec3 color = mix(c1, c2, smoothstep(0.0, 0.5, f));
        color = mix(color, c3, smoothstep(0.4, 0.9, f * length(q)));
        
        // Additional glow in the center
        float centerGlow = 1.0 - length(uv);
        color += vec3(0.8, 0.2, 0.0) * smoothstep(0.5, 1.0, centerGlow) * 0.3;

        gl_FragColor = vec4(color, mask * 0.95);
      }
    `;

    // 3) Build mesh
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
    };

    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, transparent: true });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    // 4) Resize logic
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };
    window.addEventListener('resize', onResize);

    // 6) Animation loop
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-label="Heat haze shader background"
    />
  );
};

export default HeatHaze;
