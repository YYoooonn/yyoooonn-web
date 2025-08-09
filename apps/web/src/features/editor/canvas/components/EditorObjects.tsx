import { useSceneStore } from "@/features/editor/nodes/store/nodeStore";
import { NodeRenderer } from "./renderer/NodeRenderer";
import { TestObjects } from "./TestObjects";

export function EditorObjects() {
  const rootId = useSceneStore((s) => s.rootId);
  const nodeCount = useSceneStore((s) => Object.keys(s.nodeMap).length);

  return nodeCount > 1 ? <NodeRenderer nodeId={rootId} /> : <TestObjects />;
}
