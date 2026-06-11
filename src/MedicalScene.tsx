import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function MovingStars() {
  const meshRef = useRef<any>();

  // أنميشن خرافي وسريع: يخلي المجسم يلف تلقائياً مع حركة الماوس
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = (state.pointer.y * Math.PI) / 4;
      meshRef.current.rotation.y = (state.pointer.x * Math.PI) / 4;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* مجسم مؤقت كريستالي حاد ومتحرك كأنه جزء من شبكة أعصاب متطورة */}
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial 
        color="#76d6a4" 
        wireframe 
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
}

export default function MedicalScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#073b31" intensity={1} />
        <MovingStars />
      </Canvas>
    </div>
  );
}
