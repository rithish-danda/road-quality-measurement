'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import Link from 'next/link'

function Earth() {
  const groupRef = useRef()
  
  const earthMaterial = new THREE.MeshPhongMaterial({
    color: '#4A8BB3',
    shininess: 15,
    specular: new THREE.Color('#7ABEFF'),
  })

  const atmosphereMaterial = new THREE.MeshPhongMaterial({
    color: '#7ABEFF',
    transparent: true,
    opacity: 0.2,
    side: THREE.BackSide,
  })

  const lineMaterial = new THREE.LineBasicMaterial({
    color: '#FFFFFF',
    transparent: true,
    opacity: 0.3,
  })

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }
  })

  const createLatLongLines = () => {
    const lines = []
    for (let i = -9; i <= 9; i++) {
      const latitude = (i / 10) * Math.PI
      const points = []
      for (let j = 0; j <= 100; j++) {
        const longitude = (j / 50) * Math.PI
        points.push(new THREE.Vector3(
          Math.cos(latitude) * Math.cos(longitude) * 0.8625,
          Math.sin(latitude) * 0.8625,
          Math.cos(latitude) * Math.sin(longitude) * 0.8625
        ))
      }
      lines.push(<line key={`lat-${i}`} geometry={new THREE.BufferGeometry().setFromPoints(points)} material={lineMaterial} />)
    }
    for (let i = 0; i < 20; i++) {
      const longitude = (i / 10) * Math.PI
      const points = []
      for (let j = 0; j <= 100; j++) {
        const latitude = (j / 100) * Math.PI - Math.PI / 2
        points.push(new THREE.Vector3(
          Math.cos(latitude) * Math.cos(longitude) * 0.8625,
          Math.sin(latitude) * 0.8625,
          Math.cos(latitude) * Math.sin(longitude) * 0.8625
        ))
      }
      lines.push(<line key={`lon-${i}`} geometry={new THREE.BufferGeometry().setFromPoints(points)} material={lineMaterial} />)
    }
    return lines
  }

  return (
    <group ref={groupRef}>
      <mesh material={earthMaterial}>
        <sphereGeometry args={[0.8625, 64, 64]} />
      </mesh>
      <mesh material={atmosphereMaterial}>
        <sphereGeometry args={[0.897, 64, 64]} />
      </mesh>
      {createLatLongLines()}
      {[...Array(100)].map((_, index) => (
        <mesh
          key={index}
          position={[
            Math.random() * 1.725 - 0.8625,
            Math.random() * 1.725 - 0.8625,
            Math.random() * 1.725 - 0.8625
          ]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
        >
          <boxGeometry args={[0.00518, 0.00518, 0.001035]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  )
}

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center bg-background overflow-hidden relative">
      <div className="w-full lg:w-1/2 p-8 lg:p-16 z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Road Quality Measurement using Satellite Images</h2>
        <Link href="/learn-more" className="inline-block px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
          Learn More
        </Link>
      </div>
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-[calc(100vh-64px)]">
        <Canvas 
          camera={{ position: [0, 0, 2.2], fov: 60 }}
        >
          <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
          <ambientLight intensity={0.1} />
          <directionalLight position={[5, 3, 5]} intensity={0.5} />
          <Earth />
        </Canvas>
      </div>
    </div>
  )
}

