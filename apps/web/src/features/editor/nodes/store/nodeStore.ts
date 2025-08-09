import { create } from "zustand";
import { SceneNode, FlattenedSceneNode } from "../model";
import { EditAction } from "@repo/graphql/client";
import { deepMergeLite } from "../utils/deepMerge";
import { DEFAULT_NODE } from "../utils/default";

type SceneData = {
  rootId: string;
  objects: SceneNode[];
};

type NodeMap = Record<string, FlattenedSceneNode>;

interface SceneStore {
  rootId: string;
  nodeMap: NodeMap;
  // root: SceneNode;
  loadScene: (data: SceneData) => void;

  // from prompt
  addNodes: (nodes: FlattenedSceneNode[], parentId?: string) => void;
  removeNodes: (ids: string[], map?: NodeMap) => NodeMap;
  updateNodes: (actions: EditAction[]) => void;
  resetNodes: (nodes: SceneNode[]) => void;

  // manual
  addNode: (node: SceneNode, parentId?: string) => void;
}

export const useSceneStore = create<SceneStore>((set, get) => ({
  // root: DEFAULT_ROOT,
  rootId: "root",
  nodeMap: {},

  loadScene: (data) => {
    const flatMap: Record<string, FlattenedSceneNode> = {};

    data.objects.forEach((obj) => {
      flatMap[obj.id] = { ...obj, children: [] };
    });
    data.objects.forEach((obj) => {
      if (obj.parentId && flatMap[obj.parentId]) {
        flatMap[obj.parentId]?.children.push(obj.id);
      }
    });
    set({ rootId: data.rootId, nodeMap: flatMap });
  },

  addNodes: (nodes, parentId) => {
    const newMap = { ...get().nodeMap };
  },

  resetNodes: (nodes) => {
    const { nodeMap, rootId, loadScene } = get();
    const root = nodeMap[rootId];

    if (!root) return;

    const update = { ...root };

    loadScene({ rootId: rootId, objects: [...nodes, update] as SceneNode[] });
  },

  removeNodes: (ids, map) => {
    const nodeMap = map ?? get().nodeMap;
    const toDelete = new Set<string>();

    const collectAllChildren = (id: string) => {
      toDelete.add(id);
      const node = nodeMap[id];
      if (node && node.children.length > 0) {
        node.children.forEach(collectAllChildren);
      }
    };

    ids.forEach(collectAllChildren);

    // Remove from nodeMap
    const newMap = { ...nodeMap };
    toDelete.forEach((id) => delete newMap[id]);

    // Clean up parent references
    Object.values(newMap).forEach((node) => {
      node.children = node.children.filter((childId) => !toDelete.has(childId));
    });

    return newMap;
  },

  updateNodes: (actions) => {
    const { nodeMap: oldMap, removeNodes, rootId } = get();
    let nodeMap = { ...oldMap };
    const removedIds: string[] = [];

    for (const { type, data } of actions) {
      if (!data) continue;

      switch (type) {
        case "add": {
          const merged = deepMergeLite(
            { ...DEFAULT_NODE, parentId: rootId },
            data,
          ) as FlattenedSceneNode;
          nodeMap[data.id] = merged;
          const parent = nodeMap[data.parentId];
          if (parent && !parent.children.includes(data.id)) {
            parent.children = [...parent.children, data.id];
            nodeMap[data.parentId] = { ...parent }; // shallow clone to trigger react update
          }
          break;
        }

        case "update": {
          const old = nodeMap[data.id];
          if (!old) {
            console.warn(`update failed, id: ${data.id} not exists`);
            break;
          }
          const updated = deepMergeLite(old, data) as FlattenedSceneNode;
          nodeMap[data.id] = updated;
          break;
        }

        case "remove": {
          removedIds.push(data.id);
          break;
        }

        default:
          console.warn(`unknown action type returned: ${type}`);
          break;
      }
    }

    if (removedIds.length > 0) nodeMap = removeNodes(removedIds, nodeMap);

    set({ nodeMap });
  },

  addNode: (node, parentId) => {
    // const flattend = flattenNode(node, pId);
    if (!node.parentId) node = { ...node, parentId: parentId ?? get().rootId };

    const newMap = { ...get().nodeMap };
    newMap[node.id] = { ...node, children: [] };

    // add childId to parent
    const pId = node.parentId ?? get().rootId;
    if (newMap[pId]) {
      const update = [...new Set([...newMap[pId].children, node.id])];
      newMap[pId] = { ...newMap[pId], children: update };
    }

    set({ nodeMap: newMap });
  },
}));
