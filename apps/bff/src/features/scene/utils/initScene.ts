import type { SceneObject } from "@repo/graphql/server";
import { loadFromMock } from "./loadFromMock";

export function initScene(id: string) {
  return {
    rootId: id,
    objects: [
      {
        id: id,
        name: "Main Scene",
        type: "scene",
        background: "#d1d5db",
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
        animations: [],
        count: 0,
        parentId: null,
      },
    ],
  };
}

export async function initTestScene(id: string) {
  const mock = await loadFromMock("scene/test2.json");
  const newMock = {
    ...mock,
    rootId: id,
    objects: mock.objects.map((obj: SceneObject) =>
      obj.id === mock.rootId
        ? { ...obj, id }
        : obj.parentId === mock.rootId
          ? { ...obj, parentId: id }
          : obj,
    ),
  };
  return newMock;
}
