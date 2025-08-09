import type { SceneNode } from "../model/sceneNode";
import type { SceneObject, SceneObjectType } from "@repo/graphql/client";

export function toGraphQLSceneObject(node: SceneNode): SceneObject {
  return {
    id: node.id,
    name: node.name,
    background: node.background,
    type: node.type.toLowerCase() as SceneObjectType,
    geometry: node.geometry,
    material: node.material,
    camera: node.camera,
    light: node.light,
    position: node.transform.position,
    rotation: node.transform.rotation,
    scale: node.transform.scale,
    animations: node.animations,
    count: node.count,
    children: node.children.map(toGraphQLSceneObject),
  };
}
