import { FlattenedSceneNode, SceneNode } from "@/features/editor/nodes/model";

export function Light({ node }: { node: FlattenedSceneNode }) {
  if (!node.light) return <pointLight />;

  const { type, color, intensity, position } = node.light;
  const c = color ?? "#ffffff";
  const i = intensity ?? 1;
  const p: [number, number, number] = position
    ? [position.x, position.y, position.z]
    : [0, 0, 0];

  switch (type) {
    case "ambient":
      return <ambientLight color={c} intensity={i} />;
    case "point":
      return <pointLight color={c} intensity={i} position={p} />;
    case "directional":
      return <directionalLight color={c} intensity={i} position={p} />;
    case "spot":
      return <spotLight color={c} intensity={i} position={p} />;
    default:
      console.log("fallback to default light");
      return <pointLight />;
  }
}
