"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeAccent() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || window.matchMedia("(max-width: 700px)").matches) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.z = 7;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(190, 190);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.18, 2),
      new THREE.MeshPhysicalMaterial({
        color: 0xa99cff,
        roughness: 0.23,
        metalness: 0.3,
        transmission: 0.25,
        thickness: 0.8,
        transparent: true,
        opacity: 0.78,
        flatShading: true,
      })
    );
    group.add(core);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.28, 1),
      new THREE.MeshBasicMaterial({ color: 0xe1dcff, wireframe: true, transparent: true, opacity: 0.7 })
    );
    group.add(wire);

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(1.68, 0.012, 8, 120),
      new THREE.MeshBasicMaterial({ color: 0xc1f4d5, transparent: true, opacity: 0.9 })
    );
    halo.rotation.set(1.12, 0.18, -0.36);
    group.add(halo);

    scene.add(new THREE.AmbientLight(0xffffff, 1.9));
    const keyLight = new THREE.PointLight(0xffffff, 18);
    keyLight.position.set(2.5, 3, 4);
    scene.add(keyLight);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let visible = true;
    let pointerX = 0;
    let pointerY = 0;
    const onPointerMove = (event) => {
      const bounds = mount.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.3;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.3;
    };
    mount.addEventListener("pointermove", onPointerMove, { passive: true });

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reducedMotion && !frame) animate();
      if (!visible && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    observer.observe(mount);

    const render = () => renderer.render(scene, camera);
    const animate = () => {
      if (!visible || reducedMotion) return;
      group.rotation.y += 0.004;
      group.rotation.x += (pointerY - group.rotation.x) * 0.025;
      group.rotation.z += (pointerX - group.rotation.z) * 0.025;
      render();
      frame = requestAnimationFrame(animate);
    };
    render();
    if (!reducedMotion) animate();

    return () => {
      observer.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      if (frame) cancelAnimationFrame(frame);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="three-accent" aria-hidden="true" />;
}
