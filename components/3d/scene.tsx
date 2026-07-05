"use client"

import { Canvas } from "@react-three/fiber"
import { ContactShadows, Float } from "@react-three/drei"
import { Suspense } from "react"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { CrystalSphere } from "./crystal-sphere"

export function Scene(): JSX.Element {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0) // fully transparent background
      }}
    >
      <Suspense fallback={null}>
        {/* Strong coloured point lights — these get refracted through the crystal */}
        <ambientLight intensity={0.08} />

        {/* Indigo — top right front (key light) */}
        <pointLight position={[4, 4, 4]}   color="#6366f1" intensity={12} distance={18} decay={2} />

        {/* Cyan — left mid (fill) */}
        <pointLight position={[-4, 1, 3]}  color="#22d3ee" intensity={9}  distance={16} decay={2} />

        {/* Violet — behind top */}
        <pointLight position={[0, 4, -5]}  color="#a78bfa" intensity={8}  distance={16} decay={2} />

        {/* Pink/magenta — bottom right */}
        <pointLight position={[3, -4, 2]}  color="#e879f9" intensity={7}  distance={14} decay={2} />

        {/* Soft lavender — back bottom left */}
        <pointLight position={[-3, -3, -3]} color="#c7d2fe" intensity={5} distance={12} decay={2} />

        {/* Gentle float + slow auto-rotation */}
        <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.8}>
          <CrystalSphere />
        </Float>

        {/* Subtle shadow */}
        <ContactShadows
          position={[0, -2.6, 0]}
          opacity={0.08}
          scale={6}
          blur={4}
          far={5}
          color="#6366f1"
        />

        {/* Bloom — makes the coloured light bleed glow */}
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.3}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
