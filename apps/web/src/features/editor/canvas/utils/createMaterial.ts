import * as THREE from "three";
import type { SceneObjectFieldsFragment } from "@repo/graphql/client";

const DEFAULT_MATERIAL = {
  color: "#808080",
  metalness: 0.5,
  roughness: 0.5,
  side: THREE.DoubleSide,
};

export function createMaterial(
  material: SceneObjectFieldsFragment["material"],
): THREE.Material {
  if (!material) return new THREE.MeshStandardMaterial(DEFAULT_MATERIAL);

  switch (material.type) {
    case "standard":
      return new THREE.MeshStandardMaterial({
        color: material.color ?? "#808080",
        metalness: material.metalness ?? 0.5,
        roughness: material.roughness ?? 0.5,
        opacity: material.opacity ?? 1.0,
        transparent: material.transparent ?? false,
        side: THREE.DoubleSide,
      });
    case "physical":
      return new THREE.MeshPhysicalMaterial({
        color: material.color ?? "#808080",
        metalness: material.metalness ?? 0.5,
        roughness: material.roughness ?? 0.5,
        // clearcoat: material.clearcoat ?? 0.0,
        // clearcoatRoughness: material.clearcoatRoughness ?? 0.0,
        opacity: material.opacity ?? 1.0,
        transparent: material.transparent ?? false,
        side: THREE.DoubleSide,
      });
    case "basic":
      return new THREE.MeshBasicMaterial({
        color: material.color ?? "#808080",
        opacity: material.opacity ?? 1.0,
        transparent: material.transparent ?? false,
        side: THREE.DoubleSide,
      });
    default:
      console.log(
        `Unknown material type: ${material.type}, falling back to MeshStandardMaterial`,
      );
      return new THREE.MeshStandardMaterial({
        color: material.color ?? "#808080",
        metalness: material.metalness ?? 0.5,
        roughness: material.roughness ?? 0.5,
        opacity: material.opacity ?? 1.0,
        transparent: material.transparent ?? false,
        side: THREE.DoubleSide,
      });
  }
}
