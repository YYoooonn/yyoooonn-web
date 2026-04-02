import { useEffect } from "react";
import { useGetSceneQuery } from "@repo/graphql/client";
import { useSceneStore } from "../nodes/store/nodeStore";
import { SceneNode } from "../nodes/model";

type SceneData = {
  rootId: string;
  objects: SceneNode[];
};

type UseSceneLoaderResult = {
  loading: boolean;
  error: unknown;
  refetch: () => Promise<unknown>;
  scene: SceneData | null;
};

export const useSceneLoader = (
  id: string | null | undefined,
): UseSceneLoaderResult => {
  const loadScene = useSceneStore((s) => s.loadScene);

  const { data, loading, error, refetch } = useGetSceneQuery({
    variables: { id: id ?? "" },
    skip: !id || id === "",
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (loading || !data?.getScene) return;

    const sceneData = data.getScene as SceneData;
    loadScene(sceneData);
  }, [data, loading, loadScene]);

  return {
    loading,
    error,
    refetch: async () => await refetch(),
    scene: (data?.getScene as SceneData | null | undefined) ?? null,
  };
};
