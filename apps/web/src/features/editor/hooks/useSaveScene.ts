import { useSceneStore } from "../nodes/store/nodeStore";
import { useSaveSceneMutation } from "@repo/graphql/client";

type UseSaveSceneResult = {
  save: (id?: string) => Promise<boolean>;
  loading: boolean;
  hasError: boolean;
};

export const useSaveScene = (): UseSaveSceneResult => {
  const { rootId, nodeMap } = useSceneStore();
  const [saveSceneMutation, { loading, error }] = useSaveSceneMutation();

  const save = async (id?: string): Promise<boolean> => {
    const payload = {
      id: id ?? rootId,
      data: {
        rootId,
        objects: Object.values(nodeMap),
      },
    };

    try {
      const res = await saveSceneMutation({ variables: payload });
      return Boolean(res.data?.saveScene);
    } catch (err) {
      console.error("Failed to save scene", err);
      return false;
    }
  };

  return { save, loading, hasError: Boolean(error) };
};
