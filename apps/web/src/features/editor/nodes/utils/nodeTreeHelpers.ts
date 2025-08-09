import { FlattenedSceneNode, SceneNode } from "../model";

// 노드 업데이트
export function updateNodeById(
  node: SceneNode,
  id: string,
  updater: (node: SceneNode) => SceneNode,
): SceneNode {
  if (node.id === id) return updater(node);
  if (!node.children) return node;

  return {
    ...node,
    children: node.children.map((child) => updateNodeById(child, id, updater)),
  };
}

// 노드 삭제
export function deleteNodeById(node: SceneNode, id: string): SceneNode | null {
  if (node.id === id) return null;
  if (!node.children) return node;

  const newChildren = node.children
    .map((child) => deleteNodeById(child, id))
    .filter(Boolean) as SceneNode[];

  return { ...node, children: newChildren };
}

export function flattenNode(
  node: SceneNode,
  pId: string,
  acc: Record<string, FlattenedSceneNode> = {},
) {
  acc[node.id] = {
    ...node,
    parentId: pId,
    children: node.children?.map((c) => c.id) || [],
  };
  if (node.children) {
    node.children.forEach((child) => flattenNode(child, node.id, acc));
  }
  return acc;
}
