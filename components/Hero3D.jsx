import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Hero3D() {
  return (
    <div className="absolute w-full h-full top-0 left-0 -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Sphere args={[1.5, 64, 64]} scale={1.5}>
          <MeshDistortMaterial 
            color="#FF4C60" 
            attach="material" 
            distort={0.4} 
            speed={2} 
          />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
