export interface BaseNode {
  id: string;
  parentId: string | null | undefined;
  name: string;
  type: string;
  children: BaseNode[];
  position: { x: number; y: number; z?: number };
  is3D?: boolean;
  props?: Record<string, string | number>;
}
