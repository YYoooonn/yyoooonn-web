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
