import * as THREE from "three";
import { type SceneObjectFieldsFragment } from "@repo/graphql/client";

export function NodeMaterial({
  material,
}: {
  material?: SceneObjectFieldsFragment["material"];
}) {
  if (!material) return <meshStandardMaterial side={THREE.DoubleSide} />;

  const { type, color, metalness, roughness, opacity, transparent } = material;
  switch (type) {
    case "standard":
      return (
        <meshStandardMaterial
          color={color ?? "#808080"}
          side={THREE.DoubleSide}
        />
      );
    case "basic":
      return (
        <meshBasicMaterial color={color ?? "#808080"} side={THREE.DoubleSide} />
      );
    case "physical":
      return (
        <meshPhysicalMaterial
          color={color ?? "#808080"}
          side={THREE.DoubleSide}
        />
      );
    default:
      return (
        <meshStandardMaterial
          color={color ?? "#808080"}
          side={THREE.DoubleSide}
        />
      );
  }
}
