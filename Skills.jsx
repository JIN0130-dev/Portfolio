import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

function RotatingSkills({ skills }) {
  const groupRef = useRef();

  const radius = 3;

  const points = skills.map((skill, i) => {
    const phi = Math.acos(-1 + (2 * i) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;

    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    return { skill, position: [x, y, z] };
  });

  useFrame(({ mouse, clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        mouse.x * Math.PI + clock.getElapsedTime() * 0.2;

      groupRef.current.rotation.x =
        mouse.y * Math.PI + Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((p, i) => (
        <Text
          key={i}
          position={p.position}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {p.skill}
        </Text>
      ))}
    </group>
  );
}

export default function SkillsGlobe() {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Angular",
    "Vue.js",
    "Docker",
    "Kubernetes",
    "AWS",
  ];

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
    >
      {/* Moving Background */}
      <div className="absolute inset-0 bg-moving"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Tech Skills
        </h2>

        <div className="w-full h-96">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingSkills skills={skills} />
            <OrbitControls enableZoom={false} enableRotate={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}