"use client";

import { useEffect, useRef } from "react";

export default function ServicesScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let frame = 0;
    let visible = false;
    let renderer;
    let scene;
    let camera;
    let artwork;
    let resizeObserver;
    let intersectionObserver;
    let THREE;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const start = async () => {
      try {
        THREE = await import("three");
        if (disposed) return;
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      } catch {
        mount.classList.add("services-scene-fallback");
        return;
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0, 8.4);
      artwork = new THREE.Group();
      scene.add(artwork);

      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.12, 2),
        new THREE.MeshPhysicalMaterial({ color: 0xb8aaff, roughness: 0.19, metalness: 0.35, clearcoat: 1, clearcoatRoughness: 0.16, flatShading: true })
      );
      artwork.add(core);

      const shell = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.34, 1),
        new THREE.MeshBasicMaterial({ color: 0xd8d0ff, wireframe: true, transparent: true, opacity: 0.56 })
      );
      shell.rotation.set(0.4, 0.2, -0.3);
      artwork.add(shell);

      const rings = [
        { radius: 1.85, tube: 0.018, color: 0xbaf2d1, rotation: [1.18, 0.24, -0.4] },
        { radius: 2.2, tube: 0.012, color: 0xffb596, rotation: [0.74, -0.68, 0.55] },
        { radius: 1.58, tube: 0.012, color: 0xffffff, rotation: [1.42, 0.9, 0.16] },
      ];
      rings.forEach(({ radius, tube, color, rotation }) => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(radius, tube, 8, 140),
          new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.86 })
        );
        ring.rotation.set(...rotation);
        artwork.add(ring);
      });

      const nodes = [
        { position: [-2.05, 0.7, 0.1], color: 0xbaf2d1, size: 0.19 },
        { position: [1.85, 1.2, -0.15], color: 0xffb596, size: 0.16 },
        { position: [1.8, -1.25, 0.35], color: 0xb8aaff, size: 0.22 },
        { position: [-1.55, -1.45, -0.2], color: 0xf2e7a5, size: 0.13 },
      ];
      nodes.forEach(({ position, color, size }) => {
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(size, 24, 24),
          new THREE.MeshStandardMaterial({ color, roughness: 0.2, metalness: 0.15, emissive: color, emissiveIntensity: 0.12 })
        );
        node.position.set(...position);
        artwork.add(node);
      });

      scene.add(new THREE.AmbientLight(0xffffff, 1.7));
      const keyLight = new THREE.PointLight(0xffffff, 22);
      keyLight.position.set(3.5, 4, 5);
      scene.add(keyLight);
      const mintLight = new THREE.PointLight(0x75e0ac, 12);
      mintLight.position.set(-4, -2, 2);
      scene.add(mintLight);

      const resize = () => {
        if (!renderer || !camera) return;
        const width = Math.max(1, mount.clientWidth);
        const height = Math.max(1, mount.clientHeight);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      };
      const animate = () => {
        if (disposed || reducedMotion || !visible) return;
        artwork.rotation.y += 0.0026;
        artwork.rotation.x = Math.sin(performance.now() * 0.00028) * 0.075;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(mount);
      intersectionObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reducedMotion && !frame) animate();
        if (!visible && frame) {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      }, { threshold: 0.05 });
      intersectionObserver.observe(mount);
      resize();
    };

    start();
    return () => {
      disposed = true;
      if (frame) cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      scene?.traverse((object) => {
        object.geometry?.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => material?.dispose());
      });
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="services-scene" aria-hidden="true" />;
}
