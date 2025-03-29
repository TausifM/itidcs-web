"use client";
import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="relative flex items-center justify-center bg-gray-900 text-white h-screen overflow-hidden mt-2">
      {/* Ensure Particles only cover the hero section */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false }, // Disables full-screen mode
            background: { color: "transparent" },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false,
              },
              number: { density: { enable: true, area: 800 }, value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
      )}

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Welcome to Radiant UI
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Build stunning web experiences with modern design & animations.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-lg">
            Get Started
          </button>
          <button className="px-6 py-3 text-lg border border-gray-300 hover:border-white rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
