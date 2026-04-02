import { BaseNode } from "@/features/editor/nodes/model/designNode";

export interface DiagramNode extends BaseNode {
  children: DiagramNode[];
  is3D: false;

  title: string;
}

export type FlattenedDiagramNode = Omit<DiagramNode, "children"> & {
  children: string[];
};
