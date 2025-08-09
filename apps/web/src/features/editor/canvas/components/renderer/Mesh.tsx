import { FlattenedSceneNode, SceneNode } from "@/features/editor/nodes/model";
import { createGeometry } from "../../utils/createGeometry";
import { createMaterial } from "../../utils/createMaterial";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { NodeGeometry } from "./nodeGeometry";
import { NodeMaterial } from "./nodeMaterial";

export function Mesh({ node }: { node: FlattenedSceneNode }) {
  // geometry, material을 useMemo로 캐싱
  // const geometry = useMemo(() => createGeometry(node.geometry), [node.geometry]);
  // const material = useMemo(() => createMaterial(node.material), [node.material]);

  // mesh ref 생성 및 유지
  const meshRef = useRef<THREE.Mesh>(null);

  // 언마운트 시 dispose 처리
  // useEffect(() => {
  //   return () => {
  //     geometry.dispose();
  //     material.dispose();
  //     meshRef.current?.geometry.dispose();
  //     if (Array.isArray(meshRef.current?.material)) {
  //       meshRef.current.material.forEach((m) => m.dispose());
  //     } else {
  //       meshRef.current?.material.dispose();
  //     }
  //   };
  // }, [geometry, material]);

  return (
    <mesh ref={meshRef}>
      <NodeGeometry geometry={node.geometry} />
      <NodeMaterial material={node.material} />
    </mesh>
  );
}
