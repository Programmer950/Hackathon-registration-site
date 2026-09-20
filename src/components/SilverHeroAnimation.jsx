import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SilverHeroAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.06);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 3.0);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    // Dynamic mouse point light casting brilliant metallic sheen
    const mouseLight = new THREE.PointLight(0xffffff, 7.0, 20);
    mouseLight.position.set(0, 0, 3);
    scene.add(mouseLight);

    // 3. Smaller, Shinier Interactive 3D Metallic Particle Field
    const particleCount = 2000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 3.0 + Math.random() * 9.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi) - 2;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      basePositions[i3] = x;
      basePositions[i3 + 1] = y;
      basePositions[i3 + 2] = z;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Create high-shine, razor-sharp glowing metallic silver particle texture
    const createParticleTexture = () => {
      const canvasTex = document.createElement('canvas');
      canvasTex.width = 64;
      canvasTex.height = 64;
      const ctxTex = canvasTex.getContext('2d');
      const grad = ctxTex.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.18, 'rgba(255, 255, 255, 0.95)');
      grad.addColorStop(0.45, 'rgba(226, 232, 240, 0.6)');
      grad.addColorStop(0.75, 'rgba(148, 163, 184, 0.15)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctxTex.fillStyle = grad;
      ctxTex.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvasTex);
    };

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.045, // Smaller, pin-point sharp dots
      map: createParticleTexture(),
      transparent: true,
      opacity: 0.95, // Shinier, high-intensity opacity
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 4. Mouse Interaction State
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      worldX: 0,
      worldY: 0
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      const y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

      mouse.targetX = x;
      mouse.targetY = y;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / container.clientWidth) * 2 - 1;
        const y = -((touch.clientY - rect.top) / container.clientHeight) * 2 + 1;
        mouse.targetX = x;
        mouse.targetY = y;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 5. Responsive Resize Listener
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };
    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Project mouse coordinates to 3D world space
      mouse.worldX = mouse.x * 5.5;
      mouse.worldY = mouse.y * 3.5;
      mouseLight.position.set(mouse.worldX, mouse.worldY, 2.5);

      // Particle wave movement + interactive mouse repulsion force
      const posAttr = particleGeometry.attributes.position;
      const posArray = posAttr.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const bx = basePositions[i3];
        const by = basePositions[i3 + 1];
        const bz = basePositions[i3 + 2];

        // Multi-layered liquid wave motion
        const waveX = Math.sin(elapsedTime * 0.4 + bz * 0.5) * 0.15;
        const waveY = Math.cos(elapsedTime * 0.3 + bx * 0.5) * 0.15;
        const waveZ = Math.sin(elapsedTime * 0.5 + i * 0.1) * 0.1;

        // Interactive mouse repulsion in 3D
        const dx = posArray[i3] - mouse.worldX;
        const dy = posArray[i3 + 1] - mouse.worldY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let pushX = 0;
        let pushY = 0;
        if (dist < 2.8 && dist > 0.01) {
          const force = (1 - dist / 2.8) * 0.45;
          pushX = (dx / dist) * force;
          pushY = (dy / dist) * force;
        }

        posArray[i3] = bx + waveX + pushX;
        posArray[i3 + 1] = by + waveY + pushY;
        posArray[i3 + 2] = bz + waveZ;
      }

      posAttr.needsUpdate = true;

      // Rotate particle field slowly
      particleSystem.rotation.y = elapsedTime * 0.02;

      // Smooth camera parallax matching mouse coordinates
      camera.position.x = mouse.x * 0.6;
      camera.position.y = mouse.y * 0.6;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default SilverHeroAnimation;
