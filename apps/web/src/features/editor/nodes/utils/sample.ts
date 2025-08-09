import { GeometryType, MaterialType } from "@repo/graphql/client";
import { SceneNode } from "../model";

export const DEFAULT_TRANSFORM = {
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
};

export const DEFAULT_ROOT = {
  id: "root",
  parentId: null,
  name: "unnamed",
  type: "scene" as SceneNode["type"],
  background: "#ffffff",
  is3D: true,
  position: DEFAULT_TRANSFORM.position,
  rotation: DEFAULT_TRANSFORM.rotation,
  scale: DEFAULT_TRANSFORM.scale,
  count: 1,
};

export const SAMPLE_MESH_NODE = {
  id: "sample_aaa",
  name: "sample mesh",
  parentId: null,
  type: "mesh" as SceneNode["type"],
  geometry: {
    type: "box" as GeometryType,
    params: [1, 1, 1],
  },
  material: {
    type: "standard" as MaterialType,
    color: "#00ff00",
    roughness: 0.5,
    metalness: 0.1,
    transparent: false,
    opacity: 1,
  },
  position: DEFAULT_TRANSFORM.position,
  rotation: DEFAULT_TRANSFORM.rotation,
  scale: DEFAULT_TRANSFORM.scale,
  count: 1,
  children: [],
};
