import type {
  Geometry,
  Material,
  Light,
  Camera,
  Vector3,
  Animation,
} from "@repo/graphql/client";
import { BaseNode } from "./designNode";

export interface SceneNode extends BaseNode {
  type: "mesh" | "light" | "camera" | "group" | "scene";
  background?: string;
  geometry?: Geometry;
  material?: Material;
  light?: Light;
  camera?: Camera;

  // transform
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;

  animations?: Animation[];
  count: number;
  children: SceneNode[];
}

export type FlattenedSceneNode = Omit<SceneNode, "children"> & {
  children: string[];
};

export type SceneNodeUpdate = Partial<
  Omit<FlattenedSceneNode, "id" | "children">
>;
