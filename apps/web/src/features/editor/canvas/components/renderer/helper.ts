import * as THREE from "three";

type TTransform = {
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
};

export function toMatrix(transform: TTransform) {
  const pos = new THREE.Vector3(
    transform.position.x,
    transform.position.y,
    transform.position.z,
  );
  const quat = new THREE.Quaternion().setFromEuler(
    new THREE.Euler(
      transform.rotation.x,
      transform.rotation.y,
      transform.rotation.z,
      "XYZ",
    ),
  );
  const sc = new THREE.Vector3(
    transform.scale.x,
    transform.scale.y,
    transform.scale.z,
  );
  return new THREE.Matrix4().compose(pos, quat, sc);
}
