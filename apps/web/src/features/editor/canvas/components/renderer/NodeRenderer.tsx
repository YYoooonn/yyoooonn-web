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
      ref.current.userData.animations = node.animations ?? [];
    }
  }, [node.animations]);

  // 애니메이션 훅 호출 (userData.animations 순회 및 갱신)
  useAnimations(ref);

  const matrix = useMemo(() => {
    const m = new Matrix4();
    const { position, rotation, scale } = node;
    m.compose(
      new Vector3(position.x, position.y, position.z),
      new Quaternion().setFromEuler(
        new Euler(rotation.x, rotation.y, rotation.z),
      ),
      new Vector3(scale.x, scale.y, scale.z),
    );
    return m;
  }, [node.position, node.rotation, node.scale]);

  return (
    <group matrixAutoUpdate={false} matrix={matrix} ref={ref}>
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
