export interface BaseNode {
  id: string;
  parentId: string | null | undefined;
  name: string;
  type: string;
  children: BaseNode[];
  is3D?: boolean;
  props?: Record<string, string | number>;
}
