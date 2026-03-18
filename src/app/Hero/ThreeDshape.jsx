"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import Link from "next/link";

function FloatingIcon({ position, color, type }) {
  const meshRef = useRef(null);
  const { viewport } = useThree();

  const isMobile = viewport.width < 10;
  const responsiveScale = isMobile ? 0.6 : 1;

  const responsivePosition = [
    position[0] * (viewport.width / 18),
    position[1] * (viewport.height / 12),
    position[2],
  ];

  useFrame((state) => {
    if (meshRef.current) {
      const { x, y } = state.mouse;
      const t = state.clock.getElapsedTime();
      meshRef.current.lookAt(new THREE.Vector3(x * 4, y * 4, 5));
      meshRef.current.rotation.z += Math.sin(t * 0.5) * 0.002;
    }
  });

  return (
    <Float
      speed={3}
      rotationIntensity={2}
      floatIntensity={2.5}
      position={responsivePosition}
    >
      <mesh ref={meshRef} scale={responsiveScale}>
        {type === "cube" && <boxGeometry args={[1.2, 1.2, 1.2]} />}
        {type === "sphere" && <sphereGeometry args={[1, 32, 32]} />}
        {type === "torus" && <torusGeometry args={[0.8, 0.25, 16, 100]} />}
        {type === "dode" && <dodecahedronGeometry args={[1.1]} />}
        {type === "ico" && <icosahedronGeometry args={[1.1]} />}
        {type === "octa" && <octahedronGeometry args={[1.1]} />}
        {type === "tetra" && <tetrahedronGeometry args={[1.1]} />}

        <meshStandardMaterial
          color={color}
          roughness={0.05}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 18], fov: 35 }} dpr={[1, 2]}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={150} />

          {/* Left Side Cluster */}
          <FloatingIcon position={[-5, 3, 0]} color="#ffffff" type="cube" />
          <FloatingIcon position={[-6, -1, 2]} color="#10b981" type="tetra" />
          <FloatingIcon position={[-4, -4, 1]} color="#10b981" type="dode" />

          {/* Right Side Cluster */}
          <FloatingIcon position={[5, 4, -1]} color="#ffffff" type="ico" />
          <FloatingIcon position={[4, -5, -6]} color="#10b981" type="torus" />

          {/* Background & Center Depth */}
          <FloatingIcon position={[5, -3, 2]} color="#ffffff" type="sphere" />
          <FloatingIcon position={[0, 0, -7]} color="#222222" type="ico" />

          <ContactShadows
            position={[0, -8, 0]}
            opacity={0.3}
            scale={35}
            blur={3}
            color="#10b981"
          />
        </Canvas>
      </div>

      {/* UI Elements (Overlay) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 md:space-y-8"
        >
          <h4 className="text-emerald-500 font-mono text-[9px] md:text-[11px] tracking-[0.8em] md:tracking-[1.2em] uppercase opacity-80">
            Design
          </h4>

          <h2 className="text-4xl sm:text-7xl md:text-[8.5rem] leading-[0.85] tracking-[-0.04em] text-white mt-8 md:mt-12">
            <span className="block font-extralight italic opacity-70 mb-2 md:mb-4">
              Digital
            </span>

            <span className="relative block font-black uppercase tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/20">
              Engineering
            </span>
          </h2>
          <p className="max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto text-neutral-400 font-light text-sm md:text-xl leading-relaxed tracking-tight">
            Architecting high-performance{" "}
            <span className="text-white font-medium">Next.js</span> systems with
            cinematic{" "}
            <span className="text-emerald-400 font-medium">3D Interaction</span>
            .
          </p>

          <div className="pt-6 md:pt-10 pointer-events-auto">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 md:px-16 py-3.5 md:py-5 overflow-hidden rounded-xl bg-emerald-500 transition-all duration-500 active:scale-95"
            >
              <span className="relative z-10 text-black font-black text-[11px] md:text-[13px] uppercase tracking-[0.3em]">
                Get In Touch
              </span>

              {/* Hover slide effect */}
              <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute top-12 left-12 hidden lg:flex flex-col gap-2 border-l border-emerald-500/30 pl-4 py-1"></div>

      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-2 border-r border-emerald-500/30 pr-4 py-1"></div>
    </div>
  );
}
