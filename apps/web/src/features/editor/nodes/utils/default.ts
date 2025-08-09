import { FlattenedSceneNode } from "../model";

export const DEFAULT_POSITION = { x: 0, y: 0, z: 0 };
export const DEFAULT_ROTATION = { x: 0, y: 0, z: 0 };
export const DEFAULT_SCALE = { x: 1, y: 1, z: 1 };

export const DEFAULT_NODE = {
  id: "TEMPORARY",
  parentId: "",
  name: "unnamed",
  type: "group",
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  children: [],
  count: 1,
} as FlattenedSceneNode;
