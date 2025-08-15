import { useEffect } from "react";
import { useGetSceneQuery } from "@repo/graphql/client";
import { useSceneStore } from "../nodes/store/nodeStore";
import { SceneNode } from "../nodes/model";

export const useSceneLoader = (id: string | null | undefined) => {
  const loadScene = useSceneStore((s) => s.loadScene);

  // useQuery(())

  const { data, loading, error, refetch } = useGetSceneQuery({
    variables: { id: id ?? "" },
    skip: false,
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (loading || !data?.getScene) return;
    const sceneData = data.getScene;
    sceneData &&
      loadScene(sceneData as { rootId: string; objects: SceneNode[] });
  }, [data, loading, loadScene]);

  return {
    loading,
    error,
    refetch,
    scene: data?.getScene,
  };
};
