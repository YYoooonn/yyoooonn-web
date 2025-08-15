import React, { useEffect, useMemo, useRef } from "react";
import { Group, Vector3, Quaternion, Euler, Matrix4 } from "three";
import { FlattenedSceneNode, SceneNode } from "@/features/editor/nodes/model";
import { Mesh } from "./Mesh";
import { Light } from "./Light";
import { useSceneStore } from "@/features/editor/nodes/store/nodeStore";
import { useAnimations } from "../../hooks/useAnimations";

interface NodeRendererProps {
  // node: SceneNode;
  nodeId: string;
}
export const NodeRenderer: React.FC<NodeRendererProps> = ({ nodeId }) => {
  const node = useSceneStore((s) => s.nodeMap[nodeId]);
  const ref = useRef<Group>(null);
  if (!node) return null;

  // node.animations를 Object3D.userData.animations에 할당
  useEffect(() => {
    if (ref.current) {
      // duration 이 ms 인 경우, sec 단위 환산
      ref.current.userData.animations =
        node.animations?.map((anim) => ({
          ...anim,
          duration: anim.duration > 1000 ? anim.duration / 1000 : anim.duration,
        })) ?? [];
    }
  }, [node.animations]);

  // 애니메이션 훅 호출 (userData.animations 순회 및 갱신)
  useAnimations(ref);

  const position = useMemo(
    () => [node.position.x, node.position.y, node.position.z],
    [node.position],
  ) as [number, number, number];
  const scale = useMemo(
    () => [node.scale.x, node.scale.y, node.scale.z],
    [node.scale],
  ) as [number, number, number];
  const rotation = useMemo(
    () => [node.rotation.x, node.rotation.y, node.rotation.z],
    [node.rotation],
  ) as [number, number, number];

  return (
    <group
      matrixAutoUpdate={false}
      position={position}
      scale={scale}
      rotation={rotation}
      ref={ref}
    >
      {renderByType(node)}
      {node.children?.map((childId) => (
        <NodeRenderer key={childId} nodeId={childId} />
      ))}
    </group>
  );
};

// 노드 타입에 따른 실제 렌더링
function renderByType(node: FlattenedSceneNode) {
  switch (node.type) {
    case "mesh":
      return <Mesh node={node} />;
    case "light":
      return <Light node={node} />;
    case "group":
      return null; // children만 렌더링
    case "scene":
      return null; // root 역할
    case "camera":
      return null; //
    default:
      console.warn("type error", node.type);
      return null;
  }
}
