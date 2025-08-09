import * as THREE from "three";
import type { SceneObjectFieldsFragment } from "@repo/graphql/client";

export function createLight(obj: SceneObjectFieldsFragment["light"]) {
  if (!obj) return new THREE.DirectionalLight();
  const { type, color, intensity, position } = obj;
  const c = color ?? "#ffffff";
  const i = intensity ?? 1;

  let light: THREE.Light;

  switch (type) {
    case "ambient":
      return new THREE.AmbientLight(c, i);
    case "point":
      light = new THREE.PointLight(c, i);
      if (position) light.position.set(position.x, position.y, position.z);
      return light;
    case "directional":
      light = new THREE.DirectionalLight(c, i);
      if (position) light.position.set(position.x, position.y, position.z);
      return light;
    case "spot":
      light = new THREE.SpotLight(c, i);
      if (position) light.position.set(position.x, position.y, position.z);
      return light;
    default:
      console.log(
        `light type error ${type} not supported, fallback to default light`,
      );
      return new THREE.DirectionalLight();
  }
}
