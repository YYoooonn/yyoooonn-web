import { useEffect } from "react";
import { useGetSceneQuery } from "@repo/graphql/client";
import { useSceneStore } from "../nodes/store/nodeStore";

export const useSceneLoader = (id: string | null | undefined) => {
  const { loadScene } = useSceneStore();

  const { data, loading, error, refetch } = useGetSceneQuery({
    variables: { id: id ?? "" },
    skip: !id || id === "",
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (loading || !data?.getScene) return;
    loadScene(data.getScene);
  }, [data, loading, loadScene]);

  return {
    loading,
    error,
    refetch,
    scene: data?.getScene,
  };
};
