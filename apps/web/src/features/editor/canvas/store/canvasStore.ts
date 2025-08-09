import { create } from "zustand";

interface Vector2 {
  x: number;
  y: number;
}

interface CanvasStore {
  // 카메라 상태 (예: Three.js PerspectiveCamera 기준)
  cameraPosition: { x: number; y: number; z: number };
  cameraTarget: { x: number; y: number; z: number };

  // 마우스 상태
  isDragging: boolean;
  lastPointerPos: Vector2 | null;

  // 상태 업데이트 함수
  setCameraPosition: (pos: CanvasStore["cameraPosition"]) => void;
  setCameraTarget: (target: CanvasStore["cameraTarget"]) => void;
  setIsDragging: (dragging: boolean) => void;
  setLastPointerPos: (pos: Vector2 | null) => void;
}

export const useCanvasStore = create<CanvasStore>((set) => ({
  cameraPosition: { x: 5, y: 5, z: 5 }, // 카메라 초기 위치
  cameraTarget: { x: 0, y: 0, z: 0 }, // 바라보는 지점

  isDragging: false,
  lastPointerPos: null,

  setCameraPosition: (cameraPosition) => set({ cameraPosition }),
  setCameraTarget: (cameraTarget) => set({ cameraTarget }),
  setIsDragging: (isDragging) => set({ isDragging }),
  setLastPointerPos: (lastPointerPos) => set({ lastPointerPos }),
}));
