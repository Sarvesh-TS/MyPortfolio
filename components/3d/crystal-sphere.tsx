"use client"

import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from "three"

function FloatingShard({
  position,
  size,
  speed,
  color = "#818cf8",
}: {
  position: [number, number, number]
  size: number
  speed: number
  color?: string
}): JSX.Element {
  const ref = useRef<THREE.Mesh>(null)
  const baseY = position[1]

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = t * speed
    ref.current.rotation.y = t * speed * 0.7
    ref.current.position.y = baseY + Math.sin(t * speed * 0.5) * 0.14
  })

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[size]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.05}
        metalness={0}
        transmission={0.7}
        thickness={0.5}
        ior={1.3}
        iridescence={1}
        iridescenceIOR={1.5}
        iridescenceThicknessRange={[100, 600]}
        transparent
        opacity={1}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

export function CrystalSphere(): JSX.Element {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (outerRef.current) {
      // Slow auto-rotation + subtle mouse parallax
      outerRef.current.rotation.y = t * 0.1 + mouse.x * 0.15
      outerRef.current.rotation.x = Math.sin(t * 0.22) * 0.1 + mouse.y * 0.08
    }

    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.08
      innerRef.current.rotation.x = t * 0.06
      innerRef.current.rotation.z = t * 0.04
    }
  })

  return (
    <group>
      {/* ── Outer glass crystal sphere ──────────────────── */}
      {/*
        Key tuning for coloured-light-only environment:
        - Lower ior (1.1) = less mirror, more lens-like glass
        - Higher roughness (0.08) = scatters reflection → frosted glow
        - chromaticAberration = rainbow fringing on edges
        - distortion = warps what's seen through it (the lights)
        - transmission = near-full transparency so lights bleed through
      */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.3}
          samples={12}
          resolution={512}
          transmission={0.98}
          roughness={0.08}
          thickness={2.5}
          ior={1.1}
          chromaticAberration={0.8}
          anisotropy={1}
          distortion={0.6}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[0, 1400]}
          color="#ddd6fe"
          attenuationColor="#818cf8"
          attenuationDistance={0.5}
        />
      </mesh>

      {/* ── Inner glowing icosahedron core ──────────────── */}
      {/*
        This acts as a coloured light source visible through the outer glass
        Emissive indigo so it glows through the crystal
      */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.65, 1]} />
        <meshPhysicalMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0}
          transmission={0.5}
          thickness={0.5}
          ior={1.2}
          iridescence={1}
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[100, 800]}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* ── Floating accent shards ───────────────────────── */}
      <FloatingShard
        position={[2.4, 1.0, 0.5]}
        size={0.2}
        speed={0.42}
        color="#818cf8"
      />
      <FloatingShard
        position={[-2.2, -0.5, 0.3]}
        size={0.14}
        speed={0.6}
        color="#22d3ee"
      />
      <FloatingShard
        position={[1.7, -1.7, -0.5]}
        size={0.17}
        speed={0.5}
        color="#e879f9"
      />
    </group>
  )
}
