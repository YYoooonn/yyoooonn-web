import { useEffect, useRef } from "react";
import { FluidMaterial } from "../assets/FluidMaterial";
import { extend } from "@react-three/fiber";
import * as THREE from "three";

extend({ FluidMaterial });

export function TestObjects() {
  const ref = useRef<any>();
  const requestId = useRef<number>();
  const meshRef = useRef<THREE.Mesh>(null);

  const animate = () => {
    ref.current.u_time += 0.01;

    requestId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestId.current = requestAnimationFrame(animate);
    return () => {
      if (requestId.current) cancelAnimationFrame(requestId.current);

      // 리소스 dispose
      if (ref.current) {
        ref.current.dispose?.();
      }

      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        if (Array.isArray(meshRef.current.material)) {
          meshRef.current.material.forEach((m) => m.dispose());
        } else {
          meshRef.current.material.dispose();
        }
      }
    };
  }, []);

  return (
    <group>
      <mesh>
        <icosahedronGeometry args={[2, 15]} />
        <fluidMaterial ref={ref} wireframe={true} />
      </mesh>
    </group>
  );
}

// export function TestObjects() {

//   return (
//     <group>
//       <mesh>
//         <icosahedronGeometry args={[2, 15]} />
//         <material {...SHADER_MATERIAL}/>
//       </mesh>
//     </group>
//   );
// }
