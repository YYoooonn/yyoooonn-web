import { CameraControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

interface CameraProps {
  pos: { x: number; y: number; z: number };
  tar: { x: number; y: number; z: number };
  canvasRef: React.RefObject<HTMLDivElement>;
}

export function Camera({ pos, tar, canvasRef }: CameraProps) {
  const camRef = useRef<CameraControls>(null);

  useEffect(() => {
    if (camRef.current) {
      camRef.current.setPosition(pos.x, pos.y, pos.z, true);
      camRef.current.setLookAt(pos.x, pos.y, pos.z, tar.x, tar.y, tar.z, true);
    }
  }, [pos, tar]);

  const handleDblClick = (e: MouseEvent) => {
    camRef.current?.zoomTo(camRef.current?.camera.zoom * 2, true);
  };

  // double click to zoom
  useEffect(() => {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (!canvas) return;

    canvas.addEventListener("dblclick", handleDblClick);

    return () => canvas.removeEventListener("dblclick", handleDblClick);
  }, []);

  return <CameraControls ref={camRef} />;
}
