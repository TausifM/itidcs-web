"use client";

import { useEffect, useRef } from "react";

export default function ProjectFlowScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let visible = false;
    let frame = 0;
    let renderer;
    let scene;
    let camera;
    let resizeObserver;
    let intersectionObserver;
    let cleanupPointer = () => {};
    let figures = [];
    let processBlocks = [];
    let flowDots = [];
    let flowPathMesh;
    let lastFrameTime = 0;
    const interaction = { targetX: 0, targetY: 0, dragging: false, lastX: 0, lastY: 0 };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initialize = async () => {
      let THREE;
      try {
        THREE = await import("three");
        if (disposed) return;
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      } catch {
        mount.classList.add("project-flow-scene-fallback");
        return;
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);
      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-7, 7, 4, -4, 0.1, 100);
      camera.position.set(0, 0, 24);
      const world = new THREE.Group();
      scene.add(world);

      const mat = (color, roughness = 0.38, metalness = 0.12) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
      const mint = mat(0x50b787, 0.28, 0.16);
      const lavender = mat(0x6c5ce7, 0.32, 0.14);
      const pale = mat(0xdbe5f1, 0.3, 0.1);
      const navy = mat(0x26314a, 0.36, 0.1);
      const platformMaterial = new THREE.MeshStandardMaterial({ color: 0x8997ad, roughness: 0.95, transparent: true, opacity: 0.2 });
      const skin = mat(0xd99674, 0.52, 0.02);
      const orange = mat(0xf0915c, 0.32, 0.1);
      const glass = new THREE.MeshStandardMaterial({ color: 0x454d79, roughness: 0.2, metalness: 0.25, emissive: 0x292449, emissiveIntensity: 0.3 });
      const sphere = new THREE.SphereGeometry(1, 32, 24);
      const box = new THREE.BoxGeometry(1, 1, 1);
      const cylinder = new THREE.CylinderGeometry(0.5, 0.5, 1, 24);
      const addMesh = (parent, geometry, material, position, scale, rotation) => {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(...position);
        mesh.scale.set(...scale);
        if (rotation) mesh.rotation.set(...rotation);
        parent.add(mesh);
        return mesh;
      };
      const torus = (parent, radius, tube, material, position) => {
        const mesh = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 12, 72), material);
        mesh.position.set(...position);
        parent.add(mesh);
        return mesh;
      };
      const createPlatform = (parent) => {
        addMesh(parent, sphere, platformMaterial, [0, -1.3, -0.12], [1.5, 0.1, 0.14]);
      };

      // A stylized client meeting: human figure, chair, and open notebook.
      const client = new THREE.Group();
      world.add(client);
      createPlatform(client);
      const clientBody = new THREE.Group();
      clientBody.position.set(-0.2, -0.04, 0);
      client.add(clientBody);
      addMesh(clientBody, new THREE.CapsuleGeometry(0.52, 0.75, 6, 16), lavender, [0, 0, 0], [0.79, 0.95, 0.62]);
      addMesh(clientBody, sphere, skin, [0, 1.03, 0.02], [0.38, 0.43, 0.38]);
      // Hair cap and simple face details give the client a friendly, readable silhouette.
      addMesh(clientBody, sphere, navy, [0, 1.28, -0.015], [0.39, 0.26, 0.4]);
      addMesh(clientBody, sphere, pale, [-0.13, 1.07, 0.35], [0.035, 0.045, 0.025]);
      addMesh(clientBody, sphere, pale, [0.13, 1.07, 0.35], [0.035, 0.045, 0.025]);
      const armL = addMesh(clientBody, new THREE.CapsuleGeometry(0.12, 0.72, 5, 12), skin, [-0.48, 0.18, 0.08], [1, 1, 1], [0, 0, -0.75]);
      const armR = addMesh(clientBody, new THREE.CapsuleGeometry(0.12, 0.72, 5, 12), skin, [0.48, 0.18, 0.08], [1, 1, 1], [0, 0, 0.75]);
      addMesh(clientBody, cylinder, navy, [-0.24, -0.77, 0], [0.2, 0.62, 0.2], [0, 0, -0.08]);
      addMesh(clientBody, cylinder, navy, [0.24, -0.77, 0], [0.2, 0.62, 0.2], [0, 0, 0.08]);
      addMesh(client, box, lavender, [0, -0.98, -0.36], [0.9, 0.12, 0.58]);
      addMesh(client, box, glass, [0, -0.63, -0.46], [0.58, 0.58, 0.07], [-0.18, 0, 0]);
      const speech = addMesh(client, new THREE.IcosahedronGeometry(0.34, 1), mint, [1.05, 1.12, 0.08], [1, 1, 0.5]);
      addMesh(client, sphere, pale, [1.05, 1.12, 0.38], [0.08, 0.08, 0.08]);
      figures.push({ group: client, float: speech, offset: 0 });

      // The process is a small orbital system of connected design, code, and quality blocks.
      const process = new THREE.Group();
      world.add(process);
      createPlatform(process);
      const orbit = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.025, 10, 96), lavender);
      orbit.rotation.x = Math.PI / 2.7;
      process.add(orbit);
      const core = addMesh(process, new THREE.IcosahedronGeometry(0.6, 1), mint, [0, 0.04, 0], [1, 1, 0.88]);
      const processNodes = [
        { p: [-1.05, 0.52, 0.2], m: lavender }, { p: [0.97, 0.55, -0.08], m: orange },
        { p: [0.98, -0.52, 0.15], m: pale }, { p: [-0.96, -0.54, -0.12], m: mint },
      ];
      processNodes.forEach(({ p, m }, index) => {
        const node = addMesh(process, index % 2 ? new THREE.OctahedronGeometry(0.35, 0) : box, m, p, index % 2 ? [1, 1, 0.8] : [0.52, 0.52, 0.42], [0.3, 0.45, 0.5]);
        processBlocks.push(node);
        figures.push({ group: node, float: node, offset: index * 0.7 });
      });
      // Fine links connect the individual SDLC stages.
      processNodes.forEach(({ p }, index) => {
        const next = processNodes[(index + 1) % processNodes.length].p;
        const start = new THREE.Vector3(...p);
        const end = new THREE.Vector3(...next);
        const link = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, start.distanceTo(end), 8), lavender);
        link.position.copy(start).add(end).multiplyScalar(0.5);
        link.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), end.sub(start).normalize());
        process.add(link);
      });
      figures.push({ group: process, float: core, offset: 1.2 });

      // Final product: a prominent desktop display with a companion phone.
      const product = new THREE.Group();
      world.add(product);
      createPlatform(product);
      const monitor = addMesh(product, box, navy, [0.12, 0.18, 0], [1.95, 1.32, 0.14], [0, -0.08, 0]);
      addMesh(product, box, glass, [0.12, 0.18, 0.1], [1.72, 1.08, 0.035], [0, -0.08, 0]);
      addMesh(product, box, lavender, [-0.3, 0.43, 0.13], [0.58, 0.16, 0.025]);
      addMesh(product, box, mint, [-0.34, 0.08, 0.13], [0.48, 0.06, 0.025]);
      addMesh(product, box, orange, [-0.29, -0.15, 0.13], [0.58, 0.06, 0.025]);
      addMesh(product, box, pale, [-0.28, -0.48, 0.13], [0.58, 0.35, 0.025]);
      addMesh(product, cylinder, pale, [0.12, -0.65, 0], [0.17, 0.45, 0.17]);
      addMesh(product, box, pale, [0.12, -0.91, 0], [0.92, 0.1, 0.55]);
      const phone = addMesh(product, box, mint, [-1.05, -0.48, 0.34], [0.49, 0.9, 0.12], [0, -0.1, -0.06]);
      addMesh(product, box, glass, [-1.05, -0.48, 0.42], [0.38, 0.75, 0.025], [0, -0.1, -0.06]);
      addMesh(product, sphere, pale, [-1.05, -0.78, 0.46], [0.035, 0.035, 0.02]);
      const success = torus(product, 0.3, 0.035, mint, [1.32, 1.08, 0]);
      success.rotation.x = Math.PI / 2;
      figures.push({ group: product, float: phone, offset: 2 });

      // A single moving signal ties all three 3D scenes together.
      const pathPoints = [new THREE.Vector3(-2.35, 0.5, 0.22), new THREE.Vector3(-1.5, 0.7, 0.22), new THREE.Vector3(0, 0, 0.22), new THREE.Vector3(1.5, -0.47, 0.22), new THREE.Vector3(2.35, 0.5, 0.22)];
      const path = new THREE.CatmullRomCurve3(pathPoints);
      flowPathMesh = new THREE.Mesh(new THREE.TubeGeometry(path, 100, 0.018, 8, false), new THREE.MeshBasicMaterial({ color: 0xb9aaff, transparent: true, opacity: 0.64 }));
      world.add(flowPathMesh);
      const dotGeometry = new THREE.SphereGeometry(0.07, 14, 12);
      for (let i = 0; i < 18; i += 1) {
        const dot = new THREE.Mesh(dotGeometry, new THREE.MeshBasicMaterial({ color: i % 3 ? 0xbaf2d1 : 0xf7e8ff, transparent: true, opacity: 0.88 }));
        dot.userData.progress = i / 18;
        dot.position.copy(path.getPointAt(dot.userData.progress));
        world.add(dot);
        flowDots.push(dot);
      }

      scene.add(new THREE.HemisphereLight(0xf4f1ff, 0x33314f, 1.3));
      const keyLight = new THREE.PointLight(0xb7aaff, 8);
      keyLight.position.set(-3, 5, 8);
      scene.add(keyLight);
      const fillLight = new THREE.PointLight(0x7ce4ad, 6);
      fillLight.position.set(4, -3, 6);
      scene.add(fillLight);

      const resize = () => {
        if (!renderer || !camera) return;
        const width = Math.max(1, mount.clientWidth);
        const height = Math.max(1, mount.clientHeight);
        const aspect = width / height;
        const mobileLayout = aspect < 1.25;
        renderer.setSize(width, height, false);
        const halfHeight = mobileLayout ? 3.8 : 2.45;
        const halfWidth = mobileLayout ? aspect * halfHeight : Math.max(7.1, aspect * halfHeight);
        camera.left = -halfWidth;
        camera.right = halfWidth;
        camera.top = halfHeight;
        camera.bottom = -camera.top;
        camera.updateProjectionMatrix();
        client.position.set(mobileLayout ? 0 : -3.6, mobileLayout ? 2.15 : 0, 0);
        process.position.set(0, mobileLayout ? 0 : 0, 0);
        product.position.set(mobileLayout ? 0 : 3.6, mobileLayout ? -2.15 : 0, 0);
        world.scale.setScalar(mobileLayout ? 1.02 : 1.33);
        flowPathMesh.visible = !mobileLayout;
        flowDots.forEach((dot) => { dot.visible = !mobileLayout; });
        renderer.render(scene, camera);
      };

      const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
      const applyPointerPose = () => {
        if (reduceMotion || !visible) {
          world.rotation.x = interaction.targetX;
          world.rotation.y = interaction.targetY;
          renderer.render(scene, camera);
        }
      };
      const onPointerDown = (event) => {
        interaction.dragging = true;
        interaction.lastX = event.clientX;
        interaction.lastY = event.clientY;
        mount.classList.add("is-dragging");
        mount.setPointerCapture?.(event.pointerId);
      };
      const onPointerMove = (event) => {
        const bounds = mount.getBoundingClientRect();
        if (interaction.dragging) {
          interaction.targetY = clamp(interaction.targetY - (event.clientX - interaction.lastX) * 0.006, -0.48, 0.48);
          interaction.targetX = clamp(interaction.targetX + (event.clientY - interaction.lastY) * 0.004, -0.22, 0.22);
          interaction.lastX = event.clientX;
          interaction.lastY = event.clientY;
        } else if (event.pointerType === "mouse") {
          const x = (event.clientX - bounds.left) / bounds.width * 2 - 1;
          const y = (event.clientY - bounds.top) / bounds.height * 2 - 1;
          interaction.targetY = x * 0.12;
          interaction.targetX = y * 0.07;
        }
        applyPointerPose();
      };
      const onPointerUp = () => {
        interaction.dragging = false;
        mount.classList.remove("is-dragging");
      };
      const onPointerLeave = (event) => {
        if (event.pointerType !== "mouse") return;
        if (interaction.dragging) return;
        interaction.targetX = 0;
        interaction.targetY = 0;
        applyPointerPose();
      };
      mount.addEventListener("pointerdown", onPointerDown);
      mount.addEventListener("pointermove", onPointerMove);
      mount.addEventListener("pointerup", onPointerUp);
      mount.addEventListener("pointercancel", onPointerUp);
      mount.addEventListener("pointerleave", onPointerLeave);
      cleanupPointer = () => {
        mount.removeEventListener("pointerdown", onPointerDown);
        mount.removeEventListener("pointermove", onPointerMove);
        mount.removeEventListener("pointerup", onPointerUp);
        mount.removeEventListener("pointercancel", onPointerUp);
        mount.removeEventListener("pointerleave", onPointerLeave);
      };

      const animate = (time = 0) => {
        if (disposed || reduceMotion || !visible) return;
        const seconds = time * 0.001;
        const delta = lastFrameTime ? Math.min((time - lastFrameTime) * 0.001, 0.05) : 0.016;
        lastFrameTime = time;
        world.rotation.x += (interaction.targetX - world.rotation.x) * 0.08;
        world.rotation.y += (interaction.targetY - world.rotation.y) * 0.08;
        processBlocks.forEach((block, index) => {
          block.rotation.x += delta * (index % 2 ? 0.42 : 0.28);
          block.rotation.y += delta * (index % 2 ? 0.72 : -0.58);
          block.rotation.z += delta * (index % 2 ? -0.32 : 0.24);
        });
        figures.forEach(({ group, float, offset }, index) => {
          if (index === 0 || index === figures.length - 1 || processBlocks.includes(float)) return;
          float.rotation.y = Math.sin(seconds * 0.7 + offset) * 0.18;
          if (group !== float) group.position.y = Math.sin(seconds * 1.2 + offset) * 0.035;
        });
        clientBody.rotation.z = Math.sin(seconds * 0.65) * 0.025;
        armL.rotation.z = -0.75 + Math.sin(seconds * 0.9) * 0.04;
        armR.rotation.z = 0.75 + Math.sin(seconds * 0.9 + 1) * 0.04;
        monitor.rotation.y = Math.sin(seconds * 0.5) * 0.035;
        flowDots.forEach((dot) => {
          dot.position.copy(path.getPointAt((dot.userData.progress + seconds * 0.09) % 1));
        });
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(mount);
      intersectionObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reduceMotion && !frame) animate();
        if (!visible && frame) { cancelAnimationFrame(frame); frame = 0; }
      }, { threshold: 0.05 });
      intersectionObserver.observe(mount);
      resize();
    };

    initialize();
    return () => {
      disposed = true;
      if (frame) cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      cleanupPointer();
      scene?.traverse((object) => {
        object.geometry?.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => material?.dispose());
      });
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="project-flow-scene" aria-hidden="true" />;
}
