import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { Animation } from "@repo/graphql/client";

type UserDataAnimation = {
  elapsed?: number;
  easing?: (t: number) => number;
} & Animation;

export function useAnimations(
  objectRef: React.RefObject<THREE.Object3D | null>,
) {
  useFrame((state, delta) => {
    const obj = objectRef.current;
    if (!obj) return;

    applyAnimationsRecursive(obj, delta);
    // 매 프레임 후 transform 업데이트
    obj.updateMatrix();
    obj.updateMatrixWorld(true);
  });
}

function applyAnimationsRecursive(object: THREE.Object3D, delta: number) {
  const anims = object.userData.animations as Animation[] | undefined;
  if (anims) {
    object.userData.animations = anims.filter(
      (anim) => !updateAnimation(anim, object, delta),
    );
  }

  object.children.forEach((child) => applyAnimationsRecursive(child, delta));
}

function updateAnimation(
  anim: UserDataAnimation,
  object: THREE.Object3D,
  delta: number,
): boolean {
  anim.elapsed = (anim.elapsed ?? 0) + delta;

  const delay = anim.delay ?? 0;
  if (anim.elapsed < delay) return false;

  const t = Math.min((anim.elapsed - delay) / anim.duration, 1);
  const easing = anim.easing ?? ((x: number) => x);
  const eased = easing(t);

  const value = anim.from + (anim.to - anim.from) * eased;
  setNestedValue(object, anim.property, value);

  if (t >= 1) {
    if (anim.repeat === -1 || (anim.repeat ?? 0) > 0) {
      anim.elapsed = 0;
      if (anim.repeat && anim.repeat > 0) anim.repeat -= 1;
      return false; // 아직 애니 계속
    }
    return true; // 애니 종료
  }
  return false;
}

function setNestedValue(obj: any, path: string, value: any) {
  const keys = path.split(".");
  const last = keys.pop();
  if (!last) return;

  let target = obj;
  for (const key of keys) {
    if (target == null) return;
    target = target[key];
  }
  if (target == null) return;

  // THREE.Color 특수 처리
  if (target[last] instanceof THREE.Color) {
    target[last].set(value);
    return;
  }

  // Vector3, Euler, number 등 직접 대입 가능
  if (typeof target[last] === "number" || typeof value === "number") {
    target[last] = value;
    return;
  }

  // .set() 메서드가 있다면 사용
  if (target[last] && typeof target[last].set === "function") {
    target[last].set(value);
    return;
  }

  target[last] = value;
}
