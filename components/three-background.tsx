"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Stars, Float } from "@react-three/drei"
import * as THREE from "three"
import { useMousePosition } from "@/hooks/use-mouse-position"

function MovingStars({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null!)
  const mousePosition = useMousePosition()

  useFrame(() => {
    if (!mesh.current) return

    // Slow rotation based on mouse position
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, mousePosition.y * 0.05, 0.01)
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, mousePosition.x * 0.05, 0.01)
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={new Float32Array(count * 3)}
          itemSize={3}
          usage={THREE.DynamicDrawUsage}
          args={[new Float32Array(count * 3), 3]}
          onUpdate={(self) => {
            const arr = self.array as Float32Array
            for (let i = 0; i < count; i++) {
              const i3 = i * 3
              arr[i3] = (Math.random() - 0.5) * 25
              arr[i3 + 1] = (Math.random() - 0.5) * 25
              arr[i3 + 2] = (Math.random() - 0.5) * 25
            }
          }}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#1e40af" sizeAttenuation transparent opacity={0.8} />
    </points>
  )
}

function CosmicNebula() {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x = mesh.current.rotation.y += delta * 0.02
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} scale={3} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#0a2472"
          emissive="#1e40af"
          emissiveIntensity={hovered ? 1 : 0.5}
          roughness={0.5}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function ProfileGlow() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.z += 0.001
    // Pulsating effect
    mesh.current.scale.x = mesh.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05
  })

  return (
    <mesh ref={mesh} position={[0, 1, -5]}>
      <torusGeometry args={[3, 0.6, 16, 100]} />
      <meshStandardMaterial
        color="#1e40af"
        emissive="#3b82f6"
        emissiveIntensity={1.5}
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  )
}

function CameraController() {
  const { camera } = useThree()
  const mousePosition = useMousePosition()

  useEffect(() => {
    camera.position.z = 10
  }, [camera])

  useFrame(() => {
    // Subtle camera movement based on mouse position
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mousePosition.x * 0.5, 0.01)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mousePosition.y * 0.5, 0.01)
    camera.lookAt(0, 0, 0)
  })

  return null
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas dpr={[1, 2]}>
        <CameraController />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} color="#1e40af" intensity={0.2} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <MovingStars />
        <CosmicNebula />
        <ProfileGlow />
      </Canvas>
    </div>
  )
}
