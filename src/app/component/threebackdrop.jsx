"use client";

import { useEffect, useRef } from "react";

export default function ThreeBackdrop({ variant = "contact", className = "" }) {
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
    let sculpture;
    let resizeObserver;
    let intersectionObserver;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const start = async () => {
      let THREE;
      try {
        THREE = await import("three");
        if (disposed) return;
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      } catch {
        return;
      }

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      camera.position.z = 7;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      sculpture = new THREE.Group();
      scene.add(sculpture);

      const isContact = variant === "contact";
      const material = new THREE.MeshPhysicalMaterial({
        color: isContact ? 0xa99cff : 0xbaf2d1,
        roughness: 0.24,
        metalness: 0.26,
        transmission: 0.18,
        thickness: 0.7,
        transparent: true,
        opacity: 0.83,
        flatShading: true,
      });
      const coreGeometry = isContact
        ? new THREE.TorusKnotGeometry(0.92, 0.3, 112, 12, 2, 3)
        : new THREE.IcosahedronGeometry(1.17, 2);
      sculpture.add(new THREE.Mesh(coreGeometry, material));

      const outlineGeometry = isContact
        ? new THREE.TorusGeometry(1.52, 0.018, 8, 100)
        : new THREE.IcosahedronGeometry(1.28, 1);
      const outline = new THREE.Mesh(
        outlineGeometry,
        new THREE.MeshBasicMaterial({
          color: isContact ? 0xbaf2d1 : 0xe3dcff,
          wireframe: !isContact,
          transparent: true,
          opacity: 0.78,
        })
      );
      outline.rotation.set(1.1, 0.25, -0.35);
      sculpture.add(outline);

      const orbit = new THREE.Mesh(
        new THREE.TorusGeometry(isContact ? 1.82 : 1.65, 0.012, 8, 120),
        new THREE.MeshBasicMaterial({ color: isContact ? 0xe3ddff : 0xc6f4d7, transparent: true, opacity: 0.92 })
      );
      orbit.rotation.set(1.38, 0.15, isContact ? 0.52 : -0.45);
      sculpture.add(orbit);

      scene.add(new THREE.AmbientLight(0xffffff, 1.8));
      const keyLight = new THREE.PointLight(0xffffff, 16);
      keyLight.position.set(2.8, 3, 4);
      scene.add(keyLight);

      const render = () => {
        if (!renderer || !scene || !camera) return;
        renderer.render(scene, camera);
      };
      const resize = () => {
        if (!renderer || !camera) return;
        const width = Math.max(1, mount.clientWidth);
        const height = Math.max(1, mount.clientHeight);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        render();
      };
      const animate = () => {
        if (disposed || reducedMotion || !visible) return;
        sculpture.rotation.y += isContact ? 0.0032 : 0.0028;
        sculpture.rotation.x += 0.0012;
        render();
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
        materials?.forEach((item) => item?.dispose());
      });
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, [variant]);

  return <div ref={mountRef} className={`three-backdrop three-backdrop-${variant} ${className}`} aria-hidden="true" />;
}
