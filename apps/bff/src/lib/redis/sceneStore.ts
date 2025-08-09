import { redis } from ".";

export const getSceneById = async (id: string) => {
  const raw = await redis?.get(`scene:${id}`);
  return raw ? JSON.parse(raw) : null;
};

export const saveScene = async (id: string, data: any) => {
  if (!redis) return false;
  try {
    const res = await redis.set(
      `scene:${id}`,
      JSON.stringify(data),
      "EX",
      60 * 30,
    );
    if (res !== "OK") {
      console.log(res);
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const patchScene = async (id: string, patch: any) => {
  const scene = await getSceneById(id);
  if (!scene) throw new Error("Scene not found");

  // 단순 merge 예시
  const merged = { ...scene, ...patch };
  await saveScene(id, merged);
};
