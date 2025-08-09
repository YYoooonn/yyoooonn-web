import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { useRef } from "react";
import { useCanvasStore } from "../store/canvasStore";
import { useCanvasInteraction } from "../hooks/useCanvasInteraction";
import { Camera } from "./Camera";
import { EditorObjects } from "./EditorObjects";

const DEFAULT = {
  ambientLight: {
    intensity: 1,
    color: "#ffffff",
  },
  directionalLight: {
    intensity: 5,
    position: [5, 10, 10] as [x: number, y: number, z: number],
    color: "#ffffff",
  },
  background: {
    color: "#d1d5db",
  },
};

interface CanvasProps {
  background?: string;
  children?: React.ReactNode;
}

export function Canvas({
  background = DEFAULT.background.color,
  children,
}: CanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { cameraPosition, cameraTarget } = useCanvasStore();

  // useCanvasInteraction(canvasRef);

  return (
    <div style={{ width: "100%", height: "100%" }} ref={canvasRef}>
      <ThreeCanvas frameloop="always" shadows>
        <color attach="background" args={[background]} />
        <ambientLight intensity={5} color={"#ffffff"} />
        <directionalLight position={[10, -10, 3]} intensity={2} />
        <Camera pos={cameraPosition} tar={cameraTarget} canvasRef={canvasRef} />
        <EditorObjects />
        {children}
      </ThreeCanvas>
    </div>
  );
}
