import { FlattenedSceneNode, SceneNode } from "@/features/editor/nodes/model";
import { createLight } from "../../utils/createLight";

const FALLBACK_LIGHT = <pointLight />;

export function Light({ node }: { node: FlattenedSceneNode }) {
  const { light } = node;
  // if(!light) return FALLBACK_LIGHT

  const l = createLight(light);
  return <primitive object={l} />;
  switch (light?.type) {
    default:
      console.log("fallback to default light");
      return FALLBACK_LIGHT;
  }
}
