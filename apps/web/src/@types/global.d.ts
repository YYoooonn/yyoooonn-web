import { extend, ThreeElements } from "@react-three/fiber";
import { FluidMaterial } from "@/features/editor/canvas/assets/FluidMaterial";
import { ShaderMaterial } from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      fluidMaterial: ThreeElements.ShaderMaterial<typeof FluidMaterial>;
    }
  }
}
